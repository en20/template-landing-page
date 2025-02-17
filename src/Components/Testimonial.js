import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <div id="testimonial" className="testimonial-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">{t('testimonials.title')}</p>
        <h1 className="primary-heading">{t('testimonials.subtitle')}</h1>
        <p className="primary-text">{t('testimonials.description')}</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>{t('testimonials.testimonial.text')}</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>{t('testimonials.testimonial.author')}</h2>
      </div>
    </div>
  );
};

export default Testimonial;
