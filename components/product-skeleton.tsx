export default function ProductSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      <div className="h-4 w-52 animate-pulse rounded bg-flat-soft" />
      <div className="mt-4 grid items-center gap-6 rounded-2xl border border-line bg-white px-6 py-6 lg:grid-cols-[1fr_auto]">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 shrink-0 animate-pulse rounded-2xl bg-flat-soft" />
          <div className="space-y-2">
            <div className="h-7 w-44 animate-pulse rounded bg-flat-soft" />
            <div className="h-4 w-32 animate-pulse rounded bg-flat-soft" />
            <div className="h-4 w-56 animate-pulse rounded bg-flat-soft" />
          </div>
        </div>
        <div className="h-32 w-full animate-pulse rounded-2xl bg-flat-soft lg:w-48" />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((card) => (
          <div key={card} className="h-28 animate-pulse rounded-2xl border border-line bg-white" />
        ))}
      </div>
      <div className="mt-8 h-72 animate-pulse rounded-2xl border border-line bg-white" />
    </div>
  );
}