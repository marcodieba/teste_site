import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-footer" />
        </div>

        <p style={{textAlign: 'center', fontSize: '1.0rem', color: '#5c5b5bff'}}>
            {t('footer.description')}
            <p style={{fontSize: '0.8rem', color: '#888'}}>
              {t('footer.rights')}
            </p>
        </p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/crleather.oficial?igsh=Z3NqZmJ5M3QwYjhn"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61584589740483&sk=about_details"><FaFacebookF /></a>
          <a href="https://api.whatsapp.com/send/?phone=%2B555191058556&text&type=phone_number&app_absent=0"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/company/cr-leather"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;