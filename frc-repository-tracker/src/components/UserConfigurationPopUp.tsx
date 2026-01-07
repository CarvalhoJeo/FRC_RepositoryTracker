import type { FormEvent } from 'react';
import type { userConfigurationProps } from '../types/userConfig';

export function UserConfigurationPopUp({ closeUserConfigurationPopUp }: userConfigurationProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeUserConfigurationPopUp();
  };
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-6 rounded-3xl bg-white p-8 shadow-2xl shadow-slate-900/20"
      >
        <header className="space-y-2 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
            User configuration
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">Personalize your tracker</h2>
          <p className="text-sm text-slate-500">
            Adjust your FRC team details and GitHub token. These settings power quick access to
            favorite repositories and tailor coloring in the UI.
          </p>
        </header>

        <section className="grid gap-6 rounded-2xl border border-slate-100 p-6">
          <h3 className="text-base font-semibold text-slate-900">Team profile</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1 text-sm font-medium text-slate-700">
              Team number
              <input
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-base text-slate-900 outline-none ring-indigo-200 transition focus:border-indigo-400 focus:ring-2"
                placeholder="e.g. 254"
                type="number"
                min="1"
              />
            </label>
            <label className="space-y-1 text-sm font-medium text-slate-700">
              Team color
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2">
                <input
                  type="color"
                  className="h-10 w-10 cursor-pointer rounded-md border border-slate-300 bg-transparent"
                  defaultValue="#4f46e5"
                />
                <span className="text-sm text-slate-500">Used for accents in the dashboard.</span>
              </div>
            </label>
          </div>
        </section>

        <section className="grid gap-4 rounded-2xl border border-slate-100 p-6">
          <h3 className="text-base font-semibold text-slate-900">GitHub access</h3>
          <label className="space-y-1 text-sm font-medium text-slate-700">
            Personal access token
            <input
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-base text-slate-900 outline-none ring-indigo-200 transition focus:border-indigo-400 focus:ring-2"
              placeholder="ghp_XXXXXXXXXXXXXXXXXXXX"
              type="password"
            />
          </label>
          <p className="text-xs text-slate-500">
            Store a token with `repo` and `read:org` scopes to track private repositories.{' '}
            <a
              href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Learn how to create one.
            </a>
          </p>
        </section>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={closeUserConfigurationPopUp}
            className="w-full rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto"
          >
            Save configuration
          </button>
        </div>
      </form>
    </div>
  );
}
