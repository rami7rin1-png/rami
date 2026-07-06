const navItems = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#flow", label: "Flow" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-sm tracking-widest text-slate-700 hover:text-slate-900 transition-colors duration-200 whitespace-nowrap"
        >
          らみ<span className="hidden sm:inline"> | 伴歩型オンライン秘書</span>
        </a>
        <nav className="flex gap-5 sm:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest text-slate-400 uppercase hover:text-slate-700 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
