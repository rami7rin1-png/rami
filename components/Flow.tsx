const steps = [
  {
    step: "STEP 1",
    title: "思考整理",
    description:
      "お話を聞きながら、頭の中のモヤモヤを一緒に言葉にします。",
  },
  {
    step: "STEP 2",
    title: "タスク化",
    description:
      "「今やること」を優先順位つきの一覧にして見える形でお渡しします。",
  },
  {
    step: "STEP 3",
    title: "制作・実行",
    description:
      "決まったことを形に。チラシ・SNS画像・スライドなどのCanva制作から、日程調整・データ入力などの事務まで巻き取ります。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-24 bg-white px-6">
      <div className="max-w-2xl mx-auto">
        {/* セクションタイトル */}
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          Flow
        </p>
        <h2 className="text-3xl font-light text-slate-800 mb-3">
          サポートの流れ
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-14">
          相談だけで終わらせません。"実行"までが私の仕事です。
        </p>

        {/* ステップ */}
        <div className="space-y-0">
          {steps.map((item, index) => (
            <div key={item.step} className="flex gap-8">
              {/* 左: ライン＋番号 */}
              <div className="flex flex-col items-center">
                <div className="w-px bg-slate-200 flex-1" style={{ visibility: index === 0 ? "hidden" : "visible" }} />
                <div className="w-8 h-8 border border-slate-300 flex items-center justify-center shrink-0 my-2">
                  <span className="text-xs text-slate-500">{index + 1}</span>
                </div>
                <div className="w-px bg-slate-200 flex-1" style={{ visibility: index === steps.length - 1 ? "hidden" : "visible" }} />
              </div>

              {/* 右: コンテンツ */}
              <div className="pb-10 pt-1">
                <p className="text-xs tracking-widest text-slate-400 uppercase mb-1">
                  {item.step}
                </p>
                <h3 className="text-xl font-medium text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
