import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import ProfileCard from "@/components/profile-card";
import ProfileInfo from "@/components/profile-info";

export const instant = false;

export const metadata: Metadata = {
  title: "আমার প্রোফাইল | বাজার দর",
};

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/signin?next=/profile");
  }

  return (
    <main className="pb-14">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-ink">আমার প্রোফাইল</h1>
        <p className="mt-1 text-sm text-muted">আপনার আকাউন্টের তথ্য এখানে দেখুন।</p>

        <ProfileCard
          name={session.user.name}
          email={session.user.email}
          image={session.user.image}
        />

        <ProfileInfo name={session.user.name} email={session.user.email} />
      </div>
    </main>
  );
}