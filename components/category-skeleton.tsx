import ProductGridSkeleton from "@/components/product-grid-skeleton";

export default function CategorySkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      <div className="rounded-2xl border border-line bg-white px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 animate-pulse rounded-2xl bg-flat-soft" />
          <div className="space-y-2">
            <div className="h-6 w-32 animate-pulse rounded bg-flat-soft" />
            <div className="h-4 w-56 animate-pulse rounded bg-flat-soft" />
          </div>
        </div>
      </div>
      <div className="mt-4 h-14 animate-pulse rounded-2xl border border-line bg-white" />
      <div className="mt-4">
        <ProductGridSkeleton count={4} />
      </div>
    </div>
  );
}
