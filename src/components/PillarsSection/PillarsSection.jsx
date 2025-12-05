import React from 'react';
import './PillarsSection.css';
import pillarsImage from '../../assets/images/pillars-image.png';
import { useLanguage } from '../../context/LanguageContext';

const PillarsSection = () => {
  const { t } = useLanguage();
  
  // Pegamos a lista do arquivo de tradução
  const pillarsList = t('pillars.items'); 

  return (
    <section id="sobre" className="pillars-container">
      <div className="pillars-text-content">
        <h2 className="pillars-title">{t('pillars.title')}</h2>
        <span className="pillars-tag">{t('pillars.tag')}</span>

        <div className="pillars-list">
          {/* Verifica se pillarsList é um array antes de fazer map */}
          {Array.isArray(pillarsList) && pillarsList.map((pillar, index) => (
            <div className="pillar-item" key={index}>
              <span className="pillar-number">{`0${index + 1}`}</span>
              <div className="pillar-text-wrapper">
                <h3 className="pillar-item-title">{pillar.title}:</h3>
                <p className="pillar-item-text">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pillars-image-wrapper">
        <img src={pillarsImage} alt="Pillars" className="pillars-image" />
      </div>
    </section>
  );
};
export default PillarsSection;