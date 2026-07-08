import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Gavel,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const IMG_HERO =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80";
const IMG_STUDIO =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80";

const PRACTICE_AREAS = [
  {
    title: "Direito Empresarial",
    description:
      "Estruturação jurídica para negócios em crescimento, contratos, compliance e proteção patrimonial com foco em decisão rápida e segura.",
    bullets: ["Contratos e negociações", "Compliance e governança", "Proteção de marcas e ativos"],
  },
  {
    title: "Direito Civil",
    description:
      "Acompanhamento estratégico em disputas familiares, sucessões e questões patrimoniais com comunicação clara em cada etapa.",
    bullets: ["Mediação e solução de conflitos", "Planejamento sucessório", "Defesa de direitos patrimoniais"],
  },
  {
    title: "Direito Tributações",
    description:
      "Planejamento tributário preventivo e defesa em controvérsias para reduzir riscos e preservar o caixa da operação.",
    bullets: ["Consultoria preventiva", "Defesa administrativa", "Revisão de processos fiscais"],
  },
];

const PROCESS = [
  {
    title: "Diagnóstico inicial",
    text: "Entendemos o contexto, os riscos e os objetivos com uma conversa objetiva e sem formalismos excessivos.",
  },
  {
    title: "Estratégia jurídica",
    text: "Montamos um plano claro, com prazos, riscos e alternativas para proteger o seu posicionamento.",
  },
  {
    title: "Execução e acompanhamento",
    text: "Acompanhamo a execução com comunicação direta e decisões rápidas quando o cenário muda.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marina C.",
    role: "Empresária",
    text: "A equipe trouxe clareza em uma negociação delicada e evitou um prejuízo enorme para o negócio.",
  },
  {
    name: "Rafael T.",
    role: "Diretor de operação",
    text: "Atendimento muito claro, estratégico e humano. Sentimos que estava tudo sob controle desde o primeiro encontro.",
  },
  {
    name: "Camila S.",
    role: "Cliente particular",
    text: "Recebi um acompanhamento impecável, com resposta rápida e muita segurança para cada decisão.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [activeArea, setActiveArea] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-practice]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveArea(Number(entry.target.getAttribute("data-practice") ?? 0));
          }
        });
      },
      { threshold: 0.7 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const activePractice = useMemo(() => PRACTICE_AREAS[activeArea], [activeArea]);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f2e8] text-[#122033]">
      <Navbar />

      <section
        id="inicio"
        className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_42%),linear-gradient(125deg,_#0d2137_0%,_#173b5e_45%,_#0d2137_100%)] px-0 py-24 sm:py-28 lg:py-32"
      >
        <div className="absolute inset-0 opacity-25">
          <div className="absolute left-[-8%] top-[-12%] h-56 w-56 rounded-full bg-[#d4a84f] blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-8%] h-72 w-72 rounded-full bg-[#4e7aa6] blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl text-white">
              <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a84f] backdrop-blur">
                <ShieldCheck size={15} />
                Advocacia moderna, estratégia e presença
              </div>
              <h1 className="reveal reveal-delay-1 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-7xl">
                Defesa sólida para pessoas e empresas que querem agir com clareza.
              </h1>
              <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                Atuamos com visão estratégica para proteger direitos, resolver conflitos e transformar riscos em decisões inteligentes.
              </p>
              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection("#contato")}
                  className="btn-press inline-flex items-center gap-2 rounded-full bg-[#d4a84f] px-6 py-3.5 font-semibold text-[#071521] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e2b868]"
                >
                  Falar com um advogado
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection("#servicos")}
                  className="btn-press rounded-full border border-white/35 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Ver áreas de atuação
                </button>
              </div>
              <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-5 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4a84f]/20 text-[#d4a84f]">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Resposta ágil</p>
                    <p className="text-sm text-white/70">Atendimento direto e objetivo</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d4a84f]/20 text-[#d4a84f]">
                    <Landmark size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Equipe experiente</p>
                    <p className="text-sm text-white/70">Estratégia e presença em todas as etapas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal relative mx-auto w-full max-w-xl">
              <div className="absolute -left-6 top-8 hidden rounded-2xl border border-white/15 bg-white/90 p-4 shadow-xl sm:block">
                <p className="text-sm font-semibold text-[#173b5e]">Atendimento personalizado</p>
                <p className="text-xs text-slate-500">Presença estratégica em cada etapa</p>
              </div>
              <div className="absolute -bottom-6 right-0 hidden rounded-2xl border border-[#d4a84f]/20 bg-[#0d2137] p-4 text-white shadow-xl sm:block">
                <p className="text-sm font-semibold">+ 20 anos de atuação</p>
                <p className="text-xs text-white/70">em soluções jurídicas assertivas</p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                <img src={IMG_HERO} alt="Advogado em reunião estratégica" className="h-[500px] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "20+", label: "anos de prática" },
              { value: "1.200+", label: "casos conduzidos" },
              { value: "98%", label: "satisfação em consultoria" },
              { value: "24/7", label: "resposta para urgências" },
            ].map((item, index) => (
              <div key={item.label} className={`reveal reveal-delay-${index + 1} rounded-3xl border border-[#e8dfcf] bg-white/80 p-6 shadow-sm`}>
                <p className="text-3xl font-semibold text-[#173b5e]">{item.value}</p>
                <p className="mt-2 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-[#173b5e]/8 px-4 py-2 text-sm font-semibold text-[#173b5e]">
              <Sparkles size={14} />
              Áreas de atuação
            </div>
            <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-semibold text-[#173b5e] sm:text-4xl">
              Uma abordagem jurídica pensada para proteger o que importa no presente e no futuro.
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-lg leading-8 text-slate-600">
              Cada caso é tratado com foco em estratégia, previsibilidade e comunicação clara para que a decisão seja tomada com confiança.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              {PRACTICE_AREAS.map((area, index) => (
                <div
                  key={area.title}
                  data-practice={index}
                  className={`reveal rounded-[1.5rem] border p-5 transition-all duration-300 ${activeArea === index ? "border-[#d4a84f] bg-[#173b5e] text-white shadow-lg" : "border-[#e8dfcf] bg-white/80 text-[#173b5e]"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className={`text-sm font-semibold ${activeArea === index ? "text-[#d4a84f]" : "text-[#173b5e]"}`}>0{index + 1}</p>
                      <h3 className="mt-1 text-xl font-semibold">{area.title}</h3>
                    </div>
                    <ChevronRight size={18} className={activeArea === index ? "rotate-90 text-[#d4a84f]" : "text-slate-400"} />
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-[#e8dfcf] bg-[#0d2137] p-8 text-white shadow-[0_30px_80px_rgba(13,33,55,0.22)] sm:p-10">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#d4a84f]">
                  <Gavel size={16} />
                  Destaque do momento
                </div>
                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{activePractice.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/75">{activePractice.description}</p>
                <div className="mt-6 space-y-3">
                  {activePractice.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <CheckCircle2 size={16} className="text-[#d4a84f]" />
                      <span className="text-sm text-white/85">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-[#f1e7d6]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="reveal overflow-hidden rounded-[2rem] border border-[#e8dfcf] shadow-lg">
              <img src={IMG_STUDIO} alt="Escritório jurídico moderno" className="h-[420px] w-full object-cover" />
            </div>
            <div className="reveal reveal-delay-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#173b5e]/8 px-4 py-2 text-sm font-semibold text-[#173b5e]">
                <Building2 size={14} />
                Sobre a atuação
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-[#173b5e] sm:text-4xl">
                Estratégia jurídica com visão de negócio e atenção humana.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Trabalhamos com uma abordagem direta e transparente, combinando conhecimento técnico com sensibilidade para cada contexto. O objetivo é ampliar a segurança do cliente e facilitar a tomada de decisão.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Acompanhamento próximo e objetivo",
                  "Processos bem estruturados",
                  "Comunicação sem ruído jurídico",
                  "Planejamento preventivo",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#e8dfcf] bg-white/80 px-4 py-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-[#d4a84f]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-[#173b5e]/8 px-4 py-2 text-sm font-semibold text-[#173b5e]">
              <Clock3 size={14} />
              Como trabalhamos
            </div>
            <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-semibold text-[#173b5e] sm:text-4xl">
              Um processo simples, claro e orientado à resolução.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROCESS.map((step, index) => (
              <div key={step.title} className={`reveal reveal-delay-${index + 1} rounded-[1.8rem] border border-[#e8dfcf] bg-white/90 p-7 shadow-sm`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173b5e] text-sm font-semibold text-[#d4a84f]">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#173b5e]">{step.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d2137] text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#d4a84f]">
              <Star size={14} />
              Depoimentos
            </div>
            <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-semibold sm:text-4xl">
              Clientes que valorizam clareza, prazo e presença.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <div key={item.name} className={`reveal reveal-delay-${index + 1} rounded-[1.8rem] border border-white/10 bg-white/8 p-7 backdrop-blur-sm`}>
                <div className="flex items-center gap-1 text-[#d4a84f]">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} size={16} fill="#d4a84f" stroke="none" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-white/80">“{item.text}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-white/60">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#173b5e]/8 px-4 py-2 text-sm font-semibold text-[#173b5e]">
                <Phone size={14} />
                Fale conosco
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-[#173b5e] sm:text-4xl">
                Um primeiro contato simples pode mudar a forma como você responde ao problema.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Entre em contato para marcar uma conversa inicial e entender a melhor estratégia para o seu caso.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Phone, label: "Telefone", value: "(11) 9 9999-9999", href: "tel:+5511999999999" },
                  { icon: Mail, label: "E-mail", value: "contato@advocaciaforte.com.br", href: "mailto:contato@advocaciaforte.com.br" },
                  { icon: MapPin, label: "Endereço", value: "Rua das Flores, 123 — São Paulo/SP", href: "#" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="flex items-start gap-3 rounded-2xl border border-[#e8dfcf] bg-white/80 p-4 transition hover:border-[#d4a84f] hover:shadow-sm">
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#173b5e]/8 text-[#173b5e]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#173b5e]">{item.label}</p>
                        <p className="text-sm text-slate-600">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="reveal reveal-delay-1 rounded-[2rem] border border-[#e8dfcf] bg-white p-8 shadow-sm sm:p-10">
              {formSent ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#173b5e]/10 text-[#173b5e]">
                    <CheckCircle2 size={32} className="text-[#173b5e]" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#173b5e]">Mensagem enviada</h3>
                  <p className="mt-3 max-w-sm text-slate-600">Retornaremos com uma resposta objetiva no menor tempo possível.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-600">Nome</label>
                      <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-2xl border border-[#e8dfcf] bg-[#f7f2e8] px-4 py-3 text-sm outline-none ring-0 focus:border-[#d4a84f]" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-600">Telefone</label>
                      <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full rounded-2xl border border-[#e8dfcf] bg-[#f7f2e8] px-4 py-3 text-sm outline-none focus:border-[#d4a84f]" placeholder="(11) 99999-9999" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-600">E-mail</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-2xl border border-[#e8dfcf] bg-[#f7f2e8] px-4 py-3 text-sm outline-none focus:border-[#d4a84f]" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-600">Área de interesse</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full rounded-2xl border border-[#e8dfcf] bg-[#f7f2e8] px-4 py-3 text-sm outline-none focus:border-[#d4a84f]">
                      <option value="">Selecione</option>
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.title} value={area.title}>{area.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-600">Mensagem</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full resize-none rounded-2xl border border-[#e8dfcf] bg-[#f7f2e8] px-4 py-3 text-sm outline-none focus:border-[#d4a84f]" placeholder="Conte brevemente o que está acontecendo" />
                  </div>
                  <button type="submit" className="btn-press w-full rounded-2xl bg-[#173b5e] px-5 py-3.5 font-semibold text-white transition hover:bg-[#0d2137]">
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#173b5e] text-white">
        <div className="container flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a84f]">Pronto para conversar?</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Agende uma conversa inicial e receba orientação objetiva.</h2>
          </div>
          <button onClick={() => scrollToSection("#contato")} className="btn-press inline-flex items-center gap-2 rounded-full bg-[#d4a84f] px-6 py-3.5 font-semibold text-[#071521] transition hover:-translate-y-0.5">
            Solicitar contato
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <footer className="bg-[#071521] py-10 text-white/70">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Advocacia Forte</p>
            <p className="mt-2 text-sm">Estratégia jurídica para pessoas e empresas em movimento.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection("#inicio"); }} className="transition hover:text-white">Início</a>
            <a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection("#servicos"); }} className="transition hover:text-white">Serviços</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection("#sobre"); }} className="transition hover:text-white">Sobre</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection("#contato"); }} className="transition hover:text-white">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
