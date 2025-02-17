import React from "react";
import { useTranslation } from 'react-i18next';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/rb_2149565903.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">{t('about.subheading')}</p>
          <h1 className="primary-heading">
            {t('about.heading')}
          </h1>
          <p className="primary-text">
            {t('about.description1')}
          </p>
          <p className="primary-text">
            {t('about.description2')}
          </p>
          <div className="about-buttons-container"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
