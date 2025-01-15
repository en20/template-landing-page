import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/rb_2149565903.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">What do we do?</p>
        <h1 className="primary-heading">
          It has never been easier to have a successful website.
        </h1>
        <p className="primary-text">
          We create responsive, fast, and visually appealing websites tailored
          to your business needs. We also develop custom systems for automation,
          management, or any specific requirements of your company. We help you
          have a professional website, custom-made and ideal for promoting small
          and medium-sized businesses online.
        </p>
        <p className="primary-text">
          Did you know that to have a successful website, you need: domain
          registration, secure and fast hosting, efficient SEO techniques, an
          SSL security certificate, a lightweight, fast, beautiful, modern, and
          responsive page, reliable emails, an easy-to-use CMS system,
          professional images, persuasive texts, and knowledge of digital
          marketing strategies? Don’t worry, we take care of all of that—just
          enjoy the results!
        </p>
        <p className="primary-text"></p>
        <div className="about-buttons-container"></div>
      </div>
    </div>
  );
};

export default About;
