import React from "react";
import { SlSocialInstagram } from "react-icons/sl";

const About2 = () => {
  return (
    <div className="main-container">
      <h1 className="centralizado primary-heading-about">
        OS RECURSOS CERTOS PARA ALAVANCAR O SEU NEGÓCIO
      </h1>
      <p className="centralizado primary-text-about">
        Alinhamos a criação de um Site com estratégias de Marketing Digital para
        sua empresa ficar online e ter melhores resultados.
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>REDES SOCIAIS</p>
          <p>
            O conteúdo de seu site compartilhado e podendo ser visto por milhões
            de pessoas.
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>SUCESSO DO CLIENTE</p>
          <p>
            Você será atendido por profissionais experientes que lhe darão dicas
            de estratégias para alcançar o seu sucesso online.
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>RECEBIMENTOS PELO SITE</p>
          <p>
            Você poderá receber pagamentos em seu site via cartão e boleto com
            os botões (Pagseguro, Paypal e Mercado Pago).
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>WHATSAPP E CHAT</p>
          <p>
            Você oferecerá atendimento de excelência para seus clientes e
            economizará o tempo de sua equipe.
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>E-MAIL PROFISSIONAL</p>
          <p>
            Profissionalismo nas suas comunicações, enviando e recebendo
            mensagens por um e-mail com sua marca. Exemplo: contato@suamarca.com.br
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>ENCONTRADO NO GOOGLE</p>
          <p>
            Através de SEO, você alcançará mais clientes com uma boa
            classificação nos resultados das buscas do Google e Bing.
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>ATUALIZAÇÃO SIMPLES</p>
          <p className="text-grid">
            Com o treinamento exclusivo que iremos dar em nosso sistema simples
            de usar, você mesmo poderá atualizar seu site sem necessitar de
            conhecimento técnico.
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>DOMÍNIO PERSONALIZADO</p>
          <p>
            Você transmitirá mais credibilidade aos seus clientes com um domínio
            personalizado. Exemplo: www.suamarca.com.br
          </p>
        </div>
        <div className="grid-item">
          <SlSocialInstagram className="icon" />
          <p>SITE RESPONSIVO</p>
          <p>
            Um site adaptável para computador, tablet e celular melhora a
            experiência do usuário, aumentando as interações.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
