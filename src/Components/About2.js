import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdBrowserUpdated, MdShoppingCart } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const About2 = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <MdBrowserUpdated className="icon" />,
      key: "websites"
    },
    {
      icon: <IoPhonePortraitOutline className="icon" />,
      key: "systems"
    },
    {
      icon: <TbWorldWww className="icon" />,
      key: "landingPages"
    },
    {
      icon: <MdEmail className="icon" />,
      key: "institutional"
    },
    {
      icon: <FcGoogle className="icon" />,
      key: "marketing"
    },
    {
      icon: <SlSocialInstagram className="icon" />,
      key: "instagram"
    },
    {
      icon: <GiMoneyStack className="icon" />,
      key: "traffic"
    },
    {
      icon: <CiFaceSmile className="icon" />,
      key: "design"
    },
    {
      icon: <MdShoppingCart className="icon" />,
      key: "ecommerce"
    }
  ];

  return (
    <div className="main-container">
      <h1 className="centralizado primary-heading-about">
        {t('services.title')}
      </h1>
      <p className="centralizado primary-text-about">
        {t('services.subtitle')}
      </p>
      <div className="grid-container">
        {services.map((service) => (
          <div className="grid-item" key={service.key}>
            {service.icon}
            <p>{t(`services.items.${service.key}.title`)}</p>
            <p>{t(`services.items.${service.key}.description`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About2;
