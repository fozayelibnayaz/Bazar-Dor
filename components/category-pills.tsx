"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types";

export default function CategoryPills({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
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
            <span className={isActive ? "" : "opacity-60 grayscale"}>{category.icon}</span>
            {category.nameBn}
          </Link>
        );
      })}
    </div>
  );
}