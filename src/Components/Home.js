import React, { useState, useRef } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

// Custom Popup Modal Component
const PopupModal = ({ onClose, title, message, closeText }) => {
  return (
    <div
      className="popup-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="popup-content"
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "450px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "10px", color: "#27ae60" }}>{title}</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          {message}
        </p>
        <button
          onClick={onClose}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#27ae60",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {closeText}
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const formRef = useRef(null); // Ref for the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to send form data to Discord via webhook
  async function sendContact(ev) {
    ev.preventDefault();

    const { name, email, phone, message } = formData;

    const webhookBody = {
      embeds: [
        {
          title: "Contact Form Submitted",
          fields: [
            { name: "Name", value: name || "Not provided", inline: true },
            { name: "Email", value: email || "Not provided", inline: true },
            { name: "Phone", value: phone || "Not provided", inline: true },
            { name: "Message", value: message || "Not provided" },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const webhookUrl =
      "https://discord.com/api/webhooks/1340416726202060881/q_gpK9oeqHG2jxw1iCX0An977Yt7Fpnnbxkhfj_xA35ZwfsXSZ5q4ek8A1Os6bO0owTS";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookBody),
      });
      if (response.ok) {
        setShowPopup(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("There was an error sending the message.");
      }
    } catch (error) {
      console.error("Error sending contact:", error);
    }
  }

  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            {t('home.mainHeading')}
          </h1>
          <p className="primary-text">
            {t('home.description')}
          </p>
          <button className="secondary-button" onClick={scrollToForm}>
            {t('home.requestQuote')}
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <form className="contact-form" ref={formRef} onSubmit={sendContact}>
            <p>{t('home.form.title')}</p>
            <h2>{t('home.form.subtitle')}</h2>
            <p>
              {t('home.form.description')}
            </p>
            <div className="form-group">
              <label htmlFor="name">{t('home.form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('home.form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('home.form.phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('home.form.message')}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group-buttons">
              <button type="submit">{t('home.form.send')}</button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <PopupModal 
          onClose={() => setShowPopup(false)} 
          title={t('home.successPopup.title')}
          message={t('home.successPopup.message')}
          closeText={t('home.successPopup.close')}
        />
      )}
    </div>
  );
};

export default Home;
