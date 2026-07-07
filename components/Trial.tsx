export default function Trial() {
  return (
    <section id="trial" className="py-24 bg-gray-50 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          Free Trial
        </p>
        <h2 className="text-3xl font-light text-slate-800 mb-4">
          まずは無料で体験
        </h2>

        <div className="border border-slate-100 bg-white p-10">
          <p className="text-lg font-medium text-slate-800 mb-4">
            30分の無料お試し思考整理
          </p>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            お話を聞いて、あなた専用の「やること一覧」をその場でお渡しします。
            <br />
            話すだけで頭がスッキリする体験を、まず一度どうぞ。
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-slate-700 text-white text-sm tracking-wide hover:bg-slate-800 transition-colors duration-200"
          >
            無料体験を申し込む
          </a>
        </div>
      </div>
    </section>
  );
}
