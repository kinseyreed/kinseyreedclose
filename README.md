# Kinsey Reed Close, PhD — personal website

A fast, custom-designed academic site (Appalachian palette: pine / clay / goldenrod /
oatmeal, warm serif type, ridgeline dividers). Built with **Eleventy** (a static-site
generator) so the content lives in simple data files, and edited through a friendly
dashboard (**Pages CMS**) — no code needed for day-to-day changes. Hosted free on GitHub
Pages.

**➡️ To edit the site's content, see [EDITING.md](EDITING.md).** You almost never need
the technical stuff below.

## How it fits together

- **Content** lives in `src/_data/*.yaml` (home, research, cv, outreach, site, tools) and
  photos live in `src/assets/`.
- **Design/templates** live in `src/*.njk` and `src/_includes/*.njk` plus `src/styles.css`.
  Editing content never touches these, so the design stays intact.
- On every change, a **GitHub Action** rebuilds the site and publishes it automatically.
- **Pages CMS** (app.pagescms.org) is the dashboard that edits the content files for you.

## Project structure

| Path | What it is |
|------|-----------|
| `src/_data/*.yaml` | **All editable content** (usually edited via the dashboard) |
| `src/assets/` | Photos + the CV PDF |
| `src/*.njk` | Page templates (home, research, cv, outreach) |
| `src/_includes/` | Shared nav, footer, ridgeline, base layout |
| `src/styles.css` | The design system |
| `.pages.yml` | Defines the Pages CMS editing dashboard |
| `.github/workflows/deploy.yml` | Auto-build + deploy on every change |
| `.eleventy.js`, `package.json` | Build configuration |
| `cv-print.html` | Source used to regenerate the CV PDF (optional, see bottom) |

## Deploy to GitHub Pages (one-time)

This folder is a git repository with everything committed on `main`.

1. On GitHub, create a new **public** repo named exactly **`kinseyreedclose`** — leave it
   empty (no README/license).
2. From this folder, push:
   ```bash
   cd "/Users/kyreed/Desktop/Claude/website"
   git remote add origin https://github.com/kinseyreed/kinseyreedclose.git
   git push -u origin main
   ```
3. Turn on Pages: repo → **Settings → Pages** → **Build and deployment → Source: GitHub
   Actions**. (That's it — the included workflow does the building.)
4. In ~2 minutes the site is live at **https://kinseyreed.github.io/kinseyreedclose/**.
   Watch progress in the repo's **Actions** tab.
5. Connect the editing dashboard: follow **[EDITING.md](EDITING.md)** → one-time setup.

Your existing apps (`/appalachian-pasture-planner/`, `/identikit/`) are separate repos and
are unaffected. All links here are relative, so the site works under the `/kinseyreedclose/`
subpath.

## Working locally (optional, for developers)

```bash
npm install       # first time only
npm run serve     # live preview at http://localhost:8080
npm run build     # outputs the finished site into _site/
```

## Regenerating the CV PDF (optional)

The CV **page** updates automatically from your content, but the downloadable **PDF** is a
separate file. Easiest path: export a PDF from Word and upload it via the dashboard
(EDITING.md). To regenerate the styled PDF from `cv-print.html` instead:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf="src/assets/Kinsey_Reed_Close_CV.pdf" "file://$PWD/cv-print.html"
```
