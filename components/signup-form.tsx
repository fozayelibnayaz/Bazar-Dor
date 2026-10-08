"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signUp } from "@/lib/auth-client";
import SocialButtons from "@/components/social-buttons";

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim().length < 3) {
      toast.error("নাম কমপক্ষে ৩ অক্ষরের হতে হবে");
      return;
    }

    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("দুইবার লেখা পাসওয়ার্ড মিলছে না");
      return;
    }

    setLoading(true);

    const { error } = await signUp.email({ name: name.trim(), email, password });

    if (error) {
      setLoading(false);
      toast.error(error.message ?? "অ্যাকাউন্ট তৈরি করা যায়নি");
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এখন সাইন ইন করুন");
    router.push("/signin");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-center text-2xl font-bold text-ink sm:text-3xl">আকাউন্ট তৈরি করুন</h1>
      <p className="mt-2 text-center text-sm text-muted">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
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
          placeholder="যেমন: রহিম উদ্দিন"
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
        />

        <label htmlFor="email" className="mt-4 block text-sm font-medium text-ink">
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
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="কমপক্ষে ৮ অক্ষর"
          className="mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-brand"
        />

        <label htmlFor="confirmPassword" className="mt-4 block text-sm font-medium text-ink">
          পাসওয়ার্ড নিশ্চিত করুন
        </label>
        <input
          id="confirmPassword"
          type="password"
          required
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="আবার লিখুন"
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
            "আকাউন্ট তৈরি করুন"
          )}
        </button>

        <div className="my-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-line" />
          <span className="text-xs text-muted">অথবা</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <SocialButtons />

        <p className="mt-5 text-center text-sm text-muted">
          আকাউন্ট আছে?{" "}
          <Link href="/signin" className="font-semibold text-brand hover:text-brand-dark">
            সাইন ইন করুন
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