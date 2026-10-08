"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signOut, useSession } from "@/lib/auth-client";

export default function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [open, setOpen] = useState(false);

  if (isPending) {
    return <div className="h-10 w-28 animate-pulse rounded-lg bg-flat-soft" />;
  }

  if (!session) {
    return (
      <div className="flex items-center gap-1.5">
        <Link
          href="/signin"
          className="rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-flat-soft"
        >
          সাইন ইন
        </Link>
        <Link
          href="/signup"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const initial = session.user.name?.charAt(0) ?? "ব";

  async function handleSignOut() {
    setOpen(false);
    await signOut();
    toast.success("সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-flat-soft"
      >
        {session.user.image ? (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="h-9 w-9 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {initial}
          </span>
        )}
        <span className="hidden max-w-32 truncate text-sm font-medium text-ink sm:block">
          {session.user.name}
        </span>
        <span className="text-muted">▾</span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="মেনু বন্ধ করুন"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-10 cursor-default"
          />
          <div className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-line bg-white p-4 shadow-lg">
            <p className="truncate font-semibold text-ink">{session.user.name}</p>
            <p className="truncate text-xs text-muted">{session.user.email}</p>
            <div className="my-3 h-px bg-line" />
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-ink transition hover:bg-flat-soft"
            >
              👤 আমার প্রোফাইল
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="mt-1 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-up transition hover:bg-up-soft"
            >
              ← সাইন আউট
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}