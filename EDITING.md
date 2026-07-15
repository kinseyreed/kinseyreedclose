# Editing your website (no code required)

Your site's words, photos, publications, talks, links, etc. all live in simple
"content" files, and you edit them through a friendly dashboard called **Pages CMS** —
no HTML, no terminal. When you save, the site rebuilds and republishes itself
automatically in a minute or two.

## One-time setup (about 5 minutes)

1. Make sure the site is deployed first (see `README.md`).
2. Go to **https://app.pagescms.org** and click **Sign in with GitHub**.
3. Authorize Pages CMS and, when asked, give it access to the **`kinseyreedclose`** repository.
4. Open the `kinseyreedclose` project. You'll see a menu: **Site & Contact, Tools menu,
   Home page, Research & Publications, CV page, Outreach & Media,** and **Media**.

Bookmark app.pagescms.org — that's your editing dashboard from now on.

## Making an edit

1. Pick a section from the left (e.g. **Home page**).
2. Change text in the fields, reorder or add items to lists with the **+** button,
   drag to reorder, or trash to remove.
3. Click **Save**. That's it — the live site updates itself within ~2 minutes.

## Photos

- Go to **Media** to upload a new photo (drag-and-drop). Keep files reasonably sized
  (an exported/512–2000px-wide JPG is perfect).
- To change the hero or portrait photo, open **Home page**, click the photo field, and
  pick a new image from your media library.

## Updating your CV PDF

1. In **Media**, upload your new PDF (e.g. `Kinsey_Reed_Close_CV.pdf`).
2. In **CV page → CV PDF path**, make sure it points at `assets/your-file-name.pdf`.
   (The download button on the CV page uses this.)

## A few tiny formatting notes

Most fields are plain text. A few let you use light formatting:

- `<em>word</em>` → shows as goldenrod italic (used in the big home heading).
- `<strong>word</strong>` → bold.
- `<br>` → a line break.
- In a **publication citation**: wrap your name in `<span class="me">Reed Close K</span>`
  to bold it, a journal in `<span class="venue">Journal Name</span>` to italicize it,
  and a link as `<a href="https://...">link text</a>`.

If you ever paste one of these and it looks wrong, just copy the pattern from an existing
entry right above it.

## What if something breaks?

Every save is a normal GitHub commit, so nothing is ever lost — the previous version is
always in the repo's history and can be restored. If the site doesn't update after a few
minutes, check the **Actions** tab of the GitHub repo for a red ✗ (that tells you which
edit had a typo), or just undo your last change in Pages CMS.
