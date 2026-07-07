const plans = [
  {
    id: "light",
    icon: "🌱",
    label: "ライト",
    hours: "月5時間",
    price: "10,000",
    description: "月1回の思考整理＋ちょこっと事務・制作",
    highlighted: false,
  },
  {
    id: "standard",
    icon: "🌿",
    label: "スタンダード",
    hours: "月10時間",
    price: "19,800",
    description: "定例の思考整理＋事務・Canva制作までおまかせ",
    highlighted: true,
  },
  {
    id: "full",
    icon: "🌳",
    label: "しっかり伴走",
    hours: "月20時間",
    price: "39,600",
    description: "週次で並走。考える→決める→形にするを毎週回します",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          Pricing
        </p>
        <h2 className="text-3xl font-light text-slate-800 mb-4">
          料金プラン
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-12">
          すべて税込・月額。時間の使い方はご相談で柔軟に。単発のご依頼もお受けします。
        </p>

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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{plan.icon}</span>
                  <h3
                    className={`text-lg font-medium ${
                      plan.highlighted ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {plan.label}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 border ${
                      plan.highlighted
                        ? "border-slate-600 text-slate-400"
                        : "border-slate-200 text-slate-400"
                    }`}
                  >
                    {plan.hours}
                  </span>
                </div>
                <div className="shrink-0">
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
                    / 月
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

              <a
                href="#contact"
                className={`inline-block px-6 py-2.5 text-xs tracking-wide transition-colors duration-200 ${
                  plan.highlighted
                    ? "bg-white text-slate-800 hover:bg-slate-100"
                    : "border border-slate-300 text-slate-600 hover:border-slate-500 hover:text-slate-800"
                }`}
              >
                このプランで相談する
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
