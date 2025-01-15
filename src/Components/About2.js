import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdBrowserUpdated } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
const About2 = () => {
  return (
    <div className="main-container">
      <h1 className="centralizado primary-heading-about">
        THE RIGHT RESOURCES TO BOOST YOUR BUSINESS!
      </h1>
      <p className="centralizado primary-text-about">
        We align website creation with digital marketing strategies to help your
        business go online and achieve better results.
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>SOCIAL MEDIA</p>
          <p>
            The content of your website shared and visible to millions of
            people.
          </p>
        </div>
        <div className="grid-item">
          <CiFaceSmile className="icon" />
          <p>CUSTOMER SUCCESS</p>
          <p>
            You will be attended by experienced professionals who will provide
            you with strategy tips to achieve your online success.
          </p>
        </div>
        <div className="grid-item">
          <GiMoneyStack className="icon" />
          <p>RECEIVING PAYMENTS THROUGH THE WEBSITE</p>
          <p>
            You can receive payments on your website via card and boleto with
            buttons (Pagseguro, PayPal, and Mercado Pago).
          </p>
        </div>
        <div className="grid-item">
          <FaWhatsapp className="icon" />
          <p>WHATSAPP AND CHAT</p>
          <p>
            You will provide excellent customer service and save your team's
            time.
          </p>
        </div>
        <div className="grid-item">
          <MdEmail className="icon" />
          <p>PROFESSIONAL E-MAIL</p>
          <p>
            Professionalism in your communications, sending and receiving
            messages through an email with your brand. Example:
            contact@yourbrand.com.br
          </p>
        </div>
        <div className="grid-item">
          <FcGoogle className="icon" />
          <p>BE FOUND ON GOOGLE</p>
          <p>
            Through SEO, you will reach more customers with a good ranking in
            Google and Bing search results.
          </p>
        </div>
        <div className="grid-item">
          <MdBrowserUpdated className="icon" />
          <p>SIMPLE UPDATE</p>
          <p className="text-grid">
            With the exclusive training we will provide on our easy-to-use
            system, you will be able to update your website yourself without
            needing technical knowledge.
          </p>
        </div>
        <div className="grid-item">
          <TbWorldWww  className="icon" />
          <p>CUSTOM DOMAIN</p>
          <p>
            You will convey more credibility to your customers with a custom
            domain. Example: www.yourbrand.com
          </p>
        </div>
        <div className="grid-item">
          <IoPhonePortraitOutline className="icon" />
          <p>RESPONSIVE WEBSITE</p>
          <p>
            A website adaptable for desktop, tablet, and mobile improves the
            user experience, increasing interactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
