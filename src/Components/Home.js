import React, { useState, useRef } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null); // Ref para o formulário

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsappSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. I am interested in hiring your digital services (websites, systems, landing pages, institutional websites, digital marketing strategies including Instagram management, paid traffic, design). My message: ${message}`;
    const whatsappURL = `https://wa.me/+558591124238?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent("Inquiry about Digital Services");
    const body = encodeURIComponent(
      `Hello,\n\nMy name is ${name}.\nMy email is ${email}.\nI am interested in your digital services. My message is:\n${message}\n\nThank you.`
    );
    const companyEmail = "soltechsolutionscs@gmail.com"; // Substitua pelo seu e-mail real
    const mailtoURL = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
    window.open(mailtoURL, "_blank");
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" }); // Rolagem suave até o formulário
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Turn your idea into an amazing digital solution. We can create everything you need. 
          </h1>
          <p className="primary-text">
            We design and develop websites, systems, landing pages, institutional sites,
            digital marketing strategies (including Instagram management and
            paid traffic), and creative designs to elevate your brand.
            We provide customized digital services to create modern, responsive,
            and conversion-driven online experiences. Whether it's a website,
            system, landing page or a comprehensive digital marketing strategy,
            we are here to bring your vision to life.
          </p>
          <button className="secondary-button" onClick={scrollToForm}>
            Request a Quote
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <form
            className="contact-form"
            ref={formRef} // A referência é associada aqui
          >
            <p>Ready to Elevate Your Digital Presence?</p>
            <h2 className="">Get a Custom Landing Page in Just 5 Days!</h2>
            <p>
              Fill in the fields below and our specialists will prepare and send
              you a FREE personalized digital services quote tailored to your
              needs.
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
              <button type="button" onClick={handleWhatsappSubmit}>
                Get a Free Quote on WhatsApp
              </button>
              <button type="button" onClick={handleEmailSubmit}>
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
