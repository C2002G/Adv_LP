import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"}`}>
      <div className="container">
        <nav className="flex h-18 items-center justify-between py-4">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }} className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${scrolled ? "bg-[#173b5e]" : "bg-[#d4a84f]"}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 4.5C7 2.8 9.2 2 12 2C14.8 2 17 2.8 18.5 4.5C20.2 6.2 21 8.4 21 11.2C21 14.2 19.8 16.9 17.4 18.7L12 22L6.6 18.7C4.2 16.9 3 14.2 3 11.2C3 8.4 3.8 6.2 5.5 4.5Z" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`text-lg font-semibold ${scrolled ? "text-[#173b5e]" : "text-white"}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Advocacia Forte
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4a84f]">Estratégia & defesa</span>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} className={`text-sm font-semibold transition ${scrolled ? "text-[#173b5e] hover:text-[#0d2137]" : "text-white/90 hover:text-white"}`}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:+5511999999999" className={`flex items-center gap-2 text-sm font-semibold transition ${scrolled ? "text-[#173b5e]" : "text-white/90 hover:text-white"}`}>
              <Phone size={15} />
              (11) 9 9999-9999
            </a>
            <button onClick={() => handleNavClick("#contato")} className="btn-press rounded-full bg-[#d4a84f] px-5 py-2.5 text-sm font-semibold text-[#071521] shadow-md transition hover:-translate-y-0.5">
              Contato
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className={`rounded-lg p-2 md:hidden ${scrolled ? "text-[#173b5e]" : "text-white"}`} aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <div className={`overflow-hidden border-t border-[#e8dfcf] bg-white/95 transition-all duration-300 md:hidden ${mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} className="rounded-xl px-2 py-3 text-base font-semibold text-[#173b5e] hover:bg-[#f7f2e8]">
              {link.label}
            </a>
          ))}
          <button onClick={() => handleNavClick("#contato")} className="btn-press mt-2 rounded-full bg-[#173b5e] px-5 py-3 text-sm font-semibold text-white">
            Falar com um advogado
          </button>
        </div>
      </div>
    </header>
  );
}
