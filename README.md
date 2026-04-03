# Portfolio (static site)

Plain HTML, CSS, and JavaScript — no build step. Open `index.html` locally or host with GitHub Pages.

## Step 1 — GitHub Pages

1. On GitHub, create a new repository (example name: `portfolio`). Leave it empty (no README) if you will push from your computer first.
2. In this project folder, run (replace `YOUR_USER` and `REPO`):

```bash
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/REPO.git
git push -u origin main
```

3. On GitHub: open the repo → **Settings** → **Pages** (left sidebar).
4. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
5. **Branch**: `main`, **folder**: `/ (root)` → **Save**.
6. After a minute or two, GitHub shows your site URL at the top of the Pages settings. It will look like:

`https://YOUR_USER.github.io/REPO/`

**If the repository name is `yourusername.github.io`**, the site URL is `https://yourusername.github.io/` (no extra path).

## Step 2 — Résumé PDF

1. Export your CV as a PDF.
2. Save it in this folder as **`cv.pdf`** (same folder as `index.html`).
3. `content.js` should keep `cvUrl: "cv.pdf"` so the hero and contact links work on GitHub Pages.

If you prefer hosting the PDF elsewhere (Google Drive, etc.), change `cvUrl` in `content.js` to that full `https://` link.

## Project screenshots

`images/*.svg` files are **placeholders**. Replace them with real screenshots (PNG or JPG), update the `image` paths in `projects.js`, and commit again.
