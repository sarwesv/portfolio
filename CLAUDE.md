# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static personal portfolio site (no build step, no bundler, no package.json) deployed as Firebase Hosting, showing off a set of small GitHub Pages projects. Firebase is used only for auth (Google Sign-In) and Firestore (newsletter subscribers) — everything else is plain HTML/CSS/vanilla JS served directly.

## Commands

There is no build/lint/test tooling in this repo (no `package.json`). Development is edit-and-reload directly on the static files.

- **Local preview**: serve the directory with any static file server, e.g. `python3 -m http.server` or `npx serve`, then open the relevant `.html` file. Opening the HTML files directly via `file://` mostly works but Firebase auth/Firestore calls may behave differently without a real origin.
- **Deploy**: `firebase deploy` (requires Firebase CLI auth against the `sarwesv-portfolio-app` project set in `.firebaserc`). This deploys hosting, Firestore rules, and Firestore indexes as configured in `firebase.json`.
- **Deploy Firestore rules only**: `firebase deploy --only firestore:rules`.

## Architecture

Multi-page static site — five HTML pages (`index.html`, `projects.html`, `skills.html`, `experience.html`, `contact.html`), each independently loading the same script chain in the same order:

```
firebase-app-compat.js → firebase-auth-compat.js → firebase-firestore-compat.js
→ firebase-config.js → data.js → app.js
```

Because every page loads this identical stack, `app.js` init functions guard on `document.getElementById(...)` existence before wiring up behavior — each page only activates the sections relevant to it (e.g. `initProjectsSection` no-ops on pages without a projects grid).

- **`firebase-config.js`**: initializes the Firebase app (compat SDK) and exposes global `auth`, `googleProvider`, `db`. Wrapped in `typeof firebase !== 'undefined'` so pages still work if Firebase scripts fail to load.
- **`data.js`**: single `PORTFOLIO_DATA` global object — the entire content model (profile, project cards, skills, timeline). This is the one place to edit when adding/updating a project or skill entry; `app.js` renders purely from this data, it has no hardcoded content of its own.
- **`app.js`**: one file, all behavior, organized as independent `init*` functions called from a single `DOMContentLoaded` listener:
  - `initThemeToggle` / `updateThemeIcon` — dark/light theme via `data-theme` attribute + `localStorage`.
  - `initMobileMenu` — nav toggle.
  - `initTypewriterEffect` — hero text animation (home page only).
  - `initProfileData`, `initProjectsSection` (+ `renderHomeFeaturedProjects`, `renderCategoryTabs`, `renderProjects`), `initSkillsSection`, `initTimelineSection` — render sections from `PORTFOLIO_DATA`.
  - `initModalEvents` — project detail modal.
  - `initContactForm`, `validateRealEmail` — contact form validation/submission.
  - `initNewsletterSection`, `subscribeToNewsletter`, `updateNewsletterUI` — Firestore-backed newsletter signup (writes to `newsletter_subscribers` collection), supports both plain-email and Google Sign-In subscription flows.
  - `showToast`, `escapeHtml` — shared UI helpers.
- **`styles.css`**: single global stylesheet for all pages (glassmorphic UI, theme variables for dark/light mode).

## Firebase

- Firestore is used for exactly one collection: `newsletter_subscribers`. `firestore.rules` allows anyone to create/update a subscriber doc if `email` matches a basic email regex, but restricts *reads* to two authorized account emails (`mogalt@gmail.com`, `sarvick.vemula@gmail.com`) via Google Sign-In auth.
- Google Sign-In is scoped to `authorizedDomains: ["sarwesv.github.io", "localhost"]` in `firebase.json` — testing auth flows on a different origin (e.g. a different local port setup or preview URL) will fail domain authorization.
- The Firebase web config (`apiKey`, etc.) in `firebase-config.js` is a public client key by design (standard for Firebase web apps) — access control is enforced by `firestore.rules`, not by hiding this file.
