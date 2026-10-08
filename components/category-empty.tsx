import Link from "next/link";

export default function CategoryEmpty({ slug }: { slug: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-line bg-white px-6 py-14 text-center">
        <p className="text-5xl font-bold text-ink">৪০৪</p>
        <h1 className="mt-3 text-xl font-bold text-ink sm:text-2xl">এই ক্যাটাগরি পাওয়া যায়নি</h1>
        <p className="mt-2 text-sm text-muted">“{slug}” নামে কোনো ক্যাটাগরি আমাদের তালিকায় নেই।</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
