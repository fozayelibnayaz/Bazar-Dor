import { getAllProducts } from "@/lib/api";
import { bnNumber } from "@/lib/bn";
import ProductSection from "@/components/product-section";

export default async function HomeProducts() {
  const products = await getAllProducts();

  const risers = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pt-12">
      <ProductSection title="আজ দাম বেড়েছে" dir="up" products={risers} />
      <ProductSection title="আজ দাম কমেছে" dir="down" products={fallers} />
      <ProductSection
        title="সব পণ্য"
        subtitle={`মোট ${bnNumber(products.length)}টি পণ্য দেখানো হচ্ছে`}
        products={products}
        anchor="সব-পণ্য"
      />
    </div>
  );
}