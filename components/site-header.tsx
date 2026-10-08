import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { getCategories } from "@/lib/api";
import { banglaDate } from "@/lib/bn";
import CategoryPills from "@/components/category-pills";
import UserMenu from "@/components/user-menu";

async function TodayDate() {
  await connection();

  return <span className="block text-xs text-muted">{banglaDate()}</span>;
}

async function CategoryRow() {
  const categories = await getCategories();

  return <CategoryPills categories={categories} />;
}

function CategoryRowSkeleton() {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: 8 }).map((item, index) => (
        <div
          key={index}
          className="h-8 w-20 shrink-0 animate-pulse rounded-full bg-flat-soft"
        />
      ))}
    </div>
  );
}

export default function SiteHeader() {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand">
              <Image src="/logo-icon.png" alt="বাজার দর লোগো" width={22} height={22} />
            </span>
            <span>
              <span className="block text-xl font-bold leading-tight text-ink">বাজার দর</span>
              <Suspense
                fallback={<span className="mt-0.5 block h-4 w-40 animate-pulse rounded bg-flat-soft" />}
              >
                <TodayDate />
              </Suspense>
            </span>
          </Link>

          <UserMenu />
        </div>

        <div className="mt-3">
          <Suspense fallback={<CategoryRowSkeleton />}>
            <CategoryRow />
          </Suspense>
        </div>
      </div>
    </header>
  );
}