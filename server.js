// ============================================================
// Monkaura — Hostinger Node.js hosting entry point (ESM wrapper)
// ============================================================
//
// Hostinger hPanel Node.js hosting runs `npm start` (or a custom
// start command) and expects the app to listen on the PORT that
// Hostinger injects into process.env.PORT.
//
// The real server lives in server.ts (compiled to dist/server.cjs
// by `npm run build`), but this ESM wrapper makes Hostinger's Node
// Path resolver happy ("server.js") while preserving the exact
// production build produced by the Vite/esbuild pipeline.
//
// This wrapper sets NODE_ENV=production before importing the real
// server bundle so the Express app ALWAYS serves the static dist/
// build and the /api/* routes — never the Vite dev middleware.
// ============================================================

process.env.NODE_ENV = process.env.NODE_ENV || "production";

// Load the production bundle compiled by `npm run build`.
// dist/server.cjs is the exact same artifact `npm start` runs.
await import("./dist/server.cjs");