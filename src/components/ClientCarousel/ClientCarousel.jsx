import React from 'react';
import './ClientCarousel.css';
import { useLanguage } from '../../context/LanguageContext';

const ClientCarousel = () => {
  const { t } = useLanguage();
  const logos = ['Big Croco NY', 'Mini Croco NY', 'Camurça', 'Camurça vegetalizada', 'Fractalli', 'Floater Dual','Cabra Glove','Tie-Dye'
                  ,'Camurçina', 'Alligator', 'Napa Glove', 'Snake Onda', 'Mini Anaconda', 'Pakderme', 'Camurça Croco', 'Floral', 'Estonado', 
                  'Impressão digital','Vestuário'
  ];

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