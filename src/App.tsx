// src/sections/App.tsx (ou src/App.tsx, conforme seu projeto)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import HowItWorksSection from './sections/HowItWorksSection';
import ForWhoSection from './sections/ForWhoSection';
import IntroducingEco from './sections/IntroducingEco';
import EmotionalReportSection from './sections/EmotionalReportSection'; // ✅ importa aqui
import MentoresStrip from './sections/MentoresStrip';
import PrinciplesSection from './sections/PrinciplesSection';
import CallToActionEco from './sections/CallToActionEco';
import Testimonials from './sections/Testimonials';

import ReflexaoPage from './pages/ReflexaoPage';
import useReveal from './hooks/useReveal';

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ForWhoSection />
        <IntroducingEco />

        {/* ✅ AGORA SIM: embaixo do “Conheça a Eco” */}
        <EmotionalReportSection />

        {/* Pode deixar o carrossel de mentores depois, se quiser */}
        <MentoresStrip />
        <PrinciplesSection />
        <CallToActionEco />
        <Testimonials />
      </main>
      <Footer />
    </Layout>
  );
};

const App: React.FC = () => {
  useReveal();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reflexao" element={<ReflexaoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
