import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Proposta e Planejamento",
      text: "Após o entendimento completo das suas necessidades, enviaremos uma proposta detalhada com valores, cronograma e escopo do serviço, Assim que aprovada, iniciamos o trabalho no seu projeto.",
    },
    {
      image: ChooseMeals,
      title: "Execução e Entrega",
      text: "Mantemos você atualizado durante todo o processo. Você terá a oportunidade de revisar e sugerir ajustes antes da entrega final. No caso de tráfego pago, relatórios regulares serão fornecidos para que você acompanhe os resultados.",
    },
    {
      image: DeliveryMeals,
      title: "Suporte Pós-Entrega",
      text: "Após a conclusão do projeto, continuamos disponíveis para dúvidas ou ajustes adicionais, garantindo sua total satisfação.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso Trabalho</p>
        <h1 className="primary-heading">Como funciona</h1>
        <p className="primary-text">
          Preencha o formulário com suas informações e uma breve descrição do
          serviço desejado; ao clicar em "Enviar", você será redirecionado
          automaticamente para o WhatsApp com uma mensagem pré-formatada. A
          partir disso, conversamos diretamente com você para entender suas
          necessidades, enviar uma proposta personalizada e, após aprovação,
          iniciamos o projeto. Durante o processo, mantemos você atualizado,
          entregamos resultados conforme combinado e oferecemos suporte
          pós-entrega para garantir sua satisfação.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
