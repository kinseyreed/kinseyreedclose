IMAGES & CV IN THIS FOLDER
==========================

Currently wired into the site:
  hero.jpg      -> home page hero (your meadow photo, IMG_3392)
  portrait.jpg  -> "About Me" portrait (professional farm shot, "Kinsey Reed (1 of 5)")
  Kinsey_Reed_Close_CV.pdf -> the "Download CV (PDF)" button

Extra photos already prepped here if you want to swap one in:
  portrait-alt-bluestem.jpg  -> candid holding big bluestem (IMG_1265)
  field-sign.jpg             -> you at the WV Pasture Diversity research sign (IMG_9349)

TO SWAP THE ABOUT PORTRAIT (e.g. to the bluestem candid):
  In index.html, find the line with class="portrait" and change both
  occurrences of 'assets/portrait.jpg' to 'assets/portrait-alt-bluestem.jpg'.

TO SWAP THE HERO:
  In index.html, find the line with class="hero-photo" and change both
  occurrences of 'assets/hero.jpg' to your new file.

TO REGENERATE THE CV PDF after editing cv-print.html:
  From the website/ folder, run:
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
    --no-pdf-header-footer --virtual-time-budget=8000 \
    --print-to-pdf="assets/Kinsey_Reed_Close_CV.pdf" "file://$PWD/cv-print.html"

Tip: phone photos here are already rotated/optimized for web. If you add new phone
photos, keep the originals — browsers read their orientation automatically.
