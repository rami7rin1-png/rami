import { works } from "@/data/works";

export default function Works() {
  return (
    <section id="works" className="py-24 bg-white px-6">
      <div className="max-w-2xl mx-auto">
        {/* セクションタイトル */}
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          Works
        </p>
        <h2 className="text-3xl font-light text-slate-800 mb-12">
          実績・制作物
        </h2>

        {/* カード一覧 */}
        <div className="space-y-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="p-8 border border-slate-100 hover:border-slate-300 transition-colors duration-200"
            >
              {/* タイトル */}
              <h3 className="text-lg font-medium text-slate-800 mb-3">
                {work.title}
              </h3>

              {/* 説明 */}
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {work.description}
              </p>

              {/* 使用ツール */}
              <div className="flex flex-wrap gap-2 mb-5">
                {work.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-50 text-slate-500 text-xs border border-slate-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* 制作物リンク */}
              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 border border-slate-300 text-slate-600 text-xs tracking-wide hover:bg-slate-50 hover:border-slate-500 transition-colors duration-200"
                >
                  実際の制作物を見る ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
