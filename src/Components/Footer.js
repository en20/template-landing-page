import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1>SOLTECH</h1>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>{t('footer.links.quality')}</span>
          <span>{t('footer.links.help')}</span>
          <span>{t('footer.links.share')}</span>
          <span>{t('footer.links.careers')}</span>
          <span>{t('footer.links.testimonials')}</span>
          <span>{t('footer.links.work')}</span>
        </div>
        <div className="footer-section-columns">
          <span>+5585999020518</span>
          <span>soltech@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>{t('footer.legal.terms')}</span>
          <span>{t('footer.legal.privacy')}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
