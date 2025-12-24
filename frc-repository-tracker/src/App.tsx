import { SearchBar } from './components/SearchBar'
import { RepoSummary } from './components/RepoSummary'
import { ActivityList } from './components/ActivityList'
import { EmptyState } from './components/EmptyState'
import { ErrorBanner } from './components/ErrorBanner'
import { LoadingIndicator } from './components/LoadingIndicator'
import { useRepositoryTracker } from './hooks/useRepositoryTracker'

function App() {
  const { details, isLoading, error, lastIdentifier, loadRepository } =
    useRepositoryTracker()

  return (
    <div className="space-y-6">
      <header className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-slate-900 text-white shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-4">
          <h1 className="flex-1 text-center text-lg font-semibold uppercase tracking-[0.4em] sm:text-left">
            Robot Repository Tracker
          </h1>
          <button
            disabled={isLoading}
            className="ml-auto rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-progress disabled:bg-indigo-300">
            Configuration
          </button>
        </div>
      </header>
      <main className="space-y-2 w-max">
      </main>
    </div>
  )
}

export default App
