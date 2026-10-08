import Image from "next/image";
import { Suspense } from "react";
import { connection } from "next/server";
import { banglaDate } from "@/lib/bn";

async function TodayPill() {
  await connection();

  return (
    <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
      {banglaDate()}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <div className="grid items-center gap-8 rounded-2xl border border-line bg-white px-6 py-10 shadow-[0_18px_50px_-28px_rgba(20,22,26,0.35)] sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Suspense
            fallback={<span className="inline-block h-6 w-44 animate-pulse rounded-full bg-flat-soft" />}
          >
            <TodayPill />
          </Suspense>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[42px]">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়,
            সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a
            href="#সব-পণ্য"
            className="mt-6 inline-block rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-10px_rgba(22,163,74,0.7)] transition hover:bg-brand-dark"
          >
            সব পণ্য দেখুন
          </a>
        </div>
        <Image
          src="/bazar-hero.png"
          alt="বাজারের টাটকা পণ্যের ঝুড়ি"
          width={315}
          height={263}
          priority
          className="mx-auto w-56 sm:w-72"
        />
      </div>
    </section>
  );
}