# Luo Ancestral Covenant — Backend Setup

The repository contains a production-oriented storefront backend using Netlify Functions + Supabase + PesaPal + Resend + WhatsApp Cloud API.

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

## 4. Product catalogue and pricing

The storefront now loads products from Supabase through `/.netlify/functions/products`.

The initial catalogue contains:

- Body Cleansing
- Digestive Health
- Removal of Majini
- Memory Boost
- Weight Loss
- Business Attraction
- Land Issues
- Court Cases
- Man Power
- Fibroids Support

Each item has a customer-facing description. Products support `price = NULL`, which displays **Price on request** and creates a quotation/enquiry order instead of starting online payment.

## 5. Adding products/services and prices

Open `/admin/` after creating/promoting your administrator account.

The dashboard allows you to:

- Add a new product or service
- Enter its description and category
- Leave the price blank for **Price on request**
- Add or change a KES price later
- Hide/show catalogue items
- Manage order fulfilment status

Once a numeric price is saved, checkout can calculate the order total and start the PesaPal payment flow.

## 6. Admin dashboard

Open `/admin/` and sign in using the Supabase Auth administrator account. The dashboard reads orders through protected Netlify Functions and allows order-status and catalogue management.

## 7. End-to-end test

1. Add a product to cart.
2. Complete checkout with name, phone and delivery location.
3. Confirm the order appears in Supabase.
4. For a priced product, start PesaPal sandbox payment.
5. Confirm callback/IPN updates `payment_status`.
6. Confirm customer/admin email and WhatsApp notifications when credentials are configured.
7. Update the order from the admin dashboard.
8. Add a test product from the admin catalogue section and confirm it appears on the storefront.

Do not move to live payment until webhook, duplicate-payment, cancellation, failed-payment and quotation/enquiry paths have been tested.