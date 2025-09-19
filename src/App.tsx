import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import HowItWorksSection from './sections/HowItWorksSection';
import MentoresStrip from './sections/MentoresStrip';
import ForWhoSection from './sections/ForWhoSection';
import IntroducingEco from './sections/IntroducingEco';
// REMOVIDO: EmotionalReportSection
// REMOVIDO: StressIndexSection
import PrinciplesSection from './sections/PrinciplesSection';
import CallToActionEco from './sections/CallToActionEco';
import Testimonials from './sections/Testimonials';

import ReflexaoPage from './pages/ReflexaoPage';

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <MentoresStrip />
        <ForWhoSection />
        <IntroducingEco />
        {/* REMOVIDO: <EmotionalReportSection /> */}
        {/* REMOVIDO: <StressIndexSection /> */}
        <PrinciplesSection />
        <CallToActionEco />
        <Testimonials />
      </main>
      <Footer />
    </Layout>
  );
};

const App: React.FC = () => {
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
