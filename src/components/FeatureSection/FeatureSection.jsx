// src/components/FeatureSection/FeatureSection.jsx

import React from 'react';
import './FeatureSection.css';

/*
 * Este componente espera 'props' para funcionar:
 * - title: O título (ex: "Eco")
 * - text: O parágrafo de texto
 * - image: A imagem que vamos importar
 * - imagePosition: 'left' ou 'right' (para sabermos de que lado pôr a imagem)
 */
const FeatureSection = ({ title, text, image, imagePosition }) => {
  
  // Adiciona uma classe 'image-right' se a prop 'imagePosition' for 'right'
  const sectionClass = `feature-section-container ${
    imagePosition === 'right' ? 'image-right' : ''
  }`;

  return (
    <section className={sectionClass}>
      <div className="feature-image-wrapper">
        <img src={image} alt={title} className="feature-image" />
      </div>
      <div className="feature-content-wrapper">
        <h2 className="feature-title">{title}</h2>
        <p className="feature-text">{text}</p>
        {/* No design, parece ter um link "Saiba Mais" */}
        <a href="#" className="feature-link">
          Saiba Mais
        </a>
      </div>
    </section>
  );
};

export default FeatureSection;