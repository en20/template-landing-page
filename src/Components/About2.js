import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdBrowserUpdated, MdShoppingCart } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";

const About2 = () => {
  return (
    <div className="main-container">
      <h1 className="centralizado primary-heading-about">
        COMPREHENSIVE DIGITAL SOLUTIONS
      </h1>
      <p className="centralizado primary-text-about">
        Empower your business with vibrant and innovative digital services: 
  
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <MdBrowserUpdated className="icon" />
          <p>WEBSITES</p>
          <p>
            Modern, responsive websites tailored to your business goals.
          </p>
        </div>
        <div className="grid-item">
          <IoPhonePortraitOutline className="icon" />
          <p>CUSTOM SYSTEMS</p>
          <p>
            Custom system solutions designed to streamline operations and drive efficiency.
          </p>
        </div>
        <div className="grid-item">
          <TbWorldWww className="icon" />
          <p>LANDING PAGES</p>
          <p>
            High-converting landing pages built to capture and convert leads.
          </p>
        </div>
        <div className="grid-item">
          <MdEmail className="icon" />
          <p>INSTITUTIONAL SITES</p>
          <p>
            Professional sites that strengthen your brand identity and credibility.
          </p>
        </div>
        <div className="grid-item">
          <FcGoogle className="icon" />
          <p>DIGITAL MARKETING</p>
          <p>
            Innovative digital marketing strategies to boost your online presence.
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>INSTAGRAM MANAGEMENT</p>
          <p>
            Engage and grow your audience with tailored Instagram strategies.
          </p>
        </div>
        <div className="grid-item">
          <GiMoneyStack className="icon" />
          <p>PAID TRAFFIC</p>
          <p>
            Effective paid campaigns designed to maximize your ROI.
          </p>
        </div>
        <div className="grid-item">
          <CiFaceSmile className="icon" />
          <p>DESIGN</p>
          <p>
            Creative design solutions that bring your brand's vision to life.
          </p>
        </div>
        <div className="grid-item">
          <MdShoppingCart className="icon" />
          <p>E-COMMERCE</p>
          <p>
            Robust e-commerce solutions that drive online sales and customer engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
