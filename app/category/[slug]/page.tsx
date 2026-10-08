import { Suspense } from "react";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/api";
import CategoryProducts from "@/components/category-products";
import CategoryEmpty from "@/components/category-empty";
import CategorySkeleton from "@/components/category-skeleton";

type Props = { params: Promise<{ slug: string }> };

async function CategoryContent({ params }: Props) {
  const { slug } = await params;

  const [category, products] = await Promise.all([
    getCategoryBySlug(slug),
    getProductsByCategory(slug),
  ]);

  if (!category || products.length === 0) {
    return <CategoryEmpty slug={slug} />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      <div className="rounded-2xl border border-line bg-white px-6 py-6">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-flat-soft text-3xl">
            {category.icon}
          </span>
          <span>
            <h1 className="text-xl font-bold text-ink sm:text-2xl">{category.nameBn}</h1>
            <p className="mt-0.5 text-sm text-muted">প্রতি পণ্যের আজকের দাম ও পরিবর্তন</p>
          </span>
        </div>
      </div>

      <div className="mt-4">
        <CategoryProducts products={products} />
      </div>
    </div>
  );
}

export default function CategoryPage({ params }: Props) {
  return (
    <main className="pb-14">
      <Suspense fallback={<CategorySkeleton />}>
        <CategoryContent params={params} />
      </Suspense>
    </main>
  );
}
