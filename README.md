# Daniel Egunjobi Personal Brand Website

Static-first Netlify-ready build in `dist/`.

## Build
`npm run build` syncs static folders into the Netlify publish directory (`dist/`):
- `assets/` → `dist/assets/`
- `images/` → `dist/images/`

## Environment variables
- `PAYSTACK_URL`: Set payment page URL. Replace `__PAYSTACK_URL__` in `dist/index.html` during CI/build if desired.

## Deploy
- Netlify publish directory: `dist`
- Netlify Forms enabled via HTML `data-netlify="true"`
- Netlify Function located at `netlify/functions/payment-hook.mjs`
