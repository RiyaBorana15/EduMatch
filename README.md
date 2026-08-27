# EduMatch

A cross-platform course search dashboard. Search once, and EduMatch matches
your query against courses on **Coursera, YouTube, LinkedIn Learning,
Udemy, edX, and freeCodeCamp** — free and paid, side by side.

**Live demo:** _add your GitHub Pages link here after deploying (see below)_

## What this is (and isn't)

This is a fully working **front-end prototype**. Login, search, filtering,
and sorting all work for real — but the course catalog is a curated mock
dataset (`js/data.js`), not a live pull from each platform's servers.

Why: Coursera and LinkedIn Learning don't offer public search APIs for
their catalogs, so a true live cross-platform search isn't something a
standalone front-end project can do without a partnership agreement.
YouTube is the one exception — see below for how to wire that up for real.

## Features

- **Login / sign-up flow** — client-side demo auth using `localStorage`
  (any valid email + 4+ character password works; nothing is sent
  anywhere)
- **Search dashboard** — keyword search across course titles, topics, and
  platforms
- **Filters** — by price (free/paid), platform, and level
- **Sorting** — by relevance, rating, price, or duration
- **"Match beam" animation** — visually highlights which platforms had
  results for your search
- Fully responsive, keyboard-accessible, respects reduced-motion settings
- Zero build step — plain HTML, CSS, and JavaScript

## Running it locally

```bash
git clone <your-repo-url>
cd edumatch
open index.html      # macOS — or just double-click it
```

## Project structure

```
edumatch/
├── index.html        # login / sign-up page
├── dashboard.html     # search dashboard
├── css/
│   └── style.css
├── js/
│   ├── data.js         # mock course catalog
│   └── dashboard.js     # search, filter, sort, and auth-guard logic
├── LICENSE
└── README.md
```

## Deploying to GitHub Pages (free live URL)

1. Push this project to a GitHub repository.
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)` → **Save**.
5. Your site goes live at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.
6. Paste that URL into your repo's **About → Website** field.

## Turning this into a real product

If you want to take this further:

- **YouTube search** — the [YouTube Data API v3](https://developers.google.com/youtube/v3)
  is free (with quota limits) and lets you search videos/playlists by
  keyword client-side with an API key. This is the most realistic first
  platform to make genuinely live.
- **Coursera / edX / Udemy** — these don't have open public search APIs;
  Udemy has an *Affiliate API* for approved partners, and Coursera/edX
  data would realistically need to be manually curated or licensed.
- **A real backend** — to keep real user accounts (instead of
  `localStorage`), you'd add a server with a database (e.g. Node.js +
  PostgreSQL, or Firebase Auth) and move the course data into a proper
  database you can query and update.

## License

MIT — see [LICENSE](LICENSE).
