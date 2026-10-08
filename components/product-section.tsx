import type { ChangeDir, Product } from "@/types";
import ProductCard from "@/components/product-card";
import { changeArrow } from "@/lib/change";

type Props = {
  title: string;
  dir?: ChangeDir;
  subtitle?: string;
  products: Product[];
  anchor?: string;
};

const titleTones: Record<ChangeDir, string> = {
  up: "text-up",
  down: "text-down",
  flat: "text-flat",
};

export default function ProductSection({ title, dir, subtitle, products, anchor }: Props) {
  return (
    <section id={anchor} className="scroll-mt-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-ink sm:text-xl">
        {dir ? <span className={titleTones[dir]}>{changeArrow(dir)}</span> : null}
        {title}
      </h2>
      {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}