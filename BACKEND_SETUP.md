# Luo Ancestral Covenant — Backend Setup

The repository now contains a production-oriented order backend for Netlify Functions + Supabase + PesaPal + Resend + WhatsApp Cloud API.

## 1. Supabase

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL Editor.
3. Create the administrator in Supabase Auth using email/password.
4. Copy the user's UUID and run:

```sql
update public.profiles set role='admin' where id='YOUR-AUTH-USER-UUID';
```

5. Use a current Supabase publishable key for browser/public operations and a secret key only in server-side environment variables.

## 2. Netlify environment variables

Copy the values from `.env.example` into Netlify Site configuration → Environment variables. Never commit real credentials.

Required:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SECRET_KEY`
- `PUBLIC_SITE_URL`
- `PESAPAL_BASE_URL`
- `PESAPAL_CONSUMER_KEY`
- `PESAPAL_CONSUMER_SECRET`
- `PESAPAL_IPN_ID`
- `PESAPAL_CALLBACK_URL`
- `PESAPAL_CANCELLATION_URL`

Optional integrations:

- `RESEND_API_KEY`
- `EMAIL_FROM`
- `ADMIN_EMAIL`
- `WHATSAPP_GRAPH_VERSION`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `ADMIN_WHATSAPP_NUMBER`

## 3. PesaPal

Use API 3.0. Register the public IPN URL:

`https://YOUR-DOMAIN/.netlify/functions/pesapal-ipn`

Save the returned notification ID as `PESAPAL_IPN_ID`.

Use sandbox first:

`https://cybqa.pesapal.com/pesapalv3`

Switch to live only after end-to-end sandbox testing.

## 4. Product pricing

Products currently support `price = NULL`, which keeps the existing "Price on request" behaviour. Before enabling online payment for a product, set its numeric KES price in `public.products`.

Example:

```sql
update public.products set price = 4500 where slug = 'weight-loss';
```

If an order contains only products with no prices, the system creates an enquiry/quote order and does not start payment.

## 5. Admin dashboard

Open `/admin/` and sign in using the Supabase Auth administrator account. The dashboard reads orders through protected Netlify Functions and allows order-status updates.

## 6. End-to-end test

1. Add a product to cart.
2. Complete checkout.
3. Confirm the order appears in Supabase.
4. If the product has a price, start PesaPal sandbox payment.
5. Confirm callback and IPN update `payment_status`.
6. Confirm customer/admin email and WhatsApp notifications.
7. Update the order from the admin dashboard.

Do not move to live payment until webhook, duplicate-payment, cancellation, and failed-payment paths have been tested.