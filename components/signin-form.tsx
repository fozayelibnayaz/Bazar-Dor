"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "@/lib/auth-client";
import SocialButtons from "@/components/social-buttons";

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") ?? "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("next")) {
      toast("এই পেজ দেখতে আগে সাইন ইন করুন");
    }
  }, [searchParams]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    setLoading(true);

    const { error } = await signIn.email({ email, password });

    if (error) {
      setLoading(false);
      toast.error(error.message ?? "ইমেইল বা পাসওয়ার্ড ঠিক নেই");
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push(nextPath);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-center text-2xl font-bold text-ink sm:text-3xl">সাইন ইন</h1>
      <p className="mt-2 text-center text-sm text-muted">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে আকাউন্টে ঢুকুন।
      </p>

      <form onSubmit={handleSubmit} className="mt-6 rounded-2xl border border-line bg-white p-6 sm:p-7">
        <label htmlFor="email" className="text-sm font-medium text-ink">
          ইমেইল
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
        />

        <label htmlFor="password" className="mt-4 block text-sm font-medium text-ink">
          পাসওয়ার্ড
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="কমপক্ষে ৮ অক্ষর"
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
        />

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
            "সাইন ইন"
          )}
        </button>

        <div className="my-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-line" />
          <span className="text-xs text-muted">অথবা</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <SocialButtons />

        <p className="mt-5 text-center text-sm text-muted">
          আকাউন্ট নেই?{" "}
          <Link href="/signup" className="font-semibold text-brand hover:text-brand-dark">
            সাইন আপ করুন
          </Link>
        </p>
      </form>

      <p className="mt-5 text-center text-sm text-muted">
        <Link href="/" className="transition hover:text-ink">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}