import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import type { RepositoryIdentifier } from '../types/github'

interface SearchBarProps {
  onSearch: (identifier: RepositoryIdentifier) => void
  lastIdentifier?: RepositoryIdentifier | null
  isLoading?: boolean
}

export function SearchBar({
  onSearch,
  lastIdentifier,
  isLoading = false,
}: SearchBarProps) {
  const [owner, setOwner] = useState(lastIdentifier?.owner ?? '')
  const [name, setName] = useState(lastIdentifier?.name ?? '')

  useEffect(() => {
    if (lastIdentifier) {
      setOwner(lastIdentifier.owner)
      setName(lastIdentifier.name)
    }
  }, [lastIdentifier])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!owner.trim() || !name.trim()) {
      return
    }

    onSearch({
      owner: owner.trim(),
      name: name.trim(),
    })
  }

  return (
    <form
      className="grid gap-4 rounded-2xl bg-white p-6 shadow-md shadow-slate-200 md:grid-cols-[repeat(2,minmax(0,1fr))_auto]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-slate-600" htmlFor="owner">
          Owner
        </label>
        <input
          id="owner"
          name="owner"
          value={owner}
          onChange={(event) => setOwner(event.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-base text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-slate-600" htmlFor="repository">
          Repository
        </label>
        <input
          id="repository"
          name="repository"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-base text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-progress disabled:bg-indigo-300"
      >
        {isLoading ? 'Searching…' : 'Track repo'}
      </button>
    </form>
  )
}
