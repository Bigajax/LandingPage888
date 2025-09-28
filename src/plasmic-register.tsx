// src/plasmic-register.tsx
import { registerComponent } from "@plasmicapp/host";

// 1) Importe TODAS as seções que você quer expor no Plasmic
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ForWhoSection from "./sections/ForWhoSection";
import IntroducingEco from "./sections/IntroducingEco";
import EmotionalReportSection from "./sections/EmotionalReportSection";
import MentoresStrip from "./sections/MentoresStrip";
import PrinciplesSection from "./sections/PrinciplesSection";
import CallToActionEco from "./sections/CallToActionEco";
import Testimonials from "./sections/Testimonials";

// 2) Registre cada componente (sem vírgulas sobrando, sem parênteses faltando)
function registerAll() {
  registerComponent(HeroSection, { name: "HeroSection", props: {} });
  registerComponent(HowItWorksSection, { name: "HowItWorksSection", props: {} });
  registerComponent(ForWhoSection, { name: "ForWhoSection", props: {} });
  registerComponent(IntroducingEco, { name: "IntroducingEco", props: {} });
  registerComponent(EmotionalReportSection, { name: "EmotionalReportSection", props: {} });
  registerComponent(MentoresStrip, { name: "MentoresStrip", props: {} });
  registerComponent(PrinciplesSection, { name: "PrinciplesSection", props: {} });
  registerComponent(CallToActionEco, { name: "CallToActionEco", props: {} });
  registerComponent(Testimonials, { name: "Testimonials", props: {} });
}

// executa o registro ao importar este arquivo (side-effect)
registerAll();

// garante que este arquivo é tratado como módulo (evita alguns erros do TS)
export {};
