import { SearchBar } from './components/SearchBar';
import { RepoSummary } from './components/RepoSummary';
import { ActivityList } from './components/ActivityList';
import { EmptyState } from './components/EmptyState';
import { ErrorBanner } from './components/ErrorBanner';
import { LoadingIndicator } from './components/LoadingIndicator';
import { useRepositoryTracker } from './hooks/useRepositoryTracker';
import { UserConfigurationPopUp } from './components/UserConfigurationPopUp';

import { usePopupControls } from './hooks/useUserConfigurationPopUpControl';
import type { RepositoryDetails, RepositoryIdentifier } from './types/github';

const EXAMPLE_REPOSITORY_DETAILS: RepositoryDetails = {
  summary: {
    id: 254,
    fullName: 'the-blue-alliance/the-blue-alliance',
    description: 'Unofficial FIRST Robotics Competition data archive and scouting ecosystem.',
    stars: 3515,
    forks: 668,
    issues: 42,
    watchers: 221,
    defaultBranch: 'main',
    language: 'Python',
    topics: ['frc', 'robotics', 'scouting', 'events'],
    homepage: 'https://www.thebluealliance.com/',
  },
  fetchedAt: '2024-01-15T12:00:00.000Z',
  latestActivity: [],
};

function App() {
  const { details, isLoading, error, lastIdentifier, loadRepository } = useRepositoryTracker();
  const handleSearch = (identifier: RepositoryIdentifier) => {
    void loadRepository(identifier);
  };

  const { isUserConfigurationPopUpOpen, closeUserConfigurationPopUp, openUserConfigurationPopUp } =
    usePopupControls();
  const showExampleSummary = !details && !isLoading && !error;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="space-y-6">
        <header className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-slate-900 text-white shadow-lg">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-4">
            <h1 className="flex-1 text-center text-lg font-semibold uppercase tracking-[0.4em] sm:text-left">
              Robot Repository Tracker
            </h1>
            <button
              disabled={isLoading}
              className="ml-auto rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-progress disabled:bg-indigo-300"
              onClick={openUserConfigurationPopUp}
            >
              Configuration
            </button>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl space-y-6 px-6 pb-16 pt-8">
          <SearchBar
            onSearch={handleSearch}
            lastIdentifier={lastIdentifier}
            isLoading={isLoading}
          />
          {error && <ErrorBanner message={error} />}
          {isLoading && <LoadingIndicator />}
          {details && (
            <>
              <RepoSummary details={details} />
              <ActivityList commits={details.latestActivity} />
            </>
          )}
          {showExampleSummary && (
            <>
              <EmptyState />
              <div className="space-y-3 rounded-2xl border border-dashed border-slate-200 bg-white/70 p-4 text-sm text-slate-600 shadow-sm">
                <p>
                  Example summary preview — the card below renders <code>RepoSummary</code> with
                  robotics data so you can see how it looks before searching.
                </p>
                <RepoSummary details={EXAMPLE_REPOSITORY_DETAILS} />
              </div>
            </>
          )}
        </main>
        {isUserConfigurationPopUpOpen && (
          <UserConfigurationPopUp closeUserConfigurationPopUp={closeUserConfigurationPopUp} />
        )}
      </div>
    </div>
  );
}

export default App;
