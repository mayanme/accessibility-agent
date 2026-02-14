# File Index

## Config

| File | Description |
|------|-------------|
| `package.json` | Dependencies and scripts |
| `next.config.js` | Next.js config |
| `tsconfig.json` | TypeScript config |
| `tailwind.config.ts` | Tailwind theme (colors, fonts) |
| `postcss.config.js` | PostCSS (Tailwind) |

## Content

| File | Description |
|------|-------------|
| `content/copy.ts` | **All copy** – edit here for text changes |

## Components

| File | Description |
|------|-------------|
| `components/Nav.tsx` | Sticky nav with anchors + CTA |
| `components/Footer.tsx` | Footer with copyright |
| `components/WaitlistForm.tsx` | Waitlist form + validation + API submit |
| `components/ui/Button.tsx` | Primary/secondary/ghost button |
| `components/ui/Container.tsx` | Max-width wrapper |
| `components/ui/Section.tsx` | Section wrapper with padding |
| `components/ui/Card.tsx` | Card with border + shadow |
| `components/ui/Badge.tsx` | Small accent badge |
| `components/ui/Input.tsx` | Form input with label/error |
| `components/ui/NumberedFeatureCard.tsx` | Numbered feature item (01–12) |

## App

| File | Description |
|------|-------------|
| `app/layout.tsx` | Root layout, metadata, JSON-LD |
| `app/page.tsx` | Landing page (all sections) |
| `app/globals.css` | Tailwind base |
| `app/robots.ts` | robots.txt |
| `app/sitemap.ts` | sitemap.xml |
| `app/api/waitlist/route.ts` | POST /api/waitlist |

## Lib

| File | Description |
|------|-------------|
| `lib/supabase.ts` | Server-side Supabase client (service role) |

## Supabase

| File | Description |
|------|-------------|
| `supabase/migrations/20240214000000_create_waitlist_leads.sql` | Table + RLS |

## Env

| File | Description |
|------|-------------|
| `.env.local.example` | Env var template |

---

## Quick edit guide

- **Copy / messaging**: `content/copy.ts`
- **Colors / accent**: `tailwind.config.ts` → `colors.accent`
- **Brand name / agent name**: `content/copy.ts` → `brand`
