export type Work = {
  id: number;
  title: string;
  description: string;
  tools: string[];
  url?: string;
};

export const works: Work[] = [
  {
    id: 1,
    title: "思考整理・タスク整理サポート",
    description:
      "「やることが多すぎて何から手をつければ？」というお悩みに対し、頭の中を一緒に整理。優先順位の整理からタスクリスト化まで、あなたのペースに合わせてサポートします。",
    tools: ["Google Keep", "Google スプレッドシート", "Google ドキュメント"],
  },
  {
    id: 2,
    title: "Web チラシ制作（Canva）",
    description:
      "Canva を活用して制作した Web チラシです。イメージを伝えていただければ、デザインから仕上げまでお任せください。プレゼン資料・SNS 用バナーなども対応しています。",
    tools: ["Canva"],
    url: "https://canva.link/qi6vlbopnxk51bc",
  },
  {
    id: 3,
    title: "スケジュール管理・メール対応",
    description:
      "Google カレンダーを使ったスケジュール一元管理や、メール文案作成・送受信の代行。連絡調整もまとめてお任せいただけます。",
    tools: ["Google カレンダー", "Gmail", "Google Docs"],
  },
  {
    id: 4,
    title: "AI ツール活用サポート",
    description:
      "ChatGPT などの AI ツールの使い方をわかりやすくサポート。「AI を使いたいけど難しそう」という方に、実務で使える活用方法をご提案します。",
    tools: ["ChatGPT", "Gemini", "NotebookLM", "Claude", "Suno", "Canva AI"],
  },
];
