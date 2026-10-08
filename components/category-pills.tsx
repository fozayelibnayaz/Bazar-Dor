"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types";

export default function CategoryPills({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {categories.map((category) => {
        const isActive = pathname === `/category/${category.slug}`;

        return (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={
              isActive
                ? "flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-sm font-semibold text-white"
                : "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-muted transition hover:bg-brand-soft hover:text-ink"
            }
          >
            <span className="text-base">{category.icon}</span>
            {category.nameBn}
          </Link>
        );
      })}
    </div>
  );
}