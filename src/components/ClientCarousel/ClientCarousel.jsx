import React from 'react';
import './ClientCarousel.css';
import { useLanguage } from '../../context/LanguageContext';

const ClientCarousel = () => {
  const { t } = useLanguage();
  const logos = ['logoipsum', 'logoipsum', 'logoipsum', 'logoipsum', 'logoipsum', 'logoipsum'];

  return (
    <section className="client-section">
      <h2 className="client-title">{t('clients.title')}</h2>
      <div className="carousel-container">
        <div className="carousel-track">
          {logos.map((logo, index) => <div className="logo-item" key={`a-${index}`}>{logo}</div>)}
          {logos.map((logo, index) => <div className="logo-item" key={`b-${index}`}>{logo}</div>)}
        </div>
      </div>
      <hr className="section-divider" />
    </section>
  );
};
export default ClientCarousel;