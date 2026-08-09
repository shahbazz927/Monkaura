<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Monkaura Recipe Generator

MONKAURA is a zero-sugar sweetener brand website featuring a keto recipe generator powered by OpenRouter AI.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env` and set `OPENROUTER_API_KEY` to your OpenRouter API key:
   `OPENROUTER_API_KEY=your_openrouter_api_key_here`
   Get a key at https://openrouter.ai/keys
3. Run the app:
   `npm run dev`

## Production Build

`npm run build`

## Production Start

- Standard production server: `npm start` → runs `node dist/server.cjs`
- Hostinger Node.js hosting entry point: `npm run start:hostinger` → runs `node server.js` (ESM wrapper that loads the same `dist/server.cjs` bundle)

The server listens on `process.env.PORT || 3000`, so it works locally and on Hostinger (which auto-injects its assigned port).

## Deploying to Hostinger Node.js hosting

Hostinger serves the static `dist/` build from your document root (e.g. `public_html/`) through Apache/LiteSpeed **before** any request reaches Node.js. That is why a browser `fetch("/api/recipes/generate")` previously received Hostinger's static "This Page Does Not Exist" HTML page instead of JSON — causing `Unexpected token '<', "<!DOCTYPE "... is not valid JSON` in the frontend.

To fix API routing in production, follow these steps:

1. After `npm run build`, deploy **everything in `dist/`** to your Hostinger document root (e.g. `public_html/`). This includes:
   - `index.html` and all pre-rendered route folders (`/products`, `/zero-sugar-recipes`, etc.)
   - `/assets/*` (hashed JS/CSS bundles)
   - **`.htaccess`** — copied from `public/.htaccess` into `dist/` by Vite. This file proxies every `/api/*` request to the Express server via `mod_rewrite` + `[P]` (proxy), so `/api/recipes/generate` always reaches Node.js and always returns JSON.
2. In Hostinger **hPanel → Node.js → your app**:
   - Set **Application root** and **Node.js version** (18+ recommended).
   - Set **Startup file / start command** to: `npm run start:hostinger` (uses the ESM `server.js` wrapper).
   - Copy your `OPENROUTER_API_KEY` into the app's **Settings / Environment variables** (or a Hostinger `.env` file in the project root). **Never commit a real key.**
3. Make sure the **PORT** in `public/.htaccess` (default `127.0.0.1:3000`) matches the port Hostinger assigned to your Node.js app (visible in hPanel → Node.js → Settings). The Express app listens on `process.env.PORT || 3000`, and Hostinger injects the assigned port automatically.
4. If the API still returns HTML, add this to Hostinger's Apache `extra` config or the site's `RewriteOptions` (LiteSpeed only):
   ```
   RewriteOptions InheritDownBefore
   ```
   or place the `.htaccess` proxy rules in the root `public_html/.htaccess` (not just the subfolder).

## API

- `POST /api/recipes/generate` — Generates a keto-friendly recipe using OpenRouter.
  - Body: `{ "ingredient": "strawberry", "category": "dessert", "preference": "baking" }`
  - Returns: JSON recipe with `recipeName`, `description`, `prepTime`, `cookTime`, `servings`, `ingredients`, `instructions`, `nutrition`, and `chefTip`.
  - All errors return JSON with an HTTP status code — never HTML.

The OpenRouter API key is used **only** server-side via `process.env.OPENROUTER_API_KEY` in `server.ts`. It is never exposed to the browser.