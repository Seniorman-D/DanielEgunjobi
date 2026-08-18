# DJ Bunduki Migration Guide

## Objective
Move from the current WordPress frontend to the new Next.js platform while preserving content, SEO, and existing audio URLs.

## Current Assets
- WordPress CMS remains active
- Existing audio storage remains:
  https://mix.djbunduki.co.ke/uploads

## Migration Steps
1. Backup WordPress database and files.
2. Test the Next.js platform on staging.
3. Connect WordPress REST API.
4. Verify mixtapes, blogs, events, videos and gallery content.
5. Configure redirects from old URLs.
6. Update DNS after final testing.
7. Monitor traffic and errors after launch.

## SEO Protection
- Preserve existing slugs where possible.
- Create 301 redirects for changed URLs.
- Submit new sitemap to search engines.
