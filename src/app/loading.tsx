export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-3 p-8"
    >
      <div
        aria-hidden="true"
        className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900"
      />
      <p className="text-sm text-zinc-600">Loading...</p>
    </div>
  );
}
