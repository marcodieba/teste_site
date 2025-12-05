// src/components/ECommerceSection/ECommerceSection.jsx

import React from 'react';
import './ECommerceSection.css';
import recentLaunchImage from '../../assets/images/recent-launch-image.jpg'; // <-- ADICIONADO

const ECommerceSection = () => {
  return (
    <section className="ecommerce-container">
      {/* --- PARTE 1: COMPRE ON-LINE (Conteúdo Existente) --- */}
      <hr className="ecommerce-divider" />

      <div className="ecommerce-content">
        <span className="ecommerce-tag">...</span>
        <h2 className="ecommerce-title">Entre Em Contato</h2>
        <p className="ecommerce-subtitle">
          Descubra o novo, escolha o autêntico e compre online com a CR
          Leather. Conheça abaixo nossas coleções e nossos lançamentos.
        </p>
        <a href="#" className="ecommerce-button">
          E-COMMERCE CR LEATHER
        </a>
      </div>

      {/* --- PARTE 2: LANÇAMENTO RECENTE (Novo Conteúdo) --- */}
      <div className="recent-launch-block"> {/* Novo wrapper para o layout de 2 colunas */}
        <div className="recent-launch-image-wrapper">
          <img
            src={recentLaunchImage}
            alt="Lançamento recente de moda em couro"
            className="recent-launch-image"
          />
        </div>

        <div className="recent-launch-text-content">
          <h3 className="launch-main-text">
            AQUI VAI IR ALGUM LANÇAMENTO RECENTE COM ALGUMA FOTO AO LADO
          </h3>
          <p className="launch-season">VERÃO 2027</p>
          <p className="launch-author">Head of Data</p> {/* Placeholder, pode mudar */}
        </div>
      </div>
      
    </section>
  );
};

export default ECommerceSection;