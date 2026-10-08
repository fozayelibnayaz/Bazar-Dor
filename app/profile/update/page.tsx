import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import UpdateInfoForm from "@/components/update-info-form";

export const instant = false;

export const metadata: Metadata = {
  title: "তথ্য আপডেট | বাজার দর",
};

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/signin?next=/profile/update");
  }

  return (
    <main className="pb-14">
      <UpdateInfoForm currentName={session.user.name} email={session.user.email} />
    </main>
  );
}