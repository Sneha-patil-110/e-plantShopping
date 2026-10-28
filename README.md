# e-plantShopping

Plant shop built as the Paradise Nursery storefront.

A React shopping experience for indoor houseplants. Visitors read about the nursery on the landing page, browse plants grouped by category, and manage a shopping cart that stays in sync across every page.

## Features

- **Landing page** with a full-width hero background (bundled in `App.css`), a company introduction, and a "Get Started" button that opens the catalog.
- **Plant catalog** with eighteen plants in three categories (six each) (Low-Light, Succulents and Cacti, Air-Purifying). Each card has an image, name, description, USD price, and an "Add to Cart" button.
- **Smart add buttons**: a plant's button is disabled with an "In Cart" label while it is in the cart, and re-enables once the plant is removed entirely.
- **Live cart badge** in the header that counts total units, not distinct products.
- **Shopping cart page** with quantity controls, per-item subtotals, a cart total, remove buttons, an empty-cart state, and a "Continue Shopping" link.
- **Checkout placeholder**: shows "Checkout Coming Soon!" and processes no payment.
- Responsive layout for mobile and desktop, visible focus states, and accessible labels on controls.

## Technology stack

- React 19 with JavaScript and JSX
- Vite 8 build tool
- Redux Toolkit (`createSlice`, `configureStore`) and React Redux (`Provider`, hooks)
- React Router 7 with `HashRouter`, so routes work on GitHub Pages
- Plain CSS with custom properties
- Vitest for reducer tests
- GitHub Pages for hosting

## Getting started

Requirements: Node.js 20 or newer and npm.

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/paradise-nursery/`).

### Tests and linting

```bash
npm test      # Vitest reducer tests
npm run lint  # oxlint
```

### Production build

```bash
npm run build     # output in dist/
npm run preview   # serve dist/ locally
```

## Deployment

The site deploys to GitHub Pages at `https://<owner>.github.io/paradise-nursery/`. `vite.config.js` sets `base: '/paradise-nursery/'` to match the repository name. Deployment URL: _pending verification_.

## Repository

Public repository: _pending creation_.

## Architecture

```
src/
├── main.jsx          Entry point: Provider (Redux), HashRouter, route table, global CSS
├── store.js          configureStore with the cart reducer
├── CartSlice.jsx     Cart slice: actions, reducer, and selectors (count, total, is-in-cart)
├── CartSlice.test.js Reducer and selector tests
├── Header.jsx        Shared header: brand, Home/Plants links, cart icon with unit badge
├── App.jsx           Landing page (route "/") with the Get Started button
├── AboutUs.jsx       Company introduction rendered on the landing page
├── ProductList.jsx   Catalog (route "/plants") grouped by category
├── CartItem.jsx      Shopping cart page (route "/cart")
├── data/plants.js    Product and category data (single source of truth)
├── App.css           All styles, including the hero background
└── assets/           Hero background and plant illustrations (SVG)
```

**Data flow.** Product data lives in `data/plants.js`. `ProductList` dispatches `addToCart` with a product. The cart slice keeps `{ items: [{ id, name, price, image, alt, quantity }] }`. Components read from the store through selectors: the header badge uses `selectCartCount`, the cart page uses `selectCartTotal`, and the catalog uses `selectIsInCart`. No cart data is kept in component state.

**Cart rules.** Adding a product creates a line with quantity 1. A product already in the cart is not added again. Increase and decrease change quantity by one. Decrease stops at 1. Removing a product deletes its entire line.

## Notes

The plant images are illustrations created for this project. They can be replaced with photographs by swapping the files in `src/assets/plants/` without changing any code.
