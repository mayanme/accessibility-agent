# Runbook: Supabase + Local Testing

## 1. Create Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Wait for the project to finish provisioning.
3. In **Project Settings → API**, copy:
   - Project URL → `SUPABASE_URL`
   - anon public key → `SUPABASE_ANON_KEY`
   - service_role key → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret)

## 2. Run migration

Option A: Supabase CLI (recommended)

```bash
npx supabase init
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase db push
```

Option B: SQL Editor in Supabase Dashboard

1. Go to **SQL Editor** in your Supabase project.
2. Copy the contents of `supabase/migrations/20240214000000_create_waitlist_leads.sql`.
3. Run the SQL.

## 3. Configure env

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL` (e.g. `http://localhost:3000` for local)
- `TEAM_CONTACT_EMAIL` (for the Contact mailto link)

## 4. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 5. Test waitlist submission

1. Scroll to the "Get early access" section.
2. Fill in Full name, Company, Email (Website URL is optional).
3. Click "Join waitlist".
4. You should see the success message.
5. In Supabase Dashboard → **Table Editor** → `waitlist_leads`, verify the new row.

## 6. Verify RLS

- The `waitlist_leads` table has RLS enabled with a policy that denies all public access.
- Inserts succeed only when using the **service role key** in the server-side API route.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client.

## 7. Deploy to Vercel

1. Connect the repo to Vercel.
2. Add the same env vars in Vercel project settings.
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://accesslab.dev`).
