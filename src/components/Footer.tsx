import React from "react";
import { MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

const utilityLinks = [
  { icon: MessageSquare, label: "Fale com a Eco", href: "#" },
  { icon: ShieldCheck, label: "Privacidade & termos", href: "#" },
  { icon: Sparkles, label: "Nosso propósito", href: "#" },
];

const socials = [
  { label: "Instagram", href: "#", d: "M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zm4.4-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" },
  { label: "LinkedIn", href: "#", d: "M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h3.96v12H3zM10.5 9H14v1.8h.06c.48-.9 1.64-1.86 3.38-1.86 3.62 0 4.29 2.38 4.29 5.47V21H17.7v-5.4c0-1.29-.03-2.95-1.8-2.95-1.81 0-2.09 1.41-2.09 2.86V21H10.5z" },
  { label: "YouTube", href: "#", d: "M10 7l6 4-6 4zM21.8 6.2a3 3 0 0 0-2.1-2.1C17.8 3.5 12 3.5 12 3.5s-5.8 0-7.7.6a3 3 0 0 0-2.1 2.1C1.5 8.1 1.5 12 1.5 12s0 3.9.7 5.8a3 3 0 0 0 2.1 2.1c1.9.6 7.7.6 7.7.6s5.8 0 7.7-.6a3 3 0 0 0 2.1-2.1c.6-1.9.6-5.8.6-5.8s0-3.9-.6-5.8z" },
];

const columns = [
  { title: "Produto", items: ["Versão beta", "Funcionalidades", "Roadmap", "Preços"] },
  { title: "Suporte", items: ["Central de ajuda", "Contato", "Guia rápido", "Tutoriais"] },
  { title: "Empresa", items: ["Sobre", "Blog", "Carreiras", "Imprensa"] },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-[#F9FAFB] px-6 pb-12 pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl rounded-full bg-[radial-gradient(60%_80%_at_50%_0%,rgba(148,163,184,0.18),transparent_72%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {utilityLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="glass glass-hover inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-[#6B7280]"
            >
              <Icon size={16} className="text-[#3B82F6]" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/80 shadow-[0_8px_32px_rgba(15,23,42,0.08)]">
                <span className="text-[18px] font-semibold tracking-tight text-[#3B82F6]">E</span>
              </span>
              <span className="text-2xl font-semibold tracking-tight text-[#111827]">eco</span>
            </div>
            <p className="text-sm leading-relaxed text-[#6B7280]">
              Inteligência emocional que te devolve para dentro, com delicadeza e clareza em cada conversa.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-[#6B7280] shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition hover:text-[#111827]"
                >
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d={item.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Rodapé" className="flex-1">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
              {columns.map((col) => (
                <div key={col.title} className="space-y-3">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                    {col.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-[14px] font-medium text-[#4B5563] transition hover:text-[#111827]"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-start gap-4 border-t border-white/60 pt-6 text-[13px] text-[#6B7280] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Eco. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            {["Termos", "Privacidade", "Cookies"].map((item) => (
              <a key={item} href="#" className="transition hover:text-[#111827]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
