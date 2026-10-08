import Link from "next/link";
import type { Product } from "@/types";
import { bnMoney } from "@/lib/bn";
import { unitLabel } from "@/lib/units";
import ChangeBadge from "@/components/change-badge";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="block rounded-2xl border border-line bg-white p-4 shadow-[0_6px_24px_-18px_rgba(20,22,26,0.35)] transition hover:border-brand/40 hover:shadow-[0_10px_30px_-16px_rgba(20,22,26,0.3)]"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-flat-soft text-3xl">
          {product.image}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-bold leading-snug text-ink">{product.nameBn}</span>
          <span className="block text-sm text-muted">{unitLabel(product.unit)}</span>
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between gap-2">
        <span>
          <span className="block text-xs text-muted">আজকের দাম</span>
          <span className="mt-0.5 flex items-baseline gap-1">
            <span className="text-xl font-bold text-ink">{bnMoney(product.today)}</span>
            <span className="text-sm font-medium text-ink">টাকা</span>
          </span>
        </span>
        <ChangeBadge dir={product.change.dir} pct={product.change.pct} />
      </div>
    </Link>
  );
}