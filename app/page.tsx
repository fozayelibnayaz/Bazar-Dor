import { Suspense } from "react";
import { getAllProducts } from "@/lib/api";
import { bnMoney, bnNumber, bnPercent, banglaDate } from "@/lib/bn";
import { unitLabel } from "@/lib/units";

async function ProductPreview() {
  const products = await getAllProducts();

  return (
    <>
      <p className="mt-1 text-muted">{banglaDate()} — আজকের বাজার</p>
      <p className="mt-1 text-muted">
        মোট {bnNumber(products.length)}টি পণ্যের দাম আজ আপডেট হয়েছে।
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="rounded-2xl border border-line bg-white p-4">
            <p className="text-2xl">{product.image}</p>
            <p className="mt-2 font-semibold">{product.nameBn}</p>
            <p className="text-sm text-muted">{unitLabel(product.unit)}</p>
            <p className="mt-2 font-bold">{bnMoney(product.today)} টাকা</p>
            <p className="text-sm">{bnPercent(product.change.pct)}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">বাজার দর</h1>
      <Suspense fallback={<p className="mt-6 text-muted">পণ্যের তথ্য লোড হচ্ছে...</p>}>
        <ProductPreview />
      </Suspense>
    </main>
  );
}