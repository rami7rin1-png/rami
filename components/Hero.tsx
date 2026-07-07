export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6">
      <div className="max-w-2xl w-full">
        <p className="text-xs sm:text-sm tracking-widest text-slate-400 uppercase mb-4">
          伴歩型オンライン秘書
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight break-words">
          Ai Arakawa / 荒川 愛
        </h1>

        <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed">
          頭の中の「ごちゃごちゃ」を、一緒に整理します。
          <br />
          あなたのペースに寄り添いながら、やりたいことを前に進めるお手伝いをします。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#works"
            className="block text-center px-8 py-3.5 bg-slate-700 text-white text-sm tracking-wide hover:bg-slate-800 transition-colors duration-200"
          >
            実績を見る
          </a>
          <a
            href="#contact"
            className="block text-center px-8 py-3.5 border border-slate-300 text-slate-600 text-sm tracking-wide hover:border-slate-500 hover:text-slate-800 transition-colors duration-200"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
