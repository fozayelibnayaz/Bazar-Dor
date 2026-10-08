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

function ArrowDownIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M10 4v11" />
      <path d="m5.5 10.5 4.5 4.5 4.5-4.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <div className="grid items-center gap-8 rounded-2xl border border-line bg-white px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Suspense
            fallback={<span className="inline-block h-6 w-44 animate-pulse rounded-full bg-flat-soft" />}
          >
            <TodayPill />
          </Suspense>

          <h1 className="mt-4 text-3xl font-bold leading-snug text-ink sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়,
            সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#সব-পণ্য"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
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
          className="mx-auto w-56 sm:w-72 lg:w-full lg:max-w-[320px]"
        />
      </div>
    </section>
  );
}