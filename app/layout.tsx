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
  title: "荒川 愛 | AI業務代行",
  description:
    "金融・福祉で35年の実務経験を持つAI業務代行。Canva資料作成・バックオフィス業務・公文書対応・役所手続きなど幅広くサポートします。",
  openGraph: {
    title: "荒川 愛 | AI業務代行",
    description:
      "AIを活用しながら、バックオフィス業務を丸ごとお任せください。Canva資料作成から役所手続きまで幅広く対応します。",
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
