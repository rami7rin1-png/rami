const skills = [
  "Canva 資料・チラシ・スライド作成",
  "公文書作成・役所手続きサポート",
  "バックオフィス業務全般",
  "思考整理・タスク整理",
  "スケジュール管理・連絡調整",
  "メール対応",
  "データ入力・スプレッドシート管理",
  "AI ツール活用サポート",
  "リサーチ業務",
  "パソコン操作全般",
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          About
        </p>
        <h2 className="text-2xl sm:text-3xl font-light text-slate-800 mb-8 sm:mb-12">
          自己紹介
        </h2>

        <div className="space-y-4 text-slate-600 leading-relaxed mb-10 sm:mb-14 text-sm sm:text-base">
          <p>
            はじめまして。AI業務代行の <strong className="font-medium text-slate-800">荒川 愛</strong> です。
          </p>
          <p>
            金融機関での事務経験（21年）を経て、福祉業界に転職。相談支援・事務業務を14年担当してきました。合計35年の実務経験を活かし、主にバックオフィス業務を中心に、事業者の「やること」を丸ごと引き受けます。
          </p>
          <p>
            Canvaを使った資料・チラシ・SNS画像の制作が得意で、公文書の作成や役所への申請手続きのサポートも対応しています。AIツールを積極的に活用しながら、スピーディーかつ丁寧に仕上げます。
          </p>
          <p>
            「その人らしい選択を一緒に考える」をモットーに、子育てと事業を両立している方や、やりたいことがあるのに手が回らない方を全力で応援します。
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-widest text-slate-400 uppercase mb-4">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 sm:px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs sm:text-sm"
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
