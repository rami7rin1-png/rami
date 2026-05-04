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
    title: "スケジュール管理サポート",
    description:
      "経営者様の月間スケジュールを一元管理。Google カレンダーを活用し、会議設定・リマインド・調整業務を担当しました。",
    tools: ["Google カレンダー", "Slack", "Notion"],
  },
  {
    id: 2,
    title: "メール対応・文書作成",
    description:
      "取引先へのメール文案作成・送受信管理を代行。月間 200 通以上のメール対応を行い、返信率・対応速度を改善しました。",
    tools: ["Gmail", "Google Docs", "ChatGPT"],
  },
  {
    id: 3,
    title: "資料作成・データ整理",
    description:
      "会議用プレゼン資料・月次レポートの作成。スプレッドシートでのデータ集計・グラフ化もお任せいただきました。",
    tools: ["Google Slides", "Google Sheets", "Canva"],
  },
  {
    id: 4,
    title: "SNS 運用サポート",
    description:
      "Instagram・X（Twitter）の投稿文案作成と定期投稿。ハッシュタグ調査・エンゲージメント分析も対応しました。",
    tools: ["Canva", "Buffer", "Instagram", "X"],
  },
];
