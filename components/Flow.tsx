const steps = [
  {
    title: "お問い合わせ",
    description:
      "まずはメールでお気軽にご連絡ください。「何をお願いしたらいいかわからない」という段階でも大丈夫です。",
  },
  {
    title: "ヒアリング",
    description:
      "現在のお困りごとやご希望を、あなたのペースでお聞かせください。頭の中の整理からご一緒します。",
  },
  {
    title: "ご提案・お見積り",
    description:
      "ヒアリング内容をもとに、サポート内容と進め方をご提案します。内容にご納得いただいてからのスタートです。",
  },
  {
    title: "サポート開始",
    description:
      "進捗はこまめにご報告しながら進めます。途中での変更・ご相談もいつでも歓迎です。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-24 bg-gray-50 px-6">
      <div className="max-w-2xl mx-auto">
        {/* セクションタイトル */}
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          Flow
        </p>
        <h2 className="text-3xl font-light text-slate-800 mb-12">
          ご依頼の流れ
        </h2>

        {/* ステップ一覧 */}
        <ol className="space-y-8">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-6">
              {/* ステップ番号 */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-slate-300 text-slate-500 text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
