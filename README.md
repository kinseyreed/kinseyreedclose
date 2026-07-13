# Kinsey Reed Close, PhD — personal website

A fast, dependency-free static site (plain HTML/CSS/JS) designed to be hosted on GitHub Pages.
Inspired in style by academic sites like paige-stanley.com: sage-green + charcoal palette,
condensed display type (Oswald), clean whitespace.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, about, research focus, current projects, contact |
| `research.html` | Research interests, publications (with DOI links), grants |
| `cv.html` | Full CV — education, positions, awards, talks, teaching, mentorship, service |
| `outreach.html` | Community outreach, media & press coverage, video productions |
| `cv-print.html` | Print-optimized CV; source used to generate the downloadable PDF |
| `styles.css` | Shared design system (Appalachian palette: pine / clay / goldenrod / oatmeal) |
| `site.js` | Mobile nav toggle + footer year |
| `assets/` | Photos + CV PDF (already wired — see `assets/README.txt` to swap) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Photos & CV PDF

Your photos and a generated 4-page CV PDF are already wired in (`assets/hero.jpg`,
`assets/portrait.jpg`, `assets/Kinsey_Reed_Close_CV.pdf`). Two alternate photos are also
prepped in `assets/` if you want to swap. See `assets/README.txt` for how to swap images
or regenerate the PDF from `cv-print.html`.

## Preview locally

Just double-click `index.html`, or run a local server:

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

**Option A — user site (recommended, gives you `kinseyreed.github.io`):**

This folder is already a git repository with everything committed on the `main` branch, so
deploying is just two commands once you've made the empty GitHub repo.

1. On GitHub, create a new **public** repo named exactly **`kinseyreed.github.io`**.
   Do NOT add a README, .gitignore, or license (leave it empty).
2. From this folder, connect it and push:
   ```bash
   cd "/Users/kyreed/Desktop/Claude/website"
   git remote add origin https://github.com/kinseyreed/kinseyreed.github.io.git
   git push -u origin main
   ```
3. Your site goes live at **https://kinseyreed.github.io** within a minute or two.
   (If it doesn't appear, check repo → Settings → Pages → Source = `main` / `/root`.)

Your existing apps stay where they are — `kinseyreed.github.io/appalachian-pasture-planner/`
and `kinseyreed.github.io/identikit/` are separate project repos and are unaffected.

**Option B — project site (URL like `username.github.io/website`):**

1. Push these files to any repo (e.g. `personal-site`).
2. Repo → **Settings → Pages** → *Build and deployment* → Source: **Deploy from a branch**,
   Branch: **main**, folder **/ (root)** → Save.
3. Live at `https://<your-username>.github.io/<repo-name>/`.

**Custom domain (optional):** if you buy e.g. `kinseyreedclose.com`, add a file named `CNAME`
containing just the domain, then set the DNS records shown in Settings → Pages.

## Editing content

Everything is hand-written HTML — open any `.html` file and edit the text directly.
Publications, talks, and awards are plain lists, easy to append to.
