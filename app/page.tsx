import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  brand,
  hero,
  heroGradientPhrase,
  problem,
  problemStats,
  solution,
  howItWorks,
  waitlist,
} from "@/content/copy";
import { CodeEditorMockup } from "@/components/CodeEditorMockup";
import { HowItWorksBlock } from "@/components/HowItWorksBlock";

const TEAM_EMAIL = process.env.TEAM_CONTACT_EMAIL || "hello@atlas.dev";

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ProblemIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function SolutionIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function HowItWorksIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

function CodeAgentIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function StepIcon({ id }: { id: string }) {
  const icons: Record<string, React.ReactNode> = {
    a: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    b: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    c: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    d: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    e: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  };
  return <span className="text-accent">{icons[id] || null}</span>;
}

function HeroHeadline() {
  const before = hero.headline.split(heroGradientPhrase)[0];
  const after = hero.headline.split(heroGradientPhrase)[1] || "";
  return (
    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
      {before}
      <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
        {heroGradientPhrase}
      </span>
      {after}
    </h1>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — two-column, gradient phrase, code mockup, floating orbs */}
      <Section id="hero" className="hero-gradient relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
          <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/4 h-64 w-64 rounded-full bg-purple-400/15 blur-3xl animate-float-slow" />
          <div className="absolute right-1/3 bottom-1/4 h-48 w-48 rounded-full bg-teal-400/15 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur border border-slate-200/80 w-fit">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 text-white text-xs font-bold">
                  A
                </span>
                <span className="text-sm font-medium text-slate-700">{brand.agentName}</span>
              </div>
              <HeroHeadline />
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {hero.subheadline}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#waitlist">
                  <Button variant="gradient" size="lg">
                    {hero.ctaPrimary}
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button variant="secondary" size="lg">
                    {hero.ctaSecondary}
                  </Button>
                </a>
              </div>
              <p className="mt-10 text-sm text-slate-500">
                Built for engineering teams · Repo-native · CI-ready
              </p>
            </div>
            <div className="relative animate-fade-in-up lg:animate-fade-in-up stagger-2">
              <CodeEditorMockup />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Problem — section badge, 4-col cards, red hover, stats row */}
      <Section id="problem" className="bg-slate-50">
        <Container>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <ProblemIcon />
            The Problem
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {problem.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problem.reasons.slice(0, 4).map((reason, i) => (
              <div
                key={i}
                className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-red-200 hover:shadow-md hover:shadow-red-500/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-red-500 opacity-80 transition-all group-hover:bg-red-50 group-hover:opacity-100" aria-hidden>
                  <ProblemIcon />
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-amber-200 bg-amber-50/80 p-8">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-amber-900">
              <WarningIcon />
              {problem.costTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {problem.costItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-amber-900/90">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {problemStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-slate-900 sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Dark gradient value section — dark bg so white text is visible */}
      <Section
        id="problems"
        className="relative py-20 sm:py-28 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" aria-hidden />
        <Container className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            <SolutionIcon />
            The Solution
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {solution.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
            {solution.subtitle}
          </p>
          <h3 className="mt-16 text-xl font-semibold text-white">
            {solution.problemsTitle}
          </h3>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.problems.map((item) => (
              <div
                key={item.id}
                className="group rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-all duration-200 hover:border-indigo-400/40 hover:bg-white/15 hover:shadow-lg hover:shadow-indigo-500/10 sm:p-6"
              >
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-sm font-bold text-indigo-200 tabular-nums transition-colors group-hover:bg-indigo-500/40 group-hover:text-white">
                  {item.id}
                </span>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. How it works — AccessPilot-style: steps left, code + feedback right */}
      <Section id="how-it-works" className="bg-slate-50">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              How it works
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              From issue to fix in seconds
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">
              See how Atlas transforms your development workflow with real-time,
              contextual accessibility guidance.
            </p>
          </div>
          <HowItWorksBlock />
          {/* Additional info — distinct from steps: compact callouts with left-border accent */}
          <div className="mt-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-400">
              More to know
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex gap-4 rounded-lg border-l-4 border-indigo-500 bg-slate-100/80 py-4 pl-5 pr-5 sm:flex-1">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-500/15 text-indigo-600" aria-hidden>
                  <CodeAgentIcon />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {howItWorks.codingAgentsCallout.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {howItWorks.codingAgentsCallout.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border-l-4 border-slate-400 bg-slate-100/80 py-4 pl-5 pr-5 sm:flex-1">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-400/20 text-slate-600" aria-hidden>
                  <ShieldIcon />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {howItWorks.securityNote.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {howItWorks.securityNote.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Contact / Waitlist CTA — gradient card, premium feel */}
      <Section id="waitlist" className="bg-slate-50">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-10">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 text-white" aria-hidden>
                  <MailIcon />
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  {waitlist.title}
                </h2>
              </div>
              <p className="text-slate-600">{waitlist.subtitle}</p>
              <div className="mt-10">
                <WaitlistForm />
              </div>
              <p className="mt-6 text-sm text-slate-500">
                {waitlist.privacy}{" "}
                <a
                  href={`mailto:${TEAM_EMAIL}`}
                  className="text-indigo-600 hover:text-indigo-700 font-medium underline underline-offset-2"
                >
                  {waitlist.contactLink}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
