export default function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((item, index) => (
        <div key={index} className="rounded-2xl border border-line bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 shrink-0 animate-pulse rounded-xl bg-flat-soft" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-28 animate-pulse rounded bg-flat-soft" />
              <div className="h-3 w-16 animate-pulse rounded bg-flat-soft" />
            </div>
          </div>
          <div className="mt-3 flex items-end justify-between border-t border-line pt-3">
            <div className="space-y-2">
              <div className="h-3 w-20 animate-pulse rounded bg-flat-soft" />
              <div className="h-5 w-24 animate-pulse rounded bg-flat-soft" />
            </div>
            <div className="h-6 w-16 animate-pulse rounded bg-flat-soft" />
          </div>
        </div>
      ))}
    </div>
  );
}