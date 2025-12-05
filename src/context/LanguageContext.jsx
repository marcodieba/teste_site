// src/context/LanguageContext.jsx

import React, { createContext, useState, useContext } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('pt');

  // Nova função: Permite definir um idioma específico
  const changeLanguage = (languageCode) => {
    setLang(languageCode);
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang];
    if (!current) current = translations['pt'];
    
    for (let key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  // Exportamos 'changeLanguage' em vez de 'toggleLanguage'
  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);