import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WIN YOURSELF EVERY DAY - תוכנית פיתוח כדורסל",
  description: "תוכנית ליווי פרימיום לשחקני כדורסל שרוצים לבנות יציבות, ביטחון והבנת משחק עמוקה.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} antialiased bg-main-bg text-text-primary min-h-screen selection:bg-primary-accent selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
