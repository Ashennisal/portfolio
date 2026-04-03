# Ashen Nisal — Portfolio

Personal developer portfolio: projects, skills, experience, and contact. Static **HTML**, **CSS**, and **JavaScript** (no build step).

**Live site:** [ashennisal.github.io/portfolio](https://ashennisal.github.io/portfolio/)

## Stack

- Single-page layout (`index.html`)
- Content in `content.js` (bio, skills, experience, contact, résumé link)
- Project cards in `projects.js` (titles, links, screenshots)
- Styling in `styles.css`; rendering helpers in `app.js`

## Edit locally

1. Clone or download this repo.
2. Open `index.html` in a browser, or use a simple local server if you prefer.
3. Change copy in **`content.js`** and projects in **`projects.js`**, then refresh.

**Résumé:** add or replace **`cv.pdf`** in the repo root and keep `cvUrl: "cv.pdf"` in `content.js` (or point `cvUrl` at any public `https://` PDF URL).

**Project thumbnails:** image paths live in **`projects.js`**; files go under **`images/`**.

## Deploy (GitHub Pages)

This repo uses **Deploy from a branch**: branch **`main`**, folder **`/` (root)**. Push to `main` and the site updates in about a minute.

To use this as a template for your own portfolio, fork the repo, enable Pages the same way, and replace the content in `content.js` / `projects.js`.
