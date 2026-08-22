# Jibin John, PhD — Professional Website

Source code for the professional portfolio of Jibin John, PhD, a research scientist, bioinformatician, and computational biologist.

The site presents research experience, scientific specializations, publications, conference abstracts, continuing education, and a future-ready blog.

## Live website

[jibin-homepage-draft.jibinjohnv.chatgpt.site](https://jibin-homepage-draft.jibinjohnv.chatgpt.site)

## Technology

- React 19 and TypeScript
- Next.js-compatible routing through Vinext
- Vite build tooling
- Responsive, accessible custom CSS
- Static Netlify export included

## Run locally

Requirements: Node.js 22.13 or newer, npm, Bash, GNU `timeout`, `flock`, and `curl`.

```bash
npm ci
npm run dev
```

Open the local URL displayed by Vite.

## Build and test

```bash
npm run build
npm test
npm run lint
```

## Deploy to Netlify

The repository includes `netlify.toml`. Netlify runs `npm run build:netlify` and publishes `netlify-dist`.

To deploy manually:

1. Import this GitHub repository in Netlify.
2. Keep the build settings detected from `netlify.toml`.
3. Select **Deploy site**.

The static export includes the home, about, research, expertise, continuing education, publications, conferences, blog, and contact pages, together with sitemap, robots, redirect, and 404 files.

## Main source locations

- `app/` — pages, shared components, site content, metadata, and styles
- `public/` — portrait, institution marks, social preview, and icons
- `scripts/export-netlify.mjs` — prerenders the public routes for Netlify
- `tests/` — rendered HTML verification

## Content maintenance

Structured publications, conferences, education, awards, and professional history are maintained in `app/data.ts`. Long-form expertise content is maintained in `app/skills-specializations/skills-content.md`.

© Jibin John. All rights reserved.
