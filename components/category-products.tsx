"use client";

import { useState } from "react";
import type { Product } from "@/types";
import { bnNumber } from "@/lib/bn";
import ProductCard from "@/components/product-card";

const sortOptions = [
  { value: "default", label: "ডিফল্ট" },
  { value: "asc", label: "দাম: কম থেকে বেশি" },
  { value: "desc", label: "দাম: বেশি থেকে কম" },
];

export default function CategoryProducts({ products }: { products: Product[] }) {
  const [sortBy, setSortBy] = useState("default");

  const sorted = [...products].sort((a, b) => {
    if (sortBy === "asc") return a.today - b.today;
    if (sortBy === "desc") return b.today - a.today;
    return a.id - b.id;
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-end gap-3 rounded-2xl border border-line bg-white px-4 py-3">
        <label htmlFor="sort" className="text-sm text-muted">
          সাজান
        </label>
        <div className="relative">
          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="appearance-none rounded-lg border border-line bg-white py-2 pl-3 pr-9 text-sm font-medium text-ink outline-none focus:border-brand"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          >
            <path d="m6 8 4 4 4-4" />
          </svg>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted">মোট {bnNumber(products.length)}টি পণ্য দেখানো হচ্ছে</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
