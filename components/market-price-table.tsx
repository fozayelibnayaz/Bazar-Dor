import type { MarketPrice } from "@/types";
import { bnMoney, bnNumber } from "@/lib/bn";

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
              <tr
                key={row.market}
                className="border-b border-line last:border-b-0 even:bg-page"
              >
                <td className="px-5 py-3 font-medium text-ink">{row.market}</td>
                <td className="px-5 py-3 text-muted">{row.division}</td>
                <td className="px-5 py-3 text-down">{bnMoney(row.min)} টাকা</td>
                <td className="px-5 py-3 text-up">{bnMoney(row.max)} টাকা</td>
                <td className="px-5 py-3 text-right font-bold text-ink">{bnMoney(row.average)} টাকা</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-muted">
        {bnNumber(markets.length)}টি বাজারের তথ্য — গড় = (সর্বনিম্ন + সর্বোচ্চ) ÷ ২
      </p>
    </section>
  );
}