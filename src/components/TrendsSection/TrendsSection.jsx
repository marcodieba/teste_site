import React from 'react';
import './TrendsSection.css';
import trendsImage from '../../assets/images/trends-texture-image.jpg';
import { useLanguage } from '../../context/LanguageContext';

const TrendsSection = () => {
  const { t } = useLanguage();
  return (
    <section className="trends-section-container">
      <hr className="trends-divider" />
      <div className="trends-text-content">
        <div className="trends-icon"></div>
        <h3 className="trends-title">{t('benefits.items.sustain.title')}</h3>
        {/* <p className="trends-text">{t('benefits.items.sustain.title')}</p> */}
        <p className="trends-text">{t('benefits.items.sustain.text1')}</p>
      </div>
      {/* <div className="benefit-item">
          <div className="benefit-icon">🎧</div>
          <h3 className="benefit-subtitle">{t('benefits.items.sustain.title')}</h3>
          <p className="benefit-text">{t('benefits.items.sustain.text1')}</p>
        </div> */}
      <div className="trends-image-wrapper">
        <img src={trendsImage} alt="Texture" className="trends-image" />
      </div>
    </section>
  );
};
export default TrendsSection;