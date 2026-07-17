import type { Metadata, Viewport } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Мастерская у Даниела — кузовной ремонт и покраска, ул. Белозерская, 10",
  description:
    "Кузовной ремонт и покраска, рихтовка, замена порогов и арок, вытягивание геометрии кузова, полировка и керамика. Мастерская у Даниела, ул. Белозерская, 10. Тел. +7 985 309-76-47.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
