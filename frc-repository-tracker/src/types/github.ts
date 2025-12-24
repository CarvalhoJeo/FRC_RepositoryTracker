export interface RepositoryIdentifier {
  owner: string
  name: string
}

export interface RepositorySummary {
  id: number
  fullName: string
  description: string | null
  stars: number
  forks: number
  issues: number
  watchers: number
  defaultBranch: string
  language: string | null
  topics: string[]
  homepage?: string | null
}

export interface CommitActivity {
  sha: string
  message: string
  url: string
  authorName: string
  authorAvatar?: string
  committedDate: string
}

export interface RepositoryDetails {
  summary: RepositorySummary
  latestActivity: CommitActivity[]
  fetchedAt: string
}
