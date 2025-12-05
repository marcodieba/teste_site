import React from 'react';
import './CtaOnlineSection.css';
import { useLanguage } from '../../context/LanguageContext';

const CtaOnlineSection = () => {
  const { t } = useLanguage();
  return (
    <section className="cta-online-container">
      <hr className="cta-online-divider" />
      <div className="cta-online-content">
        <span className="cta-online-tag">{t('ctaOnline.tag')}</span>
        <h2 className="cta-online-title">{t('ctaOnline.title')}</h2>
        <p className="cta-online-subtitle">{t('ctaOnline.subtitle')}</p>
        <a href="#" className="cta-online-button">{t('ctaOnline.button')}</a>
      </div>
    </section>
  );
};
export default CtaOnlineSection;