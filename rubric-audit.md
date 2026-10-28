# Paradise Nursery: Rubric Audit

Verification key: **Build** = `npm run build` passed. **Test** = automated Vitest test. **Code** = checked by reading the source. **Browser** = run in a real browser (not performed yet).

The exact 16-point (ProductList.jsx) and 23-point (CartItem.jsx) rubrics were not provided, so those point values are not mapped. Each requirement from the brief is listed below.

| # | Requirement | Implementation | Verification | Status | Notes |
|---|---|---|---|---|---|
| 1 | Tech stack: React, Vite, JSX, Redux Toolkit, React Redux, React Router, CSS | `package.json`, `main.jsx` | Build, Code | PASS | |
| 2 | Three routes `/`, `/plants`, `/cart` | `main.jsx` | Code | PASS | Browser check pending |
| 3 | HashRouter for GitHub Pages | `main.jsx` | Code | PASS | Routes survive refresh by design. Browser check pending |
| 4 | Landing page with background image, company name, intro, "Get Started" to `/plants` | `App.jsx`, `App.css` (`.hero`) | Build, Code | PASS | Background is an SVG illustration, not a photo |
| 5 | Background image in `App.css`, bundled, readable overlay | `App.css` `.hero`, `src/assets/hero.svg` (inlined in CSS) | Build (bundle contains data URI) | PASS | |
| 6 | `AboutUs.jsx` with mission, plants, beginners, greener homes; rendered by `App.jsx` | `AboutUs.jsx`, `App.jsx` | Code | PASS | |
| 7 | At least 9 plants, 3 categories with 3 each | `data/plants.js` (9 plants) | Code | PASS | |
| 8 | Unique ID, name, category, price, thumbnail, alt text, Add to Cart | `data/plants.js`, `ProductList.jsx` | Code | PASS | Thumbnails are SVG illustrations |
| 9 | Products grouped under visible category headings; responsive grid | `ProductList.jsx`, `App.css` `.product-grid` | Code | PASS | |
| 10 | Add to Cart dispatches correct product; header updates | `ProductList.jsx`, `Header.jsx` | Code | PASS | Browser check pending |
| 11 | Button disabled while in cart; re-enabled after full removal; visual disabled state | `ProductList.jsx` (`isInCart`), `.btn-added` | Code | PASS | Browser check pending |
| 12 | No duplicate cart entries | `CartSlice.jsx` `addToCart` | Test | PASS | |
| 13 | Reusable product data | `data/plants.js` | Code | PASS | |
| 14 | Prices in USD, consistent format | `formatPrice` (Intl USD) in `ProductList.jsx` and `CartItem.jsx` | Code | PASS | |
| 15 | Shared header: branding, Home, Plants, cart icon, numeric unit badge; mobile-friendly | `Header.jsx`, `App.css` | Code | PASS | Mobile layout not visually checked |
| 16 | Redux slice via `createSlice`: add, increase, decrease, remove, clear | `CartSlice.jsx` | Test (5 tests pass) | PASS | |
| 17 | Decrease never below 1; documented | `CartSlice.jsx` comment, README | Test | PASS | Design choice: decrement stops at 1; the Remove button deletes |
| 18 | Store with `Provider`, one store across pages | `store.js`, `main.jsx` | Build, Code | PASS | |
| 19 | Cart page: heading, unit count, thumbnail, name, unit price, qty, subtotal, +/-/remove, total, Continue Shopping, Checkout | `CartItem.jsx` | Code | PASS | Browser check pending |
| 20 | Checkout shows "Checkout coming soon!" without processing payment | `CartItem.jsx` | Code | PASS | |
| 21 | Empty-cart message and browse button | `CartItem.jsx` | Code | PASS | |
| 22 | Totals derive from the store; accessible labels on qty and remove buttons | `CartItem.jsx`, `CartSlice.jsx` selectors | Test (selectors), Code | PASS | |
| 23 | README with name, description, features, stack, install, dev, build, deployment URL, repo URL, architecture | `README.md` | Code | PARTIAL | Deployment and repo URLs are pending |
| 24 | Production build passes | `vite build` | Build | PASS | |
| 25 | Lint | `oxlint src` | Lint | PASS | No warnings after fix |
| 26 | Vite `base` matches the repo name for GitHub Pages | `vite.config.js` (`/paradise-nursery/`) | Build (asset paths verified) | PASS | Verified only against local preview |
| 27 | Responsive layout with no horizontal scroll; 16px gutter | `App.css` media queries | Code | BLOCKED | Not checked in a real browser |
| 28 | Browser checks: routes, console errors, interactions | none | Browser | BLOCKED | Not performed. Needs a browser run |
| 29 | Public GitHub repo, pushed to `main` | local commit `27389fa` only | none | BLOCKED | Needs authenticated `gh` as the chosen owner |
| 30 | GitHub Pages deployment verified | none | none | BLOCKED | Depends on item 29 |
| 31 | `submission-links.txt` with verified URLs | `submission-links.txt` (pending) | none | BLOCKED | Needs URLs from items 29–30 |

## Remaining work

1. Run `gh auth login` for the account that should own the repo. Current active login is `sarvadnya2030`.
2. Create `paradise-nursery` as a public repo, push `main`, and deploy with GitHub Pages (Actions or `gh-pages`).
3. Browser-check the three routes, Add to Cart, the badge, quantity changes, removal, empty cart, the checkout message, and console errors.
4. Replace the illustrations with real photos if the rubric asks for photographs. Swap the files in `src/assets/plants/` and `src/assets/hero.svg`.
5. Remove unused scaffold files (`src/assets/hero.png`, `react.svg`, `vite.svg`, `src/index.css`, `public/icons.svg`) after you confirm they aren't needed.
