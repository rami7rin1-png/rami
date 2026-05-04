const skills = [
  "スケジュール管理",
  "メール対応・文案作成",
  "資料・プレゼン作成",
  "データ入力・整理",
  "SNS 運用サポート",
  "議事録作成",
  "リサーチ・情報収集",
  "各種ツール設定",
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
            はじめまして。オンライン秘書の <strong className="font-medium text-slate-800">Your Name</strong> です。
          </p>
          <p>
            「もっと本業に集中したい」「細かい作業を任せられる人が欲しい」——そんな経営者・フリーランスの方のお力になりたいと思い、オンライン秘書として活動しています。
          </p>
          <p>
            スケジュール管理からメール対応、資料作成まで、バックオフィス業務を幅広く承ります。丁寧・迅速・柔軟な対応をモットーに、あなたのビジネスを陰からサポートします。
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
