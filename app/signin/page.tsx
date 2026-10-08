import type { Metadata } from "next";
import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignInForm from "@/components/signin-form";

export const instant = false;

export const metadata: Metadata = {
  title: "সাইন ইন | বাজার দর",
};

type Props = { searchParams: Promise<{ next?: string }> };

export default async function SignInPage({ searchParams }: Props) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    const { next } = await searchParams;
    redirect(next && next.startsWith("/") ? next : "/");
  }

  return (
    <main className="pb-14">
      <Suspense
        fallback={
          <div className="mx-auto max-w-lg px-4 py-12">
            <div className="h-72 animate-pulse rounded-2xl border border-line bg-white" />
          </div>
        }
      >
        <SignInForm />
      </Suspense>
    </main>
  );
}