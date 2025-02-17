import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="testimonial" className="testimonial-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">Look at what our clients are saying:</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Working with the soltech team was an amazing experience. From the
          start, I was impressed by their attention to detail and dedication to
          turning our vision into reality. The website turned out flawless, not
          only in terms of design but also in functionality and performance. The
          team was extremely professional and attentive throughout the process,
          always ready to listen to our needs and offer creative solutions. I
          highly recommend soltech to anyone looking for excellence and
          innovation. We are very satisfied with the final result!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
