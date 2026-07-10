import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "乗り換え案内 | 高槻→エル大阪",
  description: "高槻駅からエル大阪（大阪市中央区北浜東）への電車・乗り換え案内",
};

const steps = [
  {
    type: "train",
    line: "JR神戸線・京都線",
    lineName: "新快速",
    lineColor: "#E8380D",
    from: "高槻駅",
    to: "大阪駅",
    duration: "約13分",
    stops: "新大阪を経由",
    platform: "JR高槻駅 4番のりば（下り・大阪方面）",
    detail: "新快速（姫路・網干方面）に乗車",
    exit: "大阪駅 御堂筋口（南口）で下車",
  },
  {
    type: "walk",
    from: "大阪駅",
    to: "東梅田駅",
    duration: "約5分",
    detail:
      "御堂筋口を出てすぐ地下へ。ホワイティうめだ（地下街）を東へ進み、谷町線「東梅田駅」の表示に従って進む。",
  },
  {
    type: "metro",
    line: "Osaka Metro 谷町線",
    lineName: "谷町線",
    lineColor: "#824B97",
    from: "東梅田駅",
    to: "天満橋駅",
    duration: "約4分",
    stops: "2駅（南森町を経由）",
    platform: "東梅田駅 八尾南方面ホーム",
    detail: "八尾南行きに乗車。南森町の次、天満橋で下車。",
    exit: "天満橋駅 1番出口（北西方向）",
  },
  {
    type: "walk",
    from: "天満橋駅",
    to: "エル大阪",
    duration: "約5分",
    detail:
      "1番出口を上がり、大手前通りを西へ約150m進む。「エル・おおさか」の看板が見える大きなビルが目印。",
  },
];

function TrainIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6"
      stroke={color}
      strokeWidth={2}
    >
      <rect x="4" y="3" width="16" height="13" rx="2" />
      <path d="M8 19h8M12 16v3" />
      <path d="M8 7h8M8 11h4" />
      <circle cx="8" cy="14" r="1" fill={color} stroke="none" />
      <circle cx="16" cy="14" r="1" fill={color} stroke="none" />
    </svg>
  );
}

function WalkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6"
      stroke="#64748b"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M9 20l1.5-6-2.5-3 3-4.5 3 3 2.5-2" />
      <path d="M6 20h4M14 20h4" />
    </svg>
  );
}

export default function TransitPage() {
  const totalTime = "約27〜30分";

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-slate-500 mb-1">乗り換え案内</p>
          <h1 className="text-2xl font-medium text-slate-800 mb-1">
            高槻駅 → エル大阪
          </h1>
          <p className="text-sm text-slate-500">所要時間合計：{totalTime}</p>
        </div>

        {/* Summary Badge */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8380D]"></span>
            JR新快速
          </span>
          <span className="text-slate-400 self-center">+</span>
          <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-[#824B97]"></span>
            大阪メトロ 谷町線
          </span>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-slate-200 z-0" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10">
                {/* Station/location label (before each step) */}
                {i === 0 && (
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#E8380D] border-2 border-white ring-2 ring-[#E8380D]" />
                    </div>
                    <span className="font-medium text-slate-800">
                      高槻駅
                      <span className="ml-2 text-xs font-normal text-slate-500">
                        現在地
                      </span>
                    </span>
                  </div>
                )}

                {/* Step card */}
                <div className="flex items-start gap-4 mb-3">
                  {/* Icon */}
                  <div className="w-14 flex justify-center flex-shrink-0 mt-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.type === "walk"
                          ? "bg-slate-100"
                          : "bg-white border border-slate-200"
                      }`}
                    >
                      {step.type === "walk" ? (
                        <WalkIcon />
                      ) : (
                        <TrainIcon color={step.lineColor!} />
                      )}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        {step.type !== "walk" && (
                          <span
                            className="inline-block text-xs font-medium text-white rounded px-2 py-0.5 mb-1"
                            style={{ backgroundColor: step.lineColor }}
                          >
                            {step.line}
                          </span>
                        )}
                        <p className="font-medium text-slate-800">
                          {step.type === "walk"
                            ? `徒歩（${step.from} → ${step.to}）`
                            : step.lineName}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-slate-600 bg-slate-50 rounded-lg px-3 py-1">
                        {step.duration}
                      </span>
                    </div>

                    {step.type !== "walk" && step.stops && (
                      <p className="text-xs text-slate-500 mb-2">{step.stops}</p>
                    )}

                    <p className="text-sm text-slate-600">{step.detail}</p>

                    {step.type !== "walk" && (
                      <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-1 gap-1">
                        <p className="text-xs text-slate-500">
                          <span className="font-medium text-slate-600">乗り場：</span>
                          {step.platform}
                        </p>
                        <p className="text-xs text-slate-500">
                          <span className="font-medium text-slate-600">下車：</span>
                          {step.exit}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Destination dot between steps */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 flex justify-center">
                    <div
                      className={`rounded-full border-2 border-white ring-2 ${
                        i === steps.length - 1
                          ? "w-5 h-5 bg-emerald-500 ring-emerald-400"
                          : "w-3 h-3 bg-slate-400 ring-slate-300"
                      }`}
                    />
                  </div>
                  <span
                    className={`font-medium ${
                      i === steps.length - 1
                        ? "text-emerald-700 text-base"
                        : "text-slate-600 text-sm"
                    }`}
                  >
                    {step.to}
                    {i === steps.length - 1 && (
                      <span className="ml-2 text-xs font-normal text-emerald-600">
                        目的地
                      </span>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Destination info */}
        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <h2 className="font-medium text-emerald-800 mb-1">
            エル大阪（エル・おおさか）
          </h2>
          <p className="text-sm text-emerald-700">
            〒540-0031 大阪市中央区北浜東3-14
          </p>
          <p className="text-xs text-emerald-600 mt-1">
            天満橋駅1番出口より徒歩約5分
          </p>
        </div>

        {/* Map Section */}
        <div className="mt-8">
          <h2 className="text-base font-medium text-slate-700 mb-3">
            地図（天満橋駅 → エル大阪 周辺）
          </h2>

          {/* Walking direction card */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-medium text-slate-700 mb-2">
              天満橋駅からの徒歩ルート
            </p>
            <ol className="text-sm text-slate-600 space-y-1.5 list-none">
              <li className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center flex-shrink-0 font-medium">
                  1
                </span>
                天満橋駅の<strong>1番出口</strong>を出る（北西方向）
              </li>
              <li className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center flex-shrink-0 font-medium">
                  2
                </span>
                <strong>大手前通り</strong>（国道308号）を<strong>西へ</strong>約150m進む
              </li>
              <li className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center flex-shrink-0 font-medium">
                  3
                </span>
                右手（北側）に<strong>「エル・おおさか」</strong>の看板がある高層ビルが見える
              </li>
              <li className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center flex-shrink-0 font-medium">
                  到
                </span>
                エル大阪（大阪市中央区北浜東3-14）に到着
              </li>
            </ol>
          </div>

          {/* Embedded OpenStreetMap */}
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              title="天満橋駅からエル大阪への地図"
              src="https://www.openstreetmap.org/export/embed.html?bbox=135.5095%2C34.6870%2C135.5180%2C34.6920&layer=mapnik&marker=34.6897%2C135.5128"
              className="w-full h-72"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-slate-400 mt-2 text-center">
            地図データ © OpenStreetMap contributors
          </p>
        </div>

        {/* Transfer overview table */}
        <div className="mt-8">
          <h2 className="text-base font-medium text-slate-700 mb-3">
            乗り換えまとめ
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-4 py-2.5 font-medium text-slate-600 text-xs w-20">
                    区間
                  </th>
                  <th className="px-4 py-2.5 font-medium text-slate-600 text-xs">
                    手段
                  </th>
                  <th className="px-4 py-2.5 font-medium text-slate-600 text-xs w-20 text-right">
                    時間
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="px-4 py-3 text-slate-500 text-xs">高槻→大阪</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#E8380D]" />
                      JR新快速
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-slate-600">約13分</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="px-4 py-3 text-slate-500 text-xs">大阪→東梅田</td>
                  <td className="px-4 py-3 text-slate-600">徒歩（地下街）</td>
                  <td className="px-4 py-3 text-right text-slate-600">約5分</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="px-4 py-3 text-slate-500 text-xs">東梅田→天満橋</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#824B97]" />
                      谷町線（2駅）
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-slate-600">約4分</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="px-4 py-3 text-slate-500 text-xs">天満橋→エル大阪</td>
                  <td className="px-4 py-3 text-slate-600">徒歩</td>
                  <td className="px-4 py-3 text-right text-slate-600">約5分</td>
                </tr>
                <tr className="border-t-2 border-slate-300 bg-emerald-50">
                  <td className="px-4 py-3 text-slate-700 font-medium text-xs">
                    合計
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-right font-medium text-emerald-700">
                    約27〜30分
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-10">
          ※ 所要時間は目安です。乗り継ぎ時間や混雑により変わります。
        </p>
      </div>
    </main>
  );
}
