import Link from "next/link";

export default function ProfileInfo({ name, email }: { name: string; email: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-white p-6">
      <h2 className="text-lg font-bold text-ink">তথ্য</h2>

      <p className="mt-5 text-sm font-medium text-ink">নাম</p>
      <p className="mt-1.5 rounded-lg border border-line bg-page px-3.5 py-2.5 text-sm text-ink">
        {name}
      </p>

      <p className="mt-4 text-sm font-medium text-ink">ইমেইল</p>
      <p className="mt-1.5 rounded-lg border border-line bg-page px-3.5 py-2.5 text-sm text-muted">
        {email}
      </p>

      <Link
        href="/profile/update"
        className="mt-5 block w-full rounded-lg bg-brand px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        তথ্য আপডেট করুন
      </Link>
    </div>
  );
}