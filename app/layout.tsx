import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SiteHeader from "@/components/site-header";
import PriceTicker from "@/components/price-ticker";
import Footer from "@/components/footer";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর | আজকের বাজারদর এক নজরে",
  description: "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার আজকের দাম।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteHeader />
        <PriceTicker />
        <div className="flex-1">{children}</div>
        <Footer />
        <Toaster data-rht-toaster position="top-center" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}