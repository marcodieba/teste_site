// src/App.jsx

import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ClientCarousel from './components/ClientCarousel/ClientCarousel';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import TrendsSection from './components/TrendsSection/TrendsSection';
import CtaOnlineSection from './components/CtaOnlineSection/CtaOnlineSection';
import LaunchSection from './components/LaunchSection/LaunchSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import PillarsSection from './components/PillarsSection/PillarsSection';
import QuoteBanner from './components/QuoteBanner/QuoteBanner';
import ContactBanner from './components/ContactBanner/ContactBanner';
import Footer from './components/Footer/Footer';

// Imagens
import ecoSealImage from './assets/images/eco-seal.png';

const MainContent = () => {
  const { t } = useLanguage(); 

  return (
    <div className="site-container">
      <Header />
      
      {/* O Hero geralmente é o topo, não precisa de ID específico a menos que tenha link 'Home' */}
      <Hero />
      
      <ClientCarousel />
      
      {/* Link: #sobre (Sobre nós) */}
      <section id="sobre">
        <BenefitsSection />   
      </section>

      {/* Link: #news (Newsletter / Novidades / Tendências) */}
      <section id="news">
        {/* <TrendsSection />
        <PillarsSection />
              */}
              <LaunchSection /> 
      </section>

      {/* Link: #compre (Compre On-line) */}
      <section id="compre">
        <CtaOnlineSection />  
      </section>

          
      
      {/* <FeatureSection
        title={t('eco.title')} 
        text={t('eco.text')}   
        image={ecoSealImage}
        imagePosition="left"
      /> */}
      
       
      
      {/* Link: #contato (Contato) */}
      {/* <section id="contato"> */}
        {/* <PillarsSection /> */}
        {/* <QuoteBanner /> */}
        {/* <ContactBanner /> */}
      {/* </section> */}

      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;