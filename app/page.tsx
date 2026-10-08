import { Suspense } from "react";
import Hero from "@/components/hero";
import HomeProducts from "@/components/home-products";
import HomeSkeleton from "@/components/home-skeleton";

export default function Home() {
  return (
    <main className="pb-14">
      <Hero />
      <Suspense fallback={<HomeSkeleton />}>
        <HomeProducts />
      </Suspense>
    </main>
  );
}