export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl w-full">
        {/* 小見出し */}
        <p className="text-sm tracking-widest text-slate-400 uppercase mb-4">
          Online Secretary
        </p>

        {/* 名前 */}
        <h1 className="text-5xl sm:text-6xl font-light text-slate-800 mb-6 leading-tight">
          Ai　Arakawa/荒川　愛
        </h1>

        {/* キャッチコピー */}
        <p className="text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed">
          あなたの「忙しい」を、まるっとサポート。
          <br />
          オンライン秘書として、時間と心のゆとりをお届けします。
        </p>

        {/* CTA ボタン */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#works"
            className="inline-block px-8 py-3 bg-slate-700 text-white text-sm tracking-wide hover:bg-slate-800 transition-colors duration-200"
          >
            実績を見る
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-slate-300 text-slate-600 text-sm tracking-wide hover:border-slate-500 hover:text-slate-800 transition-colors duration-200"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
