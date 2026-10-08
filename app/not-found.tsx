import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pb-14">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-line bg-white px-6 py-14 text-center">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের ঝুড়ি"
            width={315}
            height={263}
            className="mx-auto w-40 sm:w-52"
          />
          <p className="mt-6 text-4xl font-bold text-ink">৪০৪</p>
          <h1 className="mt-2 text-xl font-bold text-ink sm:text-2xl">পেজটি খুঁজে পাওয়া যায়নি</h1>
          <p className="mt-2 text-sm text-muted">
            আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে ফেলা হয়েছে।
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}