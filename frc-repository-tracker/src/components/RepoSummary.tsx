import type { RepositoryDetails } from '../types/github'

interface RepoSummaryProps {
  details: RepositoryDetails
}

const formatNumber = (value: number) =>
  new Intl.NumberFormat().format(value ?? 0)

export function RepoSummary({ details }: RepoSummaryProps) {
  const { summary, fetchedAt } = details

  return (
    <section className="space-y-6 rounded-2xl bg-white p-6 shadow-md shadow-slate-200">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
            Last synced {new Date(fetchedAt).toLocaleString()}
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">{summary.fullName}</h2>
        </div>
        {summary.language && (
          <span className="rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">
            {summary.language}
          </span>
        )}
      </header>
      {summary.description && (
        <p className="text-base text-slate-600">{summary.description}</p>
      )}
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-100 p-4">
          <dt className="text-sm text-slate-500">Stars</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {formatNumber(summary.stars)}
          </dd>
        </div>
        <div className="rounded-xl border border-slate-100 p-4">
          <dt className="text-sm text-slate-500">Forks</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {formatNumber(summary.forks)}
          </dd>
        </div>
        <div className="rounded-xl border border-slate-100 p-4">
          <dt className="text-sm text-slate-500">Open issues</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {formatNumber(summary.issues)}
          </dd>
        </div>
        <div className="rounded-xl border border-slate-100 p-4">
          <dt className="text-sm text-slate-500">Watchers</dt>
          <dd className="text-2xl font-semibold text-slate-900">
            {formatNumber(summary.watchers)}
          </dd>
        </div>
      </dl>
      <div className="flex flex-wrap gap-2">
        {summary.topics.length ? (
          summary.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {topic}
            </span>
          ))
        ) : (
          <p className="text-sm text-slate-500">Topics not provided for this repository.</p>
        )}
      </div>
    </section>
  )
}
