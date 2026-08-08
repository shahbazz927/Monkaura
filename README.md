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

## API

- `POST /api/recipes/generate` — Generates a keto-friendly recipe using OpenRouter.
  - Body: `{ "ingredient": "strawberry", "category": "dessert", "preference": "baking" }`
  - Returns: JSON recipe with `recipeName`, `description`, `prepTime`, `cookTime`, `servings`, `ingredients`, `instructions`, `nutrition`, and `chefTip`.