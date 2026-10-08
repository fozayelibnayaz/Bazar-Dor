import { Suspense } from "react";
import type { Product } from "@/types";
import { getAllProducts } from "@/lib/api";
import { bnMoney, bnPercent } from "@/lib/bn";
import { unitShort } from "@/lib/units";
import { changeArrow, changeTone } from "@/lib/change";

function TickerRow({ products }: { products: Product[] }) {
  return (
    <div className="flex gap-8 pr-8">
      {products.map((product) => (
        <span key={product.id} className="flex items-center gap-1.5 whitespace-nowrap text-sm">
          <span className="text-base">{product.image}</span>
          <span className="font-medium text-ink">{product.nameBn}</span>
          <span className="text-muted">
            {bnMoney(product.today)} টাকা/{unitShort(product.unit)}
          </span>
          <span className={changeTone(product.change.dir)}>
            {changeArrow(product.change.dir)} {bnPercent(product.change.pct)}
          </span>
        </span>
      ))}
    </div>
  );
}

async function TickerItems() {
  const products = await getAllProducts();

  return (
    <div className="flex w-max animate-marquee py-2.5">
      <TickerRow products={products} />
      <TickerRow products={products} />
    </div>
  );
}

function TickerSkeleton() {
  return (
    <div className="flex items-center gap-8 py-2.5">
      {Array.from({ length: 6 }).map((item, index) => (
        <div key={index} className="h-4 w-44 shrink-0 animate-pulse rounded bg-flat-soft" />
      ))}
    </div>
  );
}

export default function PriceTicker() {
  return (
    <div className="overflow-hidden border-b border-line bg-white">
      <Suspense fallback={<TickerSkeleton />}>
        <TickerItems />
      </Suspense>
    </div>
  );
}