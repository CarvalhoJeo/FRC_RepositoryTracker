import type {
  CommitActivity,
  RepositoryDetails,
  RepositoryIdentifier,
  RepositorySummary,
} from '../types/github'

const API_BASE = 'https://api.github.com'

const defaultHeaders: HeadersInit = {
  Accept: 'application/vnd.github+json',
}

interface GitHubRepoResponse {
  id: number
  full_name: string
  description: string | null
  stargazers_count: number
  forks_count: number
  open_issues: number
  watchers_count: number
  default_branch: string
  language: string | null
  topics?: string[]
  homepage?: string | null
  html_url: string
}

interface GitHubCommitResponse {
  sha: string
  html_url: string
  commit: {
    message: string
    author: {
      name: string
      date: string
    }
  }
  author: {
    avatar_url?: string
  } | null
}

function buildRepoPath(identifier: RepositoryIdentifier, path = ''): string {
  const trimmedPath = path ? `/${path.replace(/^\//, '')}` : ''
  return `${API_BASE}/repos/${identifier.owner}/${identifier.name}${trimmedPath}`
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: defaultHeaders,
  })

  if (!response.ok) {
    const errorMessage =
      response.status === 404
        ? 'Repository not found. Double-check the owner/name combination.'
        : `GitHub API error (${response.status})`
    throw new Error(errorMessage)
  }

  return response.json() as Promise<T>
}

function mapRepoSummary(payload: GitHubRepoResponse): RepositorySummary {
  return {
    id: payload.id,
    fullName: payload.full_name,
    description: payload.description,
    stars: payload.stargazers_count,
    forks: payload.forks_count,
    issues: payload.open_issues,
    watchers: payload.watchers_count,
    defaultBranch: payload.default_branch,
    language: payload.language,
    topics: payload.topics ?? [],
    homepage: payload.homepage,
  }
}

function mapCommitActivity(payload: GitHubCommitResponse): CommitActivity {
  return {
    sha: payload.sha,
    message: payload.commit.message.split('\n')[0],
    url: payload.html_url,
    authorName: payload.commit.author.name,
    authorAvatar: payload.author?.avatar_url,
    committedDate: payload.commit.author.date,
  }
}

export async function fetchRepositoryDetails(
  identifier: RepositoryIdentifier,
): Promise<RepositoryDetails> {
  const [repo, commits] = await Promise.all([
    fetchJson<GitHubRepoResponse>(buildRepoPath(identifier)),
    fetchJson<GitHubCommitResponse[]>(
      `${buildRepoPath(identifier, 'commits')}?per_page=5`,
    ),
  ])

  return {
    summary: mapRepoSummary(repo),
    latestActivity: commits.map(mapCommitActivity),
    fetchedAt: new Date().toISOString(),
  }
}
