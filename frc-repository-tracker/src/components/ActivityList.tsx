import type { CommitActivity } from '../types/github';

interface ActivityListProps {
  commits: CommitActivity[];
}

export function ActivityList({ commits }: ActivityListProps) {
  if (!commits.length) {
    return (
      <section className="rounded-2xl bg-white p-6 text-slate-500 shadow-md shadow-slate-200">
        <p>GitHub did not return any recent commits.</p>
      </section>
    );
  }

  return (
    <section className="space-y-4 rounded-2xl bg-white p-6 shadow-md shadow-slate-200">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
          Latest activity
        </p>
        <h2 className="text-xl font-semibold text-slate-900">Recent commits</h2>
      </header>
      <ul className="flex flex-col gap-4">
        {commits.map(commit => (
          <li
            key={commit.sha}
            className="grid grid-cols-[auto,1fr,auto] items-center gap-4 rounded-2xl border border-slate-100 p-3"
          >
            <div className="h-10 w-10 overflow-hidden rounded-full bg-indigo-50 text-center text-sm font-semibold text-indigo-700">
              {commit.authorAvatar ? (
                <img
                  src={commit.authorAvatar}
                  alt={commit.authorName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center">
                  {commit.authorName.slice(0, 1).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <p className="font-semibold text-slate-900">{commit.message}</p>
              <p className="text-sm text-slate-500">
                {commit.authorName} • {new Date(commit.committedDate).toLocaleString()}
              </p>
            </div>
            <a
              href={commit.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              View
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
