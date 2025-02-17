import React from "react";
import { useTranslation } from 'react-i18next';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const { t } = useTranslation();

  const workInfoData = [
    {
      image: PickMeals,
      key: "step1",
      title: t('work.steps.step1.title'),
      text: t('work.steps.step1.text'),
    },
    {
      image: ChooseMeals,
      key: "step2",
      title: t('work.steps.step2.title'),
      text: t('work.steps.step2.text'),
    },
    {
      image: DeliveryMeals,
      key: "step3",
      title: t('work.steps.step3.title'),
      text: t('work.steps.step3.text'),
    },
  ];

  return (
    <div id="work" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">{t('work.title')}</p>
        <h1 className="primary-heading">{t('work.heading')}</h1>
        <p className="primary-text">
          {t('work.description')}
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.key}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
