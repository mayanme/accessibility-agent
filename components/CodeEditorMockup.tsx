"use client";

export function CodeEditorMockup() {
  return (
    <div className="relative rounded-xl border border-slate-700/50 bg-slate-900 shadow-2xl overflow-hidden">
      {/* macOS dots */}
      <div className="flex gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
        <span className="h-3 w-3 rounded-full bg-red-500/90" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-amber-500/90" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-emerald-500/90" aria-hidden />
      </div>
      <pre className="p-5 text-sm font-mono overflow-x-auto" aria-hidden>
        <code>
          <span className="text-slate-500">// Atlas found 3 issues</span>
          {"\n"}
          <span className="text-purple-400">const</span>{" "}
          <span className="text-slate-200">Modal</span>{" "}
          <span className="text-slate-500">= () =&gt;</span>{" "}
          <span className="text-slate-300">{"{"}</span>
          {"\n"}
          {"  "}
          <span className="text-slate-500">// ✓ Focus trap fixed</span>
          {"\n"}
          {"  "}
          <span className="text-teal-400">return</span>{" "}
          <span className="text-slate-300">&lt;dialog aria-modal</span>
          {"\n"}
          {"         "}
          <span className="text-indigo-300">role=</span>
          <span className="text-amber-200">&quot;dialog&quot;</span>
          <span className="text-slate-300">&gt;</span>
          {"\n"}
          {"    "}
          <span className="text-slate-400">...</span>
          {"\n"}
          <span className="text-slate-300">{"  "}&lt;/dialog&gt;</span>
          {"\n"}
          <span className="text-slate-300">{"};"}</span>
        </code>
      </pre>
      {/* Floating feedback card */}
      <div
        className="absolute right-4 bottom-6 w-56 rounded-lg border border-emerald-500/30 bg-slate-800/95 p-3 shadow-xl backdrop-blur"
        role="presentation"
      >
        <p className="text-xs font-medium text-emerald-400">WCAG 2.1 AA</p>
        <p className="mt-0.5 text-xs text-slate-400">Focus management verified</p>
      </div>
    </div>
  );
}
