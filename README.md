# Sleek Developer Portfolio

Personal portfolio for Fasasi Pamilerin — frontend developer & startup founder.  
This repo contains a static HTML/CSS/JS portfolio deployed to Vercel.

---

## Features

- Responsive layout with mobile hamburger menu (visible at ≤768px).
- Animated skill progress bars (fixed to update all bars via `data-width`).
- Clean, semantic HTML and accessibility-minded links.
- Security headers applied via `vercel.json`:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - Cache-Control (long-lived for static assets)
- Optional Vercel Speed Insights script.
- Minified production assets supported (`style.min.css`, `script.min.js`).

---

## Tech stack

- HTML5, CSS3, Vanilla JavaScript
- AOS for scroll animations
- Font Awesome for icons
- Vercel for hosting

---

## Project structure

```
/index.html
/style.css           # source
/style.min.css       # production (minified)
script.js            # source
script.min.js        # production (minified)
/vercel.json         # rewrites & security headers
/robots.txt
/img/                # assets
README.md
LICENSE
```

## Speed Insights (optional)

1. Enable Speed Insights in the Vercel project dashboard.
2. Add before `</body>` in `index.html`:

```html
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
```

## SEO & Robots

- Canonical (in `<head>`): update to your live domain

```html
<link rel="canonical" href="https://fasasi-portfolio.vercel.app/" />
```

- Meta description: keep 100–320 characters.
- robots.txt: include sitemap URL

```
User-agent: *
Allow: /

Sitemap: https://fasasi-portfolio.vercel.app/sitemap.xml
```

---

## UI / Code fixes included

- Mobile hamburger menu toggles `.nav-list.active` and closes when:
  - a nav link is clicked
  - clicking outside the menu
- Skill progress bars fixed to read `data-width` for every `.skill-progress`
- Typewriter bug fixed (use `this.isDeleting`)

---

## Contact

- Email: <gcah4451@gmail.com>
- GitHub: <https://github.com/rtobdowu-570>
- LinkedIn: <https://www.linkedin.com/in/fasasi-pamilerin-7a4079346/>

---
