import React from "react";
import { Link } from "react-router-dom";

const CallToActionEco: React.FC = () => {
  return (
    <section
      id="convite"
      className="relative w-full overflow-visible isolation-isolate py-16 md:py-24 px-5 sm:px-8 md:px-12 mb-24 pb-[env(safe-area-inset-bottom)] flex justify-center"
    >
      <div className="relative max-w-5xl w-full">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[75vw] w-[75vw] max-w-[960px] -translate-x-1/2 rounded-full blur-[140px] opacity-60 bg-[radial-gradient(circle,#E4D7FF_0%,transparent_65%)]" />
          <div className="absolute -bottom-32 right-[-12%] h-[55vw] w-[55vw] rounded-full blur-[140px] opacity-45 bg-[radial-gradient(circle,#DFF1FF_0%,transparent_70%)]" />
        </div>

        <div
          className="relative overflow-visible rounded-3xl border border-black/5 bg-white/60 px-6 md:px-12 pt-12 pb-12 md:pb-16 text-center shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,#F4EFFF_0%,#FFFFFF_48%,#EFF6FF_100%)]" />

          <div className="relative mx-auto max-w-3xl md:max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0A0C18]">
              Descubra a{" "}
              <span className="bg-gradient-to-r from-[color:var(--violet-500)] to-[color:var(--violet-600)] bg-clip-text text-transparent">
                Eco
              </span>{" "}
              antes de todo mundo
            </h2>

            <p className="mt-4 text-lg md:text-xl text-[#6B7280]">
              Acesse gratuitamente a versão beta — uma jornada de autoconhecimento
              com IA, feita para quem quer se escutar com profundidade.
            </p>
          </div>

          <div className="relative mt-8 mb-4 flex justify-center">
            <svg
              className="h-5 w-5 text-[color:var(--violet-500)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="relative flex justify-center">
            <Link
              to="/reflexao"
              aria-label="Entrar no beta da Eco"
              className="relative inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(120deg,var(--violet-600),var(--indigo-600))] px-7 font-semibold text-white shadow-[0_20px_44px_rgba(var(--violet-600-rgb),0.3)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_26px_56px_rgba(var(--violet-600-rgb),0.34)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--violet-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Junte-se ao Beta
              <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
            </Link>
          </div>

          <p className="relative mt-4 text-[12.5px] sm:text-[13px] text-[#6E7284]">
            Beta gratuito · 7 min para testar · Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionEco;
