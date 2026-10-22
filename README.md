# Kelly Educational Consulting — Website

> *Empowering Minds, Unlocking Potential*

Marketing website for **Kelly Educational Consulting**, an education consultancy in Oklahoma City, Oklahoma (est. 2013).

A fast, dependency-free static site (HTML + CSS + vanilla JS) that deploys to GitHub Pages automatically.

## Project structure

```
.
├── index.html                  # All page content
├── styles.css                  # Styles (brand colors at the top in :root)
├── script.js                   # Mobile menu, scroll reveal, contact form
├── assets/
│   ├── logo.png                # Company logo
│   └── favicon.png
└── .github/workflows/pages.yml # Auto-deploy to GitHub Pages on push to main
```

## Run locally

No build step. Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish to GitHub

```bash
# from this folder
git remote add origin https://github.com/<your-username>/kelly-educational-consulting.git
git push -u origin main
```

Or with the GitHub CLI:

```bash
gh repo create kelly-educational-consulting --public --source=. --push
```

Then in the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**. The site will be live at
`https://<your-username>.github.io/kelly-educational-consulting/` after the workflow finishes.

### Custom domain (optional)

1. Add a file named `CNAME` containing your domain, e.g. `kellyeducationalconsulting.com`.
2. Point your domain's DNS at GitHub Pages ([docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Enable **Enforce HTTPS** in Settings → Pages.

## Before launch — fill in the placeholders

Search the code for `TODO` to find them all:

- [ ] **Contact info** in `index.html` (email, phone are placeholders) and `CONTACT_EMAIL` in `script.js`
- [ ] **Services list** — confirm the four services match what the company offers
- [ ] **LinkedIn URLs** — verify the company page and jobs links
- [ ] **Logo** — `assets/logo.png` was cropped from a screenshot; replace with the original high-res file (SVG or 512px+ PNG)
- [ ] **Contact form** — currently opens the visitor's email app. To receive submissions directly, use a service like [Formspree](https://formspree.io): set `action="https://formspree.io/f/XXXX"` and `method="POST"` on the form and remove the submit handler in `script.js`

## Editing tips

- **Colors:** change the variables at the top of `styles.css` (`--navy`, `--green`, etc.).
- **Text:** everything is in `index.html`, organized by section (`#about`, `#services`, `#approach`, `#careers`, `#contact`).
