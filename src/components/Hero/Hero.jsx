// src/components/Hero/Hero.jsx

import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useLanguage } from '../../context/LanguageContext';

// 1. Importe a imagem base do monitor (a que você já usa)
import heroMonitorBase from '../../assets/images/hero-monitor-base.jpg'; // <-- Confirme o nome

import heroLogo from '../../assets/images/logo.png';
// 2. Importe as NOVAS imagens que vão passar dentro da tela
// (Certifique-se de que essas imagens existem na pasta)
import slide1 from '../../assets/images/hero-slide-1.png';
import slide2 from '../../assets/images/hero-slide-2.png';
import slide3 from '../../assets/images/hero-slide-3.png';

const Hero = () => {
  const { t } = useLanguage();
  
  // Estado para controlar o índice da imagem atual do carrossel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array com as imagens do carrossel
  const carouselImages = [slide1, slide2, slide3];

  // Efeito para trocar a imagem a cada 3 segundos (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Mude este valor para ajustar a velocidade

    // Limpa o intervalo quando o componente desmonta
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="hero-container">
      <div className="hero-text-content">
        <h1 className="hero-title">
          <img 
            src={heroLogo} 
            alt="Monitor CR Leather" 
            className="hero-logo-image" 
          />
          {/* {t('hero.title')} */}
          </h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
      </div>

      {/* Wrapper da Imagem */}
      <div className="hero-image-wrapper">
        
        {/* Este é o contêiner que segura tudo junto */}
        <div className="monitor-frame-container">
          
          {/* CAMADA 1: A imagem estática do monitor (Base) */}
          <img 
            src={heroMonitorBase} 
            alt="Monitor CR Leather" 
            className="monitor-base-image" 
          />

          {/* CAMADA 2: O Carrossel que fica POR CIMA da tela */}
          <div className="monitor-screen-carousel">
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Couro destaque ${index + 1}`}
                // Se o índice bater, adiciona a classe 'active' para mostrar a imagem
                className={`carousel-slide-image ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;