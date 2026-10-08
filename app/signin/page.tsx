import type { Metadata } from "next";
import { Suspense } from "react";
import SignInForm from "@/components/signin-form";

export const metadata: Metadata = {
  title: "সাইন ইন | বাজার দর",
};

export default function SignInPage() {
  return (
    <main className="pb-14">
      <Suspense
        fallback={
          <div className="mx-auto max-w-md px-4 py-12">
            <div className="h-72 animate-pulse rounded-2xl border border-line bg-white" />
          </div>
        }
      >
        <SignInForm />
      </Suspense>
    </main>
  );
}