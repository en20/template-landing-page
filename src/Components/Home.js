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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email}. Gostaria de criar um site com vocês. Minha mensagem: ${message}`;
    const whatsappURL = `https://wa.me/+558591124238?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
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
            Turn your idea into an amazing website. We create a beautiful and
            results-driven site for you, at an affordable price.
          </h1>
          <p className="primary-text">
            We offer customized solutions to create modern, functional websites
            that truly convert. Whether to boost your business or bring your
            idea to life, we are ready to deliver results that make a
            difference.
          </p>
          <button className="secondary-button" onClick={scrollToForm}>
            Request a Budget
            <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            ref={formRef} // A referência é associada aqui
          >
            <h2>GET A BUDGET NOW</h2>
            <p>
              Fill in the fields below, and our specialists will prepare and
              send you a FREE personalized budget tailored to your industry and
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
            <button type="submit">Send to WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
