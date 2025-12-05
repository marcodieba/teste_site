import React from 'react';
import './ContactBanner.css';
import contactBgImage from '../../assets/images/contact-background.jpg';
import { useLanguage } from '../../context/LanguageContext';

const ContactBanner = () => {
  const { t } = useLanguage();
  const bannerStyle = { backgroundImage: `url(${contactBgImage})` };

  return (
    <section className="contact-banner-container" style={bannerStyle}>
      <div className="contact-banner-overlay"></div>
      <div className="contact-banner-content">
        <h2 className="contact-banner-title">{t('contactBanner.title')}</h2>
        <a href="#" className="contact-banner-button">{t('contactBanner.button')}</a>
      </div>
    </section>
  );
};
export default ContactBanner;