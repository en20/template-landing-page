import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Proposal and Planning",
      text: "After fully understanding your needs, we will send a detailed proposal with values, schedule, and scope of the service. Once approved, we will begin working on your project.",
    },
    {
      image: ChooseMeals,
      title: "Execution and Delivery",
      text: "We keep you updated throughout the process. You will have the opportunity to review and suggest adjustments before the final delivery. In the case of paid traffic, regular reports will be provided so you can track the results.",
    },
    {
      image: DeliveryMeals,
      title: "Post-Delivery Support",
      text: "After the project is completed, we remain available for any questions or additional adjustments, ensuring your complete satisfaction.",
    },
  ];
  return (
    <div id="work" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our Work</p>
        <h1 className="primary-heading">How it works?</h1>
        <p className="primary-text">
          Fill out the form with your information and a brief description of the
          desired service; by clicking "Send," you will be automatically
          redirected to WhatsApp with a pre-formatted message. From there, we
          will communicate directly with you to understand your needs, send a
          personalized proposal, and, after approval, start the project.
          Throughout the process, we keep you updated, deliver results as
          agreed, and offer post-delivery support to ensure your satisfaction.
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
