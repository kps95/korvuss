# Korvus Kennels — React + Supabase starter

Dark, Witcher-inspired SPA for a kennel brand. React (JS) frontend deploys statically (Vercel ready). Supabase provides auth, Postgres, storage, and Edge Functions for Stripe.

## Quick start

```bash
cd web
npm install
npm run dev
```

Frontend env (`web/.env.example`):
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SITE_URL=http://localhost:5173
```

Brand config lives in `src/config/siteConfig.js` (name, colors, logo, socials, contact).

## Supabase setup

1) Create a Supabase project and add anon + service role keys to env files.  
2) Run `supabase/sql/schema.sql` then `supabase/sql/policies.sql` in the SQL editor to create tables + RLS.  
3) Enable Storage buckets as needed for images (puppies, studs, merch).  
4) Roles: `profiles.is_admin` drives admin UI/policies.

## Edge Functions

Functions live under `../supabase/functions/`.

- `create-checkout-session`: builds Stripe Checkout, seeds `orders` with status `pending`.
- `stripe-webhook`: verifies signature, marks orders `paid` on `checkout.session.completed`.
- `admin-commands` (optional): simple admin-only mutations gated by `ADMIN_SHARED_SECRET`.

Deploy with Supabase CLI:
```bash
cd supabase
supabase functions deploy create-checkout-session --env-file .env.example
supabase functions deploy stripe-webhook --env-file .env.example
supabase functions deploy admin-commands --env-file .env.example
```
Set env vars in the Supabase dashboard (Function Settings) for Stripe + service role keys.

## Stripe

- Use test keys while developing (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`).
- Webhook endpoint: `https://<project>.functions.supabase.co/stripe-webhook`.
- Frontend redirects to URLs `/checkout/success` and `/checkout/cancel`.

## Frontend architecture

- React + React Router (JS only).  
- Contexts: `AuthContext` (Supabase Auth), `CartContext` (cart + localStorage).  
- API helpers: `src/services/api.js` wrap Supabase `functions.invoke` + table inserts.  
- Pages: home, merch/cart, studs, puppies (+ detail), contact, apply, gallery, FAQ, account, admin, checkout status.  
- Styling: plain CSS (`App.css`) using CSS variables fed from `siteConfig`. Hero uses `/public/intro.mov` background with dark gradient overlay.

## Deploy

Vercel: connect repo, set env vars, use `npm run build` output in `dist`.  
Supabase: set anon key + URL in Vercel env. Supabase Edge Functions handle secrets (Stripe/service role).

## Notes

- Replace `/public/intro.mov` and `/public/korvus-logo.png` to rebrand.  
- `src/data/sampleData.js` seeds UI until Supabase data is wired.  
- RLS policies already lean on `is_admin`; adjust per project needs.
