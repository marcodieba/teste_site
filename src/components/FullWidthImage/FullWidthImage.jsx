// src/components/FullWidthImage/FullWidthImage.jsx

import React from 'react';
import './FullWidthImage.css';
import textureImage from '../../assets/images/texture-image.jpg'; // <-- Confirme o nome

const FullWidthImage = () => {
  return (
    <section className="full-width-image-container">
      <img
        src={textureImage}
        alt="Textura de couro"
        className="full-width-image"
      />
    </section>
  );
};

export default FullWidthImage;