import React, { useState, useRef } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

// Custom Popup Modal Component
const PopupModal = ({ onClose }) => {
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
        <h2 style={{ marginBottom: "10px", color: "#27ae60" }}>Congratulations!</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          You are one step closer to having the perfect digital solution for your company! Our team of specialists is already preparing a personalized proposal just for you. We'll be in touch within 24 hours to elevate your digital presence to new heights.
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
          Close
        </button>
      </div>
    </div>
  );
};

const Home = () => {
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
            Turn your idea into an amazing digital solution. We can create everything you need.
          </h1>
          <p className="primary-text">
            We design and develop websites, systems, landing pages, institutional sites,
            digital marketing strategies (including Instagram management and paid traffic),
            and creative designs to elevate your brand. We provide customized digital services
            to create modern, responsive, and conversion-driven online experiences. Whether it's
            a website, system, landing page, or a comprehensive digital marketing strategy, we are
            here to bring your vision to life.
          </p>
          <button className="secondary-button" onClick={scrollToForm}>
            Request a Quote
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <form className="contact-form" ref={formRef} onSubmit={sendContact}>
            <p>Ready to Elevate Your Digital Presence?</p>
            <h2>Get a Custom Landing Page in Just 5 Days!</h2>
            <p>
              Fill in the fields below and our specialists will prepare and send you a FREE
              personalized digital services quote tailored to your needs.
            </p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="phone">Phone</label>
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
              <label htmlFor="message">Message</label>
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
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Home;
