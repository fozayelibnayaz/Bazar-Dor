"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "@/lib/auth-client";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.9-.1-1.5-.2-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l3.5 2.7c2.2-2 3.5-5 3.9-8.4z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.7-2.9c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.1-6.9-5l-3.8 3C3.3 21.3 7.3 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.1 14.4A7.2 7.2 0 0 1 4.7 12c0-.8.2-1.7.4-2.4l-3.8-3A12 12 0 0 0 0 12c0 1.9.5 3.8 1.3 5.4l3.8-3z"
      />
      <path
        fill="#EA4335"
        d="M12 4.7c2.3 0 3.8 1 4.7 1.8l3.4-3.3C18 1.2 15.2 0 12 0 7.3 0 3.3 2.7 1.3 6.6l3.8 3c1-2.9 3.7-4.9 6.9-4.9z"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

export default function SocialButtons() {
  const [pending, setPending] = useState<"google" | "github" | null>(null);

  async function handleSocial(provider: "google" | "github") {
    setPending(provider);

    const { error } = await signIn.social({ provider, callbackURL: "/" });

    if (error) {
      setPending(null);
      toast.error("সোশ্যাল লগইন শুরু করা যায়নি, আবার চেষ্টা করুন");
    }
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={() => handleSocial("google")}
        disabled={pending !== null}
        className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-medium text-ink transition hover:bg-flat-soft disabled:opacity-60"
      >
        {pending === "google" ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-line border-t-brand" />
        ) : (
          <GoogleIcon />
        )}
        Google দিয়ে চালিয়ে যান
      </button>
      <button
        type="button"
        onClick={() => handleSocial("github")}
        disabled={pending !== null}
        className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-medium text-ink transition hover:bg-flat-soft disabled:opacity-60"
      >
        {pending === "github" ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-line border-t-brand" />
        ) : (
          <GithubIcon />
        )}
        Github দিয়ে চালিয়ে যান
      </button>
    </div>
  );
}