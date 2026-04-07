# Daniel Egunjobi Personal Brand Website

Static-first Netlify-ready build in `dist/`.

## Build

`npm run build` syncs static folders into the Netlify publish directory (`dist/`):

- `assets/` → `dist/assets/`
- `images/` → `dist/images/`

## Environment variables

- `PAYSTACK_URL`: Optional payment page URL override. The current default in `dist/index.html` is `https://paystack.com/buy/kleptocracy`.

## Deploy

- Netlify publish directory: `dist`
- Netlify Forms enabled via HTML `data-netlify="true"`
- Netlify Function located at `netlify/functions/payment-hook.mjs`
