export function LoadingIndicator() {
  return (
    <div
      className="flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-700 shadow-md shadow-slate-200"
      role="status"
    >
      <span
        className="h-5 w-5 rounded-full border-2 border-indigo-200 border-t-indigo-600 animate-spin"
        aria-hidden="true"
      />
      <p>Fetching repository details…</p>
    </div>
  );
}
