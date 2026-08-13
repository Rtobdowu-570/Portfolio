# SLEEK // NULL

A responsive brutalist portfolio for Null, a frontend developer based in Nigeria. The site presents selected public projects, current tools, and contact links in a focused single-page experience.

## Built with

- React 19
- Vite 6
- JavaScript
- Custom CSS
- React Icons

## Run locally

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:5173`.

## Verify a production build

```bash
npm run lint
npm run build
```

## Project structure

```text
src/
├── assets/
│   ├── components/     # Page sections and reusable UI pieces
│   ├── page/           # Page composition
│   └── styles/         # Global portfolio styles
├── App.jsx
└── main.jsx
```

## Deployment

The project is configured for Vercel with `vercel.json`. The production build output is generated in `dist/` and is intentionally ignored by Git.

## Content notes

Project descriptions and links are based on the public repositories listed in the portfolio. Add more detail to a project card only when the underlying project supports it; do not add unverified metrics or outcomes.
