export function NumberedFeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 sm:p-6">
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-lg font-bold text-accent tabular-nums transition-colors group-hover:bg-accent group-hover:text-white"
        aria-hidden
      >
        {number}
      </span>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
