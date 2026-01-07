export function EmptyState() {
  return (
    <section className="space-y-3 rounded-2xl bg-white p-6 text-slate-600 shadow-md shadow-slate-200">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
        Repository tracker
      </p>
      <h2 className="text-2xl font-semibold text-slate-900">Track any public GitHub repository</h2>
      <p>
        Enter the <strong>owner</strong> and <strong>repository name</strong> to fetch summary
        information plus the five most recent commits.
      </p>
      <ul className="list-disc space-y-1 pl-5 text-sm">
        <li>Monitor FRC team codebases or personal robotics projects.</li>
        <li>Follow open-source dependencies for release activity.</li>
        <li>Experiment with GitHub&apos;s REST API from a friendly UI.</li>
      </ul>
    </section>
  );
}
