import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { NumberedFeatureCard } from "@/components/ui/NumberedFeatureCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  brand,
  hero,
  problem,
  solution,
  howItWorks,
  waitlist,
} from "@/content/copy";

const TEAM_EMAIL = process.env.TEAM_CONTACT_EMAIL || "hello@accesslab.dev";

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

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Section id="hero" className="hero-gradient relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
          <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 animate-fade-in">{brand.agentName}</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl leading-relaxed">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#waitlist">
                <Button variant="primary" size="lg">
                  {hero.ctaPrimary}
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="secondary" size="lg">
                  {hero.ctaSecondary}
                </Button>
              </a>
            </div>
            <div className="mt-16 grid gap-4 sm:grid-cols-3 sm:gap-6">
              {hero.bullets.map((bullet, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-border bg-surface/80 p-5 text-left backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 sm:p-6"
                >
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20" aria-hidden>
                    <CheckIcon />
                  </span>
                  <p className="text-sm text-slate-600 sm:text-base leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Problem */}
      <Section id="problem" className="bg-surface-subtle">
        <Container>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600" aria-hidden>
              <ProblemIcon />
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {problem.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problem.reasons.map((reason, i) => (
              <div
                key={i}
                className="group flex gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-slate-300 hover:shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-500 transition-colors group-hover:bg-accent/10 group-hover:text-accent" aria-hidden>
                  {i + 1}
                </span>
                <p className="text-slate-600 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-2xl border-2 border-amber-200 bg-amber-50/80 p-8">
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
        </Container>
      </Section>

      {/* 3. Solution + Problems we solve */}
      <Section id="problems">
        <Container>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent" aria-hidden>
              <SolutionIcon />
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {solution.title}
            </h2>
          </div>
          <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              {solution.subtitle}
            </p>
          </div>
          <h3 className="mt-16 text-2xl font-semibold text-slate-900">
            {solution.problemsTitle}
          </h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solution.problems.map((item) => (
              <NumberedFeatureCard
                key={item.id}
                number={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. How it works */}
      <Section id="how-it-works" className="bg-surface-subtle">
        <Container>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent" aria-hidden>
              <HowItWorksIcon />
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {howItWorks.title}
            </h2>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" aria-hidden />
            <ol className="space-y-8">
              {howItWorks.steps.map((step, idx) => (
                <li key={step.id} className="relative flex gap-8 pl-2">
                  <span className="absolute left-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-surface text-accent shadow-sm" aria-hidden>
                    <span className="text-sm font-bold">{String.fromCharCode(97 + idx)}</span>
                  </span>
                  <div className="min-w-0 flex-1 rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
                    <div className="mb-3 text-accent">
                      <StepIcon id={step.id} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <Card className="border-accent/20 bg-accent/5 transition-all hover:border-accent/30">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent" aria-hidden>
                  <CodeAgentIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {howItWorks.codingAgentsCallout.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {howItWorks.codingAgentsCallout.description}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-200 transition-all hover:border-slate-300">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600" aria-hidden>
                  <ShieldIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {howItWorks.securityNote.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {howItWorks.securityNote.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. Contact / Waitlist CTA */}
      <Section id="waitlist">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-surface p-8 shadow-lg sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent" aria-hidden>
                  <MailIcon />
                </span>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    {waitlist.title}
                  </h2>
                  <p className="mt-1 text-slate-600">{waitlist.subtitle}</p>
                </div>
              </div>
              <div className="mt-10">
                <WaitlistForm />
              </div>
              <p className="mt-6 text-sm text-slate-500">
                {waitlist.privacy}{" "}
                <a
                  href={`mailto:${TEAM_EMAIL}`}
                  className="text-accent hover:text-accent-hover underline underline-offset-2"
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
