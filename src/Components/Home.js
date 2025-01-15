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
    const whatsappURL = `https://wa.me/+5585999020518?text=${encodeURIComponent(
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
            Transforme sua ideia em um site incrível. Criamos para você um site
            bonito e que gera resultados, com um excelente custo-benefício.
          </h1>
          <p className="primary-text">
            Oferecemos soluções personalizadas para criar sites modernos,
            funcionais e que realmente convertem. Seja para impulsionar seu
            negócio ou trazer sua ideia à vida, estamos prontos para entregar
            resultados que fazem a diferença.
          </p>
          <button className="secondary-button" onClick={scrollToForm}>
            Solicitar Orçamento
            <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            ref={formRef} // A referência é associada aqui
          >
            <h2>RECEBA UM ORÇAMENTO AGORA.</h2>
            <p>
              Preencha os campos abaixo, nossos especialistas irão preparar e
              lhe enviar GRATUITAMENTE um ORÇAMENTO personalizado para seu ramo
              de atuação e sua necessidade.
            </p>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
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
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Enviar para WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
