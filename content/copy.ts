/**
 * All landing page copy. Edit here for quick copy changes.
 */

export const brand = {
  startupName: "AccessLab",
  agentName: "Atlas",
  fullProductName: "Accessibility Agent",
} as const;

export const hero = {
  headline: "Your Accessibility Agent that finds, fixes, and prevents.",
  subheadline:
    "An agentic, continuous find–fix loop—not a scanner. Improves engagement, SEO, and compliance. Built to work with coding agents and your dev environment.",
  ctaPrimary: "Get early access",
  ctaSecondary: "How it works",
  bullets: [
    "Higher engagement and SEO; meet compliance targets without guesswork.",
    "Integrates with your repo, staging, and CI—machine-readable outputs.",
    "Designed for coding agents: actionable tasks, patches, and guardrails.",
  ],
} as const;

export const problem = {
  title: "Why accessibility is still hard",
  reasons: [
    "Dynamic states—dropdowns, modals, toasts—break under scan-once tools.",
    "Keyboard and focus traps hide in modal flows and custom components.",
    "Regressions creep in with every deploy; no baseline, no guardrails.",
    "Third-party widgets and embeds own their DOM; ownership is unclear.",
    "Unclear ownership—who fixes what when the design system touches 50 pages?",
  ],
  costTitle: "Cost of doing nothing",
  costItems: [
    "Legal and compliance risk—demand letters, settlements, consent decrees.",
    "Lost users—15% of the world has a disability; you're leaving money on the table.",
    "SEO impact—Google favors accessible sites; poor structure hurts rankings.",
  ],
} as const;

export const solution = {
  title: "An agentic system, not a scanner",
  subtitle:
    "Observe → Map → Fix → Verify → Prevent. Our Accessibility Agent runs continuously, learns your app's structure, and drives fixes at the root—like Wiz for Accessibility: full visibility and inventory, then targeted remediation.",
  problemsTitle: "Problems our Accessibility Agent solves",
  problems: [
    {
      id: "01",
      title: "Keyboard & focus traps",
      description:
        "Finds broken tab order, trapped focus in modals, missing focus return, unreachable controls.",
    },
    {
      id: "02",
      title: "Visible focus styling",
      description:
        "Detects missing or low-contrast focus indicators and proposes fixes (CSS/tokens).",
    },
    {
      id: "03",
      title: "Semantic structure",
      description:
        "Flags incorrect roles/landmarks, button/div misuse, missing form labels, incorrect heading hierarchy.",
    },
    {
      id: "04",
      title: "ARIA correctness",
      description:
        "Catches invalid/overused ARIA, missing relationships (aria-controls/expanded), and suggests minimal ARIA.",
    },
    {
      id: "05",
      title: "Dynamic UI states",
      description:
        "Reproduces dropdowns, dialogs, toasts, errors, loading states; verifies accessibility across states.",
    },
    {
      id: "06",
      title: "Screen reader flow",
      description:
        "Checks name/role/value, announcements (aria-live), and reading order issues in real DOM.",
    },
    {
      id: "07",
      title: "DOM order & layout drift",
      description:
        "Detects mismatch between visual order and DOM order (common with grids/flex), impacts SR/keyboard.",
    },
    {
      id: "08",
      title: "Images & non-text content",
      description:
        "Identifies missing/poor alt text, decorative images misuse, icon-only buttons missing accessible name.",
    },
    {
      id: "09",
      title: "Forms & validation",
      description:
        "Ensures errors are announced, fields are labeled, required state conveyed, and focus moves correctly.",
    },
    {
      id: "10",
      title: "Color contrast regressions",
      description:
        "Spots token/theme contrast failures across states (hover/disabled) and design-system variants.",
    },
    {
      id: "11",
      title: "Reusable component root causes",
      description:
        "Clusters issues to design-system components used across the site for high-leverage fixes.",
    },
    {
      id: "12",
      title: "Third-party widget issues",
      description:
        "Detects accessibility failures caused by embedded vendors/scripts and routes ownership cleanly.",
    },
  ],
} as const;

export const howItWorks = {
  title: "How it works",
  steps: [
    {
      id: "a",
      title: "Connect repo + URL",
      description:
        "Connect GitHub or GitLab and provide staging or production URL.",
    },
    {
      id: "b",
      title: "Runtime observation",
      description:
        "Headless browser runs journeys and interactions to capture real behavior.",
    },
    {
      id: "c",
      title: "Build Accessibility Graph",
      description:
        "Pages/journeys → components/templates → issue clusters → owners.",
    },
    {
      id: "d",
      title: "Generate fixes & tickets",
      description:
        "PRs/patches for high-confidence issues; actionable tickets with repro and suspected owners otherwise.",
    },
    {
      id: "e",
      title: "Verify & prevent",
      description:
        "Verify fixes and add CI guardrails to prevent regressions.",
    },
  ],
  codingAgentsCallout: {
    title: "Designed for coding agents",
    description:
      "Outputs machine-readable tasks and patches; fits agentic dev workflows.",
  },
  securityNote: {
    title: "Security & privacy",
    description:
      "Minimal data collection, optional redaction, least-privilege access.",
  },
} as const;

export const waitlist = {
  title: "Get early access",
  subtitle: "Join the waitlist. We'll reach out when Atlas is ready.",
  fields: {
    fullName: "Full name",
    company: "Company",
    email: "Email",
    websiteUrl: "Website URL (optional)",
  },
  submit: "Join waitlist",
  submitting: "Submitting…",
  success: "You're on the list. We'll be in touch.",
  error: "Something went wrong. Please try again.",
  privacy: "No spam. We respect your inbox.",
  contactLabel: "Questions?",
  contactLink: "Contact us",
} as const;

export const nav = {
  howItWorks: "How it works",
  problems: "Problems we solve",
  earlyAccess: "Get early access",
  signIn: "Sign in",
} as const;

/** Key phrase in hero to highlight with gradient */
export const heroGradientPhrase = "finds, fixes, and prevents";

/** Stats for Problem section (4 metrics) */
export const problemStats = [
  { value: "15%", label: "of users have a disability" },
  { value: "~30%", label: "of issues from dynamic UI" },
  { value: "2.2M+", label: "ADA-related demand letters" },
  { value: "Top 3", label: "SEO ranking factor" },
] as const;

export const footer = {
  copyright: "© AccessLab. All rights reserved.",
} as const;

export const seo = {
  title: "AccessLab | Accessibility Agent — Find, Fix, Prevent",
  description:
    "Agentic accessibility: continuous find–fix loop for engagement, SEO, and compliance. Built for coding agents and modern dev workflows.",
  ogImage: "/og-image.png",
} as const;
