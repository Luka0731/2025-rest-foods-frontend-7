import React from "react";

const AboutUsCard: React.FC = () => {
  return (
    <div className="about-card">
      <h2 className="about-card__title">About Us</h2>
      <p className="about-card__text_1">
        At Rest Foods, every dish is a tribute to traditional Thai cooking —
        from the spicy depth of our curries to the fragrant simplicity of
        jasmine rice and fresh herbs. Our chefs use only the freshest local
        ingredients combined with imported Thai spices to bring you an
        unforgettable culinary journey.
        <br />
        Whether you're craving the rich comfort of Pad Thai, the fiery zest of
        Tom Yum soup, or a sweet Mango Sticky Rice to finish your meal, we offer
        something for everyone — always made with love and precision.
      </p>
      <p className="about-card__text_2">
        Join us and experience Thailand's warmth, hospitality, and flavor — one
        plate at a time.
      </p>
    </div>
  );
};

export default AboutUsCard;
