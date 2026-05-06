const skills = [
  "思考整理・タスク整理",
  "スケジュール管理・連絡調整",
  "メール対応",
  "Canva 資料・チラシ・スライド作成",
  "データ入力・スプレッドシート管理",
  "AI ツール活用サポート",
  "リサーチ業務",
  "パソコン操作全般",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 px-6">
      <div className="max-w-2xl mx-auto">
        {/* セクションタイトル */}
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          About
        </p>
        <h2 className="text-3xl font-light text-slate-800 mb-12">
          自己紹介
        </h2>

        {/* 自己紹介文 */}
        <div className="space-y-4 text-slate-600 leading-relaxed mb-14">
          <p>
            はじめまして。伴歩型オンライン秘書の <strong className="font-medium text-slate-800">荒川 愛（らみ）</strong> です。
          </p>
          <p>
            金融機関での事務経験（21年）を経て、福祉業界に転職。相談支援・事務業務を14年担当してきました。合計35年の実務経験を活かし、「忙しくて頭が整理できない」という方のタスク・思考・資料の整理をサポートしています。
          </p>
          <p>
            「その人らしい選択を一緒に考える」をモットーに、押し付けではなくあなたが望む形で寄り添います。子育てと事業の両立を目指す方や、やりたいことがあるのに対応しきれない方をぜひ応援させてください。
          </p>
        </div>

        {/* スキル */}
        <div>
          <h3 className="text-sm tracking-widest text-slate-400 uppercase mb-4">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
