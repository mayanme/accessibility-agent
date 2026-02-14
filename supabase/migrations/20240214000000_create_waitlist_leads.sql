-- Waitlist leads table for landing page early-access signups

CREATE TABLE IF NOT EXISTS waitlist_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  website_url text,
  source text NOT NULL DEFAULT 'landing',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  user_agent text,
  referrer text
);

-- RLS: deny all public access; inserts only via service role in API route

ALTER TABLE waitlist_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Deny all public access" ON waitlist_leads
  FOR ALL
  TO public
  USING (false)
  WITH CHECK (false);

-- Optional: index for analytics / admin queries

CREATE INDEX IF NOT EXISTS idx_waitlist_leads_created_at ON waitlist_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_leads_email ON waitlist_leads (email);
