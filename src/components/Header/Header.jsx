import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLanguage } from '../../context/LanguageContext';
import heroCr from '../../assets/images/cr.png';
import catalogoPdf from '../../assets/2026_CATALOGO_CR_LEATHER.pdf';

const Header = () => {
  const { t, changeLanguage, lang } = useLanguage();

  const [isSticky, setIsSticky] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
      setIsFloating(window.scrollY > 150);
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

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);

    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = 100;
    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const FlagSelector = () => (
    <div className="flag-selector">
      <button onClick={() => changeLanguage('pt')} className={`flag-btn ${lang === 'pt' ? 'active' : ''}`}>
        <img src={flagImages.pt} alt="Brasil" />
      </button>
      <button onClick={() => changeLanguage('en')} className={`flag-btn ${lang === 'en' ? 'active' : ''}`}>
        <img src={flagImages.en} alt="USA" />
      </button>
      <button onClick={() => changeLanguage('es')} className={`flag-btn ${lang === 'es' ? 'active' : ''}`}>
        <img src={flagImages.es} alt="España" />
      </button>
    </div>
  );

  return (
    <>
      <header className={headerClasses}>
        <div className="logo-text">
          <a href="/">
            <img src={heroCr} alt="CR Leather" className="hero-cr-image" />
          </a>
        </div>

        <nav
          style={{ marginLeft: '10%' }}
          className={`nav-links ${menuOpen ? 'open' : ''}`}
        >
          <a href="#colecoes" onClick={(e) => handleLinkClick(e, 'colecoes')}>{t('header.contact')}</a>
          <a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')}>{t('header.about')}</a>
          <a href="#news" onClick={(e) => handleLinkClick(e, 'news')}>{t('header.news')}</a>
          <a href="#compre" onClick={(e) => handleLinkClick(e, 'compre')}>{t('header.buy')}</a>

          <a href={catalogoPdf} download="2026 CATALOGO CR LEATHER.pdf">
            {t('header.catalog')}
          </a>
        </nav>

        <div className="header-actions">
          <FlagSelector />

          {/* <a
            href={catalogoPdf}
            download="2026 CATALOGO CR LEATHER.pdf"
            className="cta-button"
          >
            Baixar Catálago PDF
          </a> */}

          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send/?phone=%2B555191058556"
            className="cta-button"
          >
            {t('header.cta')}
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {isFloating && (
        <nav className="floating-nav desktop-only">
          <a href="#colecoes" onClick={(e) => handleLinkClick(e, 'colecoes')}>{t('header.contact')}</a>
          <a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')}>{t('header.about')}</a>
          <a href="#news" onClick={(e) => handleLinkClick(e, 'news')}>{t('header.news')}</a>
          <a href="#compre" onClick={(e) => handleLinkClick(e, 'compre')}>{t('header.buy')}</a>
          <a href={catalogoPdf} download="catalogo-cr-leather.pdf">{t('header.catalog')}</a>
          <div className="nav-separator">|</div>
          <FlagSelector />
        </nav>
      )}
    </>
  );
};

export default Header;