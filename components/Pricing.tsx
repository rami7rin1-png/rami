const plans = [
  {
    id: "spot",
    label: "スポット",
    name: "単発サポート",
    price: "3,000",
    unit: "円〜 / 1時間",
    description: "「ちょっとだけ手伝ってほしい」に対応。資料作成・調査・相談などを1時間単位でご依頼いただけます。",
    features: [
      "思考・タスク整理",
      "資料・スライド作成",
      "リサーチ業務",
      "メール文章作成",
    ],
    cta: "まずは相談する",
    highlighted: false,
  },
  {
    id: "monthly",
    label: "月額",
    name: "月次サポートプラン",
    price: "20,000",
    unit: "円 / 月（10時間）",
    description: "継続的なサポートが必要な方に。月10時間を目安に、スケジュール管理・連絡調整・資料作成などを柔軟に対応します。",
    features: [
      "スポットプランの全内容",
      "スケジュール管理・連絡調整",
      "データ入力・スプレッドシート管理",
      "AIツール活用サポート",
      "月次振り返り面談（30分）",
    ],
    cta: "このプランで相談する",
    highlighted: true,
  },
  {
    id: "full",
    label: "フルサポート",
    name: "専属サポートプラン",
    price: "45,000",
    unit: "円 / 月（25時間）",
    description: "「右腕」として事業を一緒に走りたい方へ。幅広い業務を継続的にお任せいただけます。",
    features: [
      "月次サポートプランの全内容",
      "優先対応（当日〜翌営業日）",
      "パソコン操作サポート",
      "定期ミーティング（週1回・30分）",
    ],
    cta: "詳しく相談する",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 px-6">
      <div className="max-w-2xl mx-auto">
        {/* セクションタイトル */}
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          Pricing
        </p>
        <h2 className="text-3xl font-light text-slate-800 mb-4">
          料金プラン
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-12">
          すべてのプランは月末締め・翌月払い。まずは無料でご相談ください。
        </p>

        {/* プランカード */}
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 border transition-colors duration-200 ${
                plan.highlighted
                  ? "bg-slate-800 border-slate-800"
                  : "bg-white border-slate-100 hover:border-slate-300"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <p
                    className={`text-xs tracking-widest uppercase mb-1 ${
                      plan.highlighted ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    {plan.label}
                  </p>
                  <h3
                    className={`text-xl font-medium ${
                      plan.highlighted ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span
                    className={`text-2xl font-light ${
                      plan.highlighted ? "text-white" : "text-slate-800"
                    }`}
                  >
                    ¥{plan.price}
                  </span>
                  <span
                    className={`text-xs ml-1 ${
                      plan.highlighted ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  plan.highlighted ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-2 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm flex items-start gap-2 ${
                      plan.highlighted ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    <span className={plan.highlighted ? "text-slate-400" : "text-slate-300"}>
                      ―
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-block px-6 py-2.5 text-xs tracking-wide transition-colors duration-200 ${
                  plan.highlighted
                    ? "bg-white text-slate-800 hover:bg-slate-100"
                    : "border border-slate-300 text-slate-600 hover:border-slate-500 hover:text-slate-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* 注意書き */}
        <p className="text-xs text-slate-400 leading-relaxed mt-8">
          ※ 料金はすべて税込です。業務内容・ボリュームによって別途お見積もりします。お気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
