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
        <p className="primary-subheading">O que fazemos?</p>
        <h1 className="primary-heading">
          Nunca foi tão fácil ter um site de sucesso.
        </h1>
        <p className="primary-text">
          Criamos sites responsivos, rápidos e visualmente atraentes, adaptados
          às necessidades do seu negócio. Também desenvolvemos sistemas
          personalizados para automação, gerenciamento ou qualquer necessidade
          específica da sua empresa. Te ajudamos a ter um site profissional,
          feito sob medida e ideal para divulgar pequenas e médias empresas na
          internet.
        </p>
        <p className="primary-text">
          Você sabia que para ter um site de sucesso você precisa ter: registro
          de domínio, hospedagem segura e rápida, técnicas eficientes de SEO,
          certificado de segurança SSL, uma página leve, rápida, bonita, moderna
          e responsiva, e-mails confiáveis, sistema CMS simples de usar, imagens
          profissionais, textos persuasivos, além de conhecimento em estratégias
          de marketing digital? Fique tranquilo, cuidamos disso tudo, você só
          curte o resultado!
        </p>
        <p className="primary-text"></p>
        <div className="about-buttons-container"></div>
      </div>
    </div>
  );
};

export default About;
