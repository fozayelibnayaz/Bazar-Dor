import ProductGridSkeleton from "@/components/product-grid-skeleton";

export default function HomeSkeleton() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pt-12">
      {[0, 1].map((section) => (
        <div key={section}>
          <div className="h-6 w-40 animate-pulse rounded bg-flat-soft" />
          <div className="mt-4">
            <ProductGridSkeleton />
          </div>
        </div>
      ))}
      <div>
        <div className="h-6 w-24 animate-pulse rounded bg-flat-soft" />
        <div className="mt-2 h-4 w-52 animate-pulse rounded bg-flat-soft" />
        <div className="mt-4">
          <ProductGridSkeleton count={9} />
        </div>
      </div>
    </div>
  );
}