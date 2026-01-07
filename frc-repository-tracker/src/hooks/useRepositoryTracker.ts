import { useCallback, useEffect, useState } from 'react';
import type { RepositoryDetails, RepositoryIdentifier } from '../types/github';
import { fetchRepositoryDetails } from '../services/githubApi';

interface UseRepositoryTrackerResult {
  details: RepositoryDetails | null;
  isLoading: boolean;
  error: string | null;
  lastIdentifier: RepositoryIdentifier | null;
  loadRepository: (identifier: RepositoryIdentifier) => Promise<void>;
}

export function useRepositoryTracker(
  initialIdentifier?: RepositoryIdentifier
): UseRepositoryTrackerResult {
  const [details, setDetails] = useState<RepositoryDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastIdentifier, setLastIdentifier] = useState<RepositoryIdentifier | null>(
    initialIdentifier ?? null
  );

  const loadRepository = useCallback(async (identifier: RepositoryIdentifier) => {
    setIsLoading(true);
    setError(null);
    setLastIdentifier(identifier);

    try {
      const result = await fetchRepositoryDetails(identifier);
      setDetails(result);
    } catch (err) {
      setDetails(null);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialIdentifier) {
      loadRepository(initialIdentifier);
    }
  }, [initialIdentifier, loadRepository]);

  return { details, isLoading, error, lastIdentifier, loadRepository };
}
