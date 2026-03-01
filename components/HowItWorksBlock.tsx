"use client";

import { useState } from "react";

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936a2 2 0 0 0 1.437-1.437l1.582-6.135a.5.5 0 0 1 .963 0l1.581 6.135a2 2 0 0 0 1.437 1.437l6.136 1.582a.5.5 0 0 1 0 .963l-6.136 1.582a2 2 0 0 0-1.437 1.437l-1.581 6.135a.5.5 0 0 1-.963 0l-1.582-6.135Z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const STEPS = [
  {
    number: "01",
    title: "Write your code",
    description:
      "Code naturally in your preferred IDE. Atlas watches for accessibility issues in real-time.",
    code: `<button onClick={save}>
  <SaveIcon />
</button>`,
    issue: null,
  },
  {
    number: "02",
    title: "Get instant feedback",
    description:
      "Atlas identifies issues and explains why they matter—no cryptic error codes.",
    code: `<button onClick={save}>
  <SaveIcon />
</button>`,
    issue: {
      type: "warning" as const,
      message: "Icon-only button missing accessible name",
      explanation: "Screen reader users won't know what this button does",
    },
  },
  {
    number: "03",
    title: "Apply the fix",
    description:
      "One-click fixes with production-ready code that follows best practices.",
    code: `<button 
  onClick={save}
  aria-label="Save document"
>
  <SaveIcon aria-hidden="true" />
</button>`,
    issue: {
      type: "success" as const,
      message: "Accessible and WCAG 2.1 AA compliant ✓",
    },
  },
];

export function HowItWorksBlock() {
  const [activeStep, setActiveStep] = useState(0);
  const step = STEPS[activeStep];

  return (
    <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 md:items-start">
      {/* Left: Step navigation */}
      <div className="space-y-4 order-1 md:order-1">
        {STEPS.map((s, index) => {
          const isActive = activeStep === index;
          return (
            <button
              key={s.number}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`w-full rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                isActive
                  ? "border-indigo-200 bg-white shadow-lg shadow-indigo-100/50"
                  : "border-transparent bg-white/50 hover:border-slate-200 hover:bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`text-sm font-bold ${isActive ? "text-indigo-600" : "text-slate-300"}`}
                >
                  {s.number}
                </span>
                <div className="min-w-0 flex-1 shrink">
                  <h3
                    className={`text-lg font-semibold ${
                      isActive ? "text-slate-900" : "text-slate-600"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      isActive ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>
                {isActive && (
                  <span className="flex shrink-0 text-indigo-600">
                    <ArrowRightIcon />
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Right: Code preview + Atlas feedback — sticky */}
      <div className="md:sticky md:top-24 order-2 md:order-2">
        <div className="rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
          {/* Editor header */}
          <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" aria-hidden />
              <div className="h-3 w-3 rounded-full bg-yellow-400" aria-hidden />
              <div className="h-3 w-3 rounded-full bg-green-400" aria-hidden />
            </div>
            <span className="ml-4 text-sm text-slate-400">SaveButton.tsx</span>
          </div>

          {/* Code content */}
          <div className="p-6">
            <pre
              key={`code-${activeStep}`}
              className="animate-fade-in font-mono text-sm text-slate-300 whitespace-pre-wrap"
            >
              {step.code}
            </pre>
          </div>

          {/* Atlas feedback — warning or success */}
          {step.issue && (
            <div
              key={`feedback-${activeStep}`}
              className="animate-fade-in border-t border-slate-700 p-4"
            >
              <div
                className={`flex items-start gap-3 rounded-xl p-4 ${
                  step.issue.type === "warning"
                    ? "bg-amber-500/10"
                    : "bg-emerald-500/10"
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white ${
                    step.issue.type === "warning"
                      ? "bg-amber-500"
                      : "bg-emerald-500"
                  }`}
                >
                  {step.issue.type === "warning" ? (
                    <SparklesIcon />
                  ) : (
                    <CheckIcon />
                  )}
                </div>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      step.issue.type === "warning"
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {step.issue.message}
                  </p>
                  {"explanation" in step.issue && step.issue.explanation && (
                    <p className="mt-1 text-xs text-slate-400">
                      {step.issue.explanation}
                    </p>
                  )}
                  {step.issue.type === "warning" && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-indigo-400">
                      <SparklesIcon /> Apply fix
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
