# DJ Bunduki Production Deployment Guide

## Frontend

Deploy Next.js application on Vercel.

Required environment variables:

- NEXT_PUBLIC_SITE_URL
- WORDPRESS_API_URL
- AUDIO_BASE_URL
- DATABASE_URL
- WHATSAPP_NUMBER

## Production Checklist

- Run production build
- Test mobile responsiveness
- Test audio streaming
- Test downloads
- Test booking conversion
- Verify SEO metadata
- Verify analytics

## Domain Migration

Recommended approach:

1. Keep WordPress hosting active.
2. Deploy new Next.js frontend.
3. Test using staging domain.
4. Update DNS when approved.
5. Maintain redirects for old URLs.

## Audio Migration

No migration required.

Existing audio remains hosted at:

https://mix.djbunduki.co.ke/uploads
