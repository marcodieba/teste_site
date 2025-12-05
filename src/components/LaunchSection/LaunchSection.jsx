import React from 'react';
import './LaunchSection.css';
import recentLaunchImage from '../../assets/images/recent-launch-image.jpg';
import { useLanguage } from '../../context/LanguageContext';

const LaunchSection = () => {
  const { t } = useLanguage();
  return (
    <section className="launch-section-container">
      <div className="launch-grid">
        <div className="launch-image-wrapper">
          <img src={recentLaunchImage} alt="Launch" className="launch-image" />
        </div>
        <div className="launch-text-content">
          <h3 className="launch-main-text">{t('launch.title')}</h3>
          <p className="launch-season">{t('launch.season')}</p>
          <p className="launch-season">{t('launch.season2')}</p>
          <p className="launch-author">{t('launch.author')}</p>
        </div>
      </div>
    </section>
  );
};
export default LaunchSection;