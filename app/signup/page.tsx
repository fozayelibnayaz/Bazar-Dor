import type { Metadata } from "next";
import SignUpForm from "@/components/signup-form";

export const metadata: Metadata = {
  title: "সাইন আপ | বাজার দর",
};

export default function SignUpPage() {
  return (
    <main className="pb-14">
      <SignUpForm />
    </main>
  );
}