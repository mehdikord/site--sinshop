import type { Metadata } from "next";
import { Lalezar, Vazirmatn } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/store/cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-vazir", display: "swap" });
const lalezar = Lalezar({ weight: "400", subsets: ["arabic", "latin"], variable: "--font-lalezar", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: "فروشگاه تخصصی سیسمونی، اکسسوری و لوازم کودک؛ سیسمونی لوکس و ساده با سین شاپ.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${lalezar.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
