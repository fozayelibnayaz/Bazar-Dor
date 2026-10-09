import type { MarketPrice } from "@/types";
import { bnMoney } from "@/lib/bn";

export default function MarketPriceTable({ markets }: { markets: MarketPrice[] }) {
  const rows = [...markets]
    .map((market) => ({ ...market, average: (market.min + market.max) / 2 }))
    .sort((a, b) => a.average - b.average);

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold text-ink">বাজারভিত্তিক আজকের দাম</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs text-muted">
              <th className="px-5 py-3 font-medium">বাজার</th>
              <th className="px-5 py-3 font-medium">বিভাগ</th>
              <th className="px-5 py-3 font-medium">সর্বনিম্ন</th>
              <th className="px-5 py-3 font-medium">সর্বোচ্চ</th>
              <th className="px-5 py-3 text-right font-medium">গড়</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.market} className="border-b border-ink last:border-b-0 even:bg-row">
                <td className="px-5 py-3 font-medium text-ink">{row.market}</td>
                <td className="px-5 py-3 text-muted">{row.division}</td>
                <td className="px-5 py-3 text-ink">{bnMoney(row.min)} টাকা</td>
                <td className="px-5 py-3 text-ink">{bnMoney(row.max)} টাকা</td>
                <td className="px-5 py-3 text-right font-bold text-ink">
                  {bnMoney(row.average)} টাকা
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
