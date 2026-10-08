"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

type Props = {
  currentName: string;
  email: string;
};

export default function UpdateInfoForm({ currentName, email }: Props) {
  const router = useRouter();
  const [name, setName] = useState(currentName);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim().length < 3) {
      toast.error("নাম কমপক্ষে ৩ অক্ষরের হতে হবে");
      return;
    }

    setLoading(true);

    const { error } = await authClient.updateUser({ name: name.trim() });

    if (error) {
      setLoading(false);
      toast.error(error.message ?? "তথ্য আপডেট করা যায়নি");
      return;
    }

    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-center text-2xl font-bold text-ink sm:text-3xl">তথ্য আপডেট করুন</h1>
      <p className="mt-2 text-center text-sm text-muted">
        আপনার নাম পরিবর্তন করে সংরক্ষণ করুন।
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 rounded-2xl border border-line bg-white p-6 sm:p-7"
      >
        <label htmlFor="name" className="text-sm font-medium text-ink">
          নাম
        </label>
        <input
          id="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="আপনার নাম"
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
        />

        <label htmlFor="email" className="mt-4 block text-sm font-medium text-ink">
          ইমেইল
        </label>
        <input
          id="email"
          type="email"
          value={email}
          readOnly
          className="mt-1.5 w-full cursor-not-allowed rounded-lg border border-line bg-page px-3.5 py-2.5 text-sm text-muted outline-none"
        />
        <p className="mt-1.5 text-xs text-muted">ইমেইল এখান থেকে পরিবর্তন করা যাবে না।</p>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-70"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              অপেক্ষা করুন...
            </>
          ) : (
            "আপডেট"
          )}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-muted">
        <Link href="/profile" className="transition hover:text-ink">
          ← প্রোফাইলে ফিরে যান
        </Link>
      </p>
    </div>
  );
}