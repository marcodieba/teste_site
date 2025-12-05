import React from 'react';
import './QuoteBanner.css';
import { useLanguage } from '../../context/LanguageContext';

const QuoteBanner = () => {
  const { t } = useLanguage();
  return (
    <section className="quote-banner-container">
      <h2 className="quote-banner-text">{t('quote.text')}</h2>
    </section>
  );
};
export default QuoteBanner;