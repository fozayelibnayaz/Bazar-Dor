import type { Product } from "@/types";
import { bnMoney } from "@/lib/bn";
import { unitLabel } from "@/lib/units";

export default function ProductPriceSummary({ product }: { product: Product }) {
  const min = Math.min(...product.markets.map((market) => market.min));
  const max = Math.max(...product.markets.map((market) => market.max));
  const average = (min + max) / 2;

  const cards = [
    { label: "সর্বনিম্ন দাম", value: min, note: "সবচেয়ে কম দামের বাজার", tone: "text-down" },
    { label: "সর্বোচ্চ দাম", value: max, note: "সবচেয়ে বেশি দামের বাজার", tone: "text-up" },
    { label: "গড় দাম", value: average, note: `${unitLabel(product.unit)}-এর হিসাব`, tone: "text-down" },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold text-ink">দামের সারসংক্ষেপ</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-line bg-white p-5">
            <p className="text-sm text-muted">{card.label}</p>
            <p className={`mt-1 text-2xl font-bold ${card.tone}`}>{bnMoney(card.value)} টাকা</p>
            <p className="mt-1 text-xs text-muted">{card.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}