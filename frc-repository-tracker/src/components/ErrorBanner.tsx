interface ErrorBannerProps {
  message: string
}

export function ErrorBanner({ message }: ErrorBannerProps) {
  return (
    <div
      className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-900 shadow-sm"
      role="alert"
    >
      <p className="font-semibold">{message}</p>
      <p className="text-sm text-rose-700">
        Check the repository owner/name or wait a bit if you hit the GitHub rate limit.
      </p>
    </div>
  )
}
