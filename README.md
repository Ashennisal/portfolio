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

## Step 2 — Résumé PDF + project screenshots (finish when ready)

### A. Résumé (PDF)

1. Write or export your CV as a **PDF** (Word *Save as PDF*, Google Docs *Download → PDF*, etc.).
2. Save the file here: **`cv.pdf`** (same folder as `index.html`, e.g. `C:\Users\nisal\portfolio\cv.pdf`).
3. In **`content.js`**, set **`cvUrl: "cv.pdf"`** (right now it may be `""` so the site doesn’t show a broken link).
4. In PowerShell, from this folder:

```powershell
git add cv.pdf content.js
git commit -m "Add CV and enable resume link"
git push
```

5. Wait ~1 minute, then open your GitHub Pages URL and test **Résumé** / **Download PDF**.

**Optional:** Host the PDF elsewhere (Google Drive direct link, etc.) and set **`cvUrl`** to that full `https://...` address instead.

### B. Project screenshots (replace SVG placeholders)

1. Open each app (or use an old screenshot), capture the main screen:
   - **Windows:** `Win + Shift + S`, or *Snipping Tool*, paste/save as PNG.
2. Save into the **`images/`** folder, for example:
   - `images/wedding.png`
   - `images/real-estate.png`
   - `images/legal.png` (when you have something to show)
3. Open **`projects.js`** and change each project’s **`image`** line to match, e.g. `image: "images/wedding.png",`
4. You can delete the old `*-preview.svg` files after you’re happy, or keep them unused.
5. Commit and push:

```powershell
git add images projects.js
git commit -m "Add real project screenshots"
git push
```

Until you do **A**, `cvUrl` stays `""` and no résumé buttons appear. Until you do **B**, the SVG previews still work as placeholders.
