// src/components/Header/Header.jsx

import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import heroCr from '../../assets/images/cr.png';

const Header = () => {
  const { t, changeLanguage, lang } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsSticky(true); else setIsSticky(false);
      if (window.scrollY > 150) setIsFloating(true); else setIsFloating(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `header-container ${isSticky ? 'header-sticky' : ''}`;

  const flagImages = {
    pt: "https://flagcdn.com/w40/br.png",
    en: "https://flagcdn.com/w40/us.png",
    es: "https://flagcdn.com/w40/es.png"
  };

  // *** NOVO: FUNÇÃO DE SCROLL MANUAL ***
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // Impede o comportamento padrão (pulo seco)
    
    const element = document.getElementById(targetId);
    if (element) {
      // Calcula a posição do elemento
      const headerOffset = 100; // Altura aproximada do seu header para dar um respiro
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Faz o scroll suave
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Componente interno para as bandeiras
  const FlagSelector = () => (
    <div className="flag-selector">
      <button onClick={() => changeLanguage('pt')} className={`flag-btn ${lang === 'pt' ? 'active' : ''}`} title="Português">
        <img src={flagImages.pt} alt="Brasil" />
      </button>
      <button onClick={() => changeLanguage('en')} className={`flag-btn ${lang === 'en' ? 'active' : ''}`} title="English">
        <img src={flagImages.en} alt="USA" />
      </button>
      <button onClick={() => changeLanguage('es')} className={`flag-btn ${lang === 'es' ? 'active' : ''}`} title="Español">
        <img src={flagImages.es} alt="España" />
      </button>
    </div>
  );

  return (
    <>
      <header className={headerClasses}>
        <div className="logo-text"><a href="/">
                    <img 
                    src={heroCr} 
                    alt="CR Leather" 
                    className="hero-cr-image" 
                  />
                  </a></div>
        
        <nav className="nav-links">
          {/* *** APLIQUE A FUNÇÃO onClick EM TODOS OS LINKS *** */}
          <a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')}>{t('header.about')}</a>
          <a href="#compre" onClick={(e) => handleLinkClick(e, 'compre')}>{t('header.buy')}</a>
          <a href="#news" onClick={(e) => handleLinkClick(e, 'news')}>{t('header.news')}</a>
          <a href="#contato" onClick={(e) => handleLinkClick(e, 'contato')}>{t('header.contact')}</a>
        </nav>

        <div className="header-actions">
          {/* <strong>{t('header.fone')}</strong> */}
          <FlagSelector />
          {/* Também no botão CTA */}
          <a href="https://api.whatsapp.com/send/?phone=%2B555191058556&text&type=phone_number&app_absent=0" className="cta-button" onClick={(e) => handleLinkClick(e, 'contato')}>{t('header.cta')}</a>
        </div>

        <button className="menu-toggle"><span></span><span></span><span></span></button>
      </header>

      {isFloating && (
        <nav className="floating-nav">
          {/* *** E AQUI TAMBÉM NO MENU FLUTUANTE *** */}
          <a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')}>{t('header.about')}</a>
          <a href="#compre" onClick={(e) => handleLinkClick(e, 'compre')}>{t('header.buy')}</a>
          <a href="#news" onClick={(e) => handleLinkClick(e, 'news')}>{t('header.news')}</a>
          <a href="#contato" onClick={(e) => handleLinkClick(e, 'contato')}>{t('header.contact')}</a>
          
          <div className="nav-separator">|</div>
          
          <FlagSelector />
        </nav>
      )}
    </>
  );
};

export default Header;