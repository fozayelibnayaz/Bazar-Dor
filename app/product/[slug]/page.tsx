import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import { bnMoney } from "@/lib/bn";
import { unitLabel, unitShort } from "@/lib/units";
import ChangeBadge from "@/components/change-badge";
import ProductPriceSummary from "@/components/product-price-summary";
import MarketPriceTable from "@/components/market-price-table";

export const instant = false;

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const difference = Math.abs(product.today - product.yesterday);
  const changeText =
    product.change.dir === "up"
      ? "গতকালের তুলনায় আজ দাম বেড়েছে"
      : product.change.dir === "down"
        ? "গতকালের তুলনায় আজ দাম কমেছে"
        : "গতকালের তুলনায় আজ দাম অপরিবর্তিত";

  return (
    <main className="pb-14">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <Link href="/" className="transition hover:text-ink">
            হোম
          </Link>
          <span>›</span>
          <Link href={`/category/${product.category}`} className="transition hover:text-ink">
            {product.categoryNameBn}
          </Link>
          <span>›</span>
          <span className="font-medium text-ink">{product.nameBn}</span>
        </nav>

        <div className="mt-4 grid items-center gap-6 rounded-2xl border border-line bg-white px-6 py-6 lg:grid-cols-[1fr_auto]">
          <div className="flex items-start gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-flat-soft text-3xl">
              {product.image}
            </span>
            <div>
              <h1 className="text-2xl font-bold text-ink sm:text-3xl">{product.nameBn}</h1>
              <p className="mt-1 text-sm text-muted">
                {unitLabel(product.unit)} · {product.categoryNameBn}
              </p>
              <p className="mt-2 text-sm text-muted">
                {changeText}
                {product.change.dir !== "flat" ? (
                  <>
                    {" · "}
                    <span className={product.change.dir === "up" ? "text-up" : "text-down"}>
                      {bnMoney(difference)} টাকা
                    </span>
                  </>
                ) : null}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-line px-6 py-4 text-center lg:min-w-44">
            <p className="text-xs text-muted">আজকের দাম</p>
            <p className="mt-1 text-3xl font-bold text-ink">{bnMoney(product.today)}</p>
            <p className="text-sm text-muted">টাকা / {unitShort(product.unit)}</p>
            <div className="mt-2.5">
              <ChangeBadge dir={product.change.dir} pct={product.change.pct} />
            </div>
          </div>
        </div>

        <ProductPriceSummary product={product} />

        <MarketPriceTable markets={product.markets} />
      </div>
    </main>
  );
}