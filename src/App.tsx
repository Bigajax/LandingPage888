// src/App.tsx
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; // 👈 importa aqui

// ⚠️ side-effect: registra os Code Components (crie src/plasmic-register.tsx)
import "./plasmic-register";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Sections
import EcoHeroSection from "./sections/EcoHeroSection";
import MultiPlatformSection from "./sections/MultiPlatformSection";
import DesignScienceSection from "./sections/DesignScienceSection";
import EvolutionMemoriesSection from "./sections/EvolutionMemoriesSection";
import RespirationReflectionSection from "./sections/RespirationReflectionSection";
import DataScienceSection from "./sections/DataScienceSection";
import PrivacySection from "./sections/PrivacySection";
import FinalCTASection from "./sections/FinalCTASection";

// Pages
import ReflexaoPage from "./pages/ReflexaoPage";

// Plasmic preview + host
import PlasmicPage from "./PlasmicPage";
import PlasmicHost from "./components/PlasmicHost";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

const LandingPage: React.FC = () => (
  <>
    <Header />
    <main id="content" className="min-h-screen bg-white">
      <EcoHeroSection />
      <MultiPlatformSection />
      <DesignScienceSection />
      <EvolutionMemoriesSection />
      <RespirationReflectionSection />
      <DataScienceSection />
      <PrivacySection />
      <FinalCTASection />
    </main>
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="p-8 text-center text-zinc-500">Carregando…</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reflexao" element={<ReflexaoPage />} />
          <Route path="/plasmic" element={<PlasmicPage />} />
          <Route path="/plasmic-host" element={<PlasmicHost />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen grid place-items-center">
                <div className="text-center">
                  <h1 className="text-3xl font-semibold text-zinc-900">Página não encontrada</h1>
                  <p className="mt-2 text-zinc-600">O link pode ter mudado ou expirado.</p>
                  <a href="/" className="mt-6 inline-block rounded-full bg-zinc-900 text-white px-5 py-3">
                    Voltar para início
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </Suspense>

      {/* 👇 adiciona o Analytics no fim, para rastrear todas as páginas */}
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
