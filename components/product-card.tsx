import Link from "next/link";
import type { Product } from "@/types";
import { bnMoney } from "@/lib/bn";
import { unitLabel } from "@/lib/units";
import ChangeBadge from "@/components/change-badge";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="block rounded-2xl border border-line bg-white p-4 transition hover:border-brand/40 hover:shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-flat-soft text-2xl">
          {product.image}
        </span>
        <span>
          <span className="block font-semibold leading-snug text-ink">{product.nameBn}</span>
          <span className="block text-sm text-muted">{unitLabel(product.unit)}</span>
        </span>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2 border-t border-line pt-3">
        <span>
          <span className="block text-xs text-muted">আজকের দাম</span>
          <span className="mt-0.5 block text-lg font-bold text-ink">
            {bnMoney(product.today)} টাকা
          </span>
        </span>
        <ChangeBadge dir={product.change.dir} pct={product.change.pct} />
      </div>
    </Link>
  );
}