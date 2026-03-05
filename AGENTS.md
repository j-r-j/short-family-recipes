## Cursor Cloud specific instructions

This is a single-service, client-side-only React + Vite static recipe site. No backend, no database, no Docker.

### Running the app

```
npm run dev -- --host 0.0.0.0
```

The app serves at `http://localhost:5173/short-family-recipes/` (note the base path configured in `vite.config.js`).

### Build

```
npm run build
```

### Notes

- There is no ESLint or TypeScript configured; the project uses plain JSX.
- All recipe data is hardcoded in `src/RecipeBook.jsx`.
- The `base` path in `vite.config.js` is `/short-family-recipes/` (for GitHub Pages deployment). Use this path when accessing the dev server.
