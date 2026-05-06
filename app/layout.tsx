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
  title: "らみ | 伴歩型オンライン秘書",
  description:
    "金融・福祉で35年の実務経験を持つ伴歩型オンライン秘書。思考整理・タスク整理・Canva資料作成・スケジュール管理など幅広くサポートします。",
  openGraph: {
    title: "らみ | 伴歩型オンライン秘書",
    description:
      "頭の中の「ごちゃごちゃ」を一緒に整理します。あなたのペースに寄り添い、やりたいことを前に進めるお手伝いをします。",
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
