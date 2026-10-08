import type { Metadata } from "next";
import SignInForm from "@/components/signin-form";

export const metadata: Metadata = {
  title: "সাইন ইন | বাজার দর",
};

export default function SignInPage() {
  return (
    <main className="pb-14">
      <SignInForm />
    </main>
  );
}