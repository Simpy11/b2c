# 7FEELINGS Ahmedabad — storefront demo

A frontend-only React storefront built with Vite. Product photos are imported from the existing `images` folder. Cart, wishlist and demo account state are saved in this browser's local storage. Checkout creates a demo order only; no payment is processed and no server is used.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```sh
npm run build
npm run preview
```

## Demo routes

- `/` — campaign homepage
- `/shop` — catalog, search, filters and sorting
- `/product/:id` — product gallery and size selection
- `/cart`, `/checkout`, `/order-confirmation` — local demo purchase flow
- `/wishlist` — saved products
- `/login`, `/signup`, `/forgot-password`, `/account` — local demo account UI

Prices, product descriptions and categories in `src/data.js` are editable sample data. The image order is mapped from the filenames in `images`.
