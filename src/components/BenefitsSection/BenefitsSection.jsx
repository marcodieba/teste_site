import React from 'react';
import './BenefitsSection.css';
import { useLanguage } from '../../context/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();
  return (
    <section className="benefits-container">
      <div className="benefits-header">
        {/* <span className="benefits-tag">{t('benefits.tag')}</span> */}
        <h2 className="benefits-title">{t('benefits.title')}</h2>
        {/* <p className="benefits-slogan">{t('benefits.slogan')}</p> */}
      </div>
      <div className="benefits-grid">
        <div className="benefit-item">
          <div className="benefit-icon"></div>
          <h3 className="benefit-subtitle">{t('benefits.items.about.title')}</h3>
          <p className="benefit-text">{t('benefits.items.about.text1')}</p>
          <p className="benefit-text">{t('benefits.items.about.text2')}</p>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon"></div>
          <h3 className="benefit-subtitle">{t('benefits.items.delivery.title')}</h3>
          <p className="benefit-text">{t('benefits.items.delivery.text1')}</p>
          <p className="benefit-text">{t('benefits.items.delivery.text2')}</p>
        </div>
        {/* <div className="benefit-item">
          <div className="benefit-icon">🎧</div>
          <h3 className="benefit-subtitle">{t('benefits.items.sustain.title')}</h3>
          <p className="benefit-text">{t('benefits.items.sustain.text1')}</p>
        </div> */}
        <div className="benefit-item">
          <div className="benefit-icon"></div>
          <h3 className="benefit-subtitle">{t('benefits.items.trends.title')}</h3>
          <p className="benefit-text">{t('benefits.items.trends.text1')}</p>
          <p className="benefit-text">{t('benefits.items.trends.text2')}</p>
        </div>
      </div>
    </section>
  );
};
export default BenefitsSection;