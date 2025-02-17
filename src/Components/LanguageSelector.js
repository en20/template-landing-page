import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';
import brFlag from '../Assets/brasil.jpg';
import usFlag from '../Assets/usa.png';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('userLanguage', lng);
  };

  const getCurrentFlagSrc = () => {
    return i18n.language === 'pt' ? brFlag : usFlag;
  };

  if (isMobile) {
    return (
      <div className="language-selector">
        <div className="select-container">
          <div className="current-flag">
            <img 
              src={getCurrentFlagSrc()} 
              alt={i18n.language === 'pt' ? 'PT/BR' : 'EN/US'} 
              className="flag-icon"
            />
            <span className="arrow">▼</span>
          </div>
          <select 
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-select"
          >
            <option value="pt">
              PT/BR
            </option>
            <option value="en">
              EN/US
            </option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="language-selector">
      <div className="flag-container">
        <button 
          className={`flag-button ${i18n.language === 'pt' ? 'active' : ''}`}
          onClick={() => changeLanguage('pt')}
          aria-label="Português"
        >
          <div className="flag">
            <img src={brFlag} alt="Português" className="flag-img" />
            <span className="tooltip">Português</span>
          </div>
        </button>

        <button 
          className={`flag-button ${i18n.language === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
          aria-label="English"
        >
          <div className="flag">
            <img src={usFlag} alt="English" className="flag-img" />
            <span className="tooltip">English</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector; 