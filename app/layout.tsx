import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | オンライン秘書",
  description:
    "オンライン秘書として、スケジュール管理・メール対応・資料作成など幅広いバックオフィス業務をサポートします。",
  openGraph: {
    title: "Your Name | オンライン秘書",
    description:
      "あなたの「忙しい」を、まるっとサポート。オンライン秘書として時間と心のゆとりをお届けします。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans bg-white text-slate-800">{children}</body>
    </html>
  );
}
