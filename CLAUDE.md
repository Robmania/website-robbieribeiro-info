# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server at http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # next lint (eslint-config-next core-web-vitals)
```

There is no test suite and no test runner configured.

`.env.local` must define `NEXT_PUBLIC_SITE_URL` (it is gitignored; `.env.example` is the template). The value is read in `src/pages/_document.jsx` for the RSS `<link rel="alternate">` tags.

## What this is

A personal CV/portfolio site for Robbie Ribeiro, forked from the Tailwind UI "Spotlight" template (hence `"name": "tailwindui-template"` in `package.json`). Next.js 13 **Pages Router**, JavaScript only (no TypeScript), Tailwind CSS.

Deployed to Azure Static Web Apps via `.github/workflows/azure-static-web-apps-polite-pebble-0da01aa1e.yml` — every push to `master` deploys. The workflow uses `app_location: "/"` with an empty `output_location`, so Azure's Oryx build detects and builds the Next.js app itself. `next.config.mjs` sets `images.unoptimized: true` because the Azure host does not run the Next image optimizer.

## Architecture

- `src/pages/` — routes: `index`, `about`, `skills`, `experience`, `contact`. Nav links live in **two** places in `src/components/Header.jsx` (`MobileNavItem` list and `NavItem` list) plus `src/components/Footer.jsx`; adding a page means editing all three.
- `src/components/` — presentational building blocks shared across pages. `Container` sets the page gutter/max-width, `Card` and `Section` structure list content, `SimpleLayout` is the standard title + intro page shell.
- `src/styles/tailwind.css` — the only global stylesheet, imported from `src/pages/_app.jsx`.
- `@/*` resolves to `src/*` (`jsconfig.json`).

### Dark mode

Tailwind runs in `darkMode: 'class'`. An inline script in `src/pages/_document.jsx` applies the `dark` class to `<html>` before paint, reading `localStorage.isDarkMode` and falling back to `prefers-color-scheme`. The toggle button in `Header.jsx` writes that key. Because the class is set pre-hydration, do not move this logic into a React effect. Every colour utility should have a `dark:` counterpart.

### Layout shell

`_app.jsx` renders a fixed background layer plus `Header` / `<main>` / `Footer`. `Header` measures itself and writes CSS custom properties (`--header-position`, `--content-offset`, etc.) so the avatar shrinks and pins on scroll — this only runs on `/` (`isHomePage`). Changes to header markup can break those measurements.

## Template leftovers

This fork removed the blog. Expect dead code from the original template and do not treat it as active:

- `next.config.mjs` still wires up MDX (`@next/mdx`, `remark-gfm`, `rehype-prism`) and `pageExtensions` still includes `mdx`, but there are no `.mdx` files.
- `src/components/ArticleLayout.jsx` and `src/components/Prose.jsx` are unused; `src/styles/prism.css` is not imported.
- `_document.jsx` links to `/rss/feed.xml` and `/rss/feed.json`, which are never generated.

## Conventions

Prettier: single quotes, no semicolons, with `prettier-plugin-tailwindcss` sorting class names — match this when editing. The codebase uses `let` over `const` for local bindings and defines small SVG icon components inline in the file that uses them (see `Header.jsx`, `index.jsx`).

## The CV

`cv/` holds the editable Word sources; `public/` holds only the exported PDF, because everything under `public/` is published to the live site. The download button in `src/pages/index.jsx` links the PDF by filename, so a new export means updating that link.

The PDF is a Word export with a two-column layout (sidebar: Skills / Qualifications / Contact; main column: Profile / Experience). To update it, edit `word/document.xml` inside the .docx rather than rebuilding the document — that preserves the design exactly. Then export with Word itself:

```powershell
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("<abs path>.docx", $false, $true)
$doc.ExportAsFixedFormat("<abs path>.pdf", 17)   # 17 = wdExportFormatPDF
$doc.Close($false); $word.Quit()
```

Note that `ComputeStatistics(2)` under-reports the page count on a non-visible Word instance; check `/Count` in the emitted PDF instead.
