export default function Footer() {
  const email = "rami1rin7@gmail.com";

  return (
    <footer id="contact" className="py-24 bg-gray-50 px-6">
      <div className="max-w-2xl mx-auto">
        {/* セクションタイトル */}
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-2">
          Contact
        </p>
        <h2 className="text-3xl font-light text-slate-800 mb-6">
          お問い合わせ
        </h2>

        <p className="text-slate-500 leading-relaxed mb-8">
          お仕事のご依頼・ご相談はメールにてお気軽にどうぞ。
          <br />
          通常 1〜2 営業日以内にご返信いたします。
        </p>

        {/* メールリンク */}
        <a
          href={`mailto:${email}`}
          className="inline-block text-slate-700 border-b border-slate-400 pb-0.5 text-sm hover:text-slate-900 hover:border-slate-700 transition-colors duration-200"
        >
          {email}
        </a>

        {/* コピーライト */}
        <p className="mt-16 text-xs text-slate-300">
          © {new Date().getFullYear()} Ai Arakawa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
