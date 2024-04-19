import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ plan }) => {
  return (
    <article className="pricing_card">
      <header className="pricing_header">
        <div className="pricing_shape">
          <img src={plan.imgSrc} alt="" className="pricing_img" />
        </div>
        <h1 className="pricing_title">{plan.title}</h1>
        <h2 className="pricing_number">{plan.price}<span>/mo</span></h2>
      </header>
      <ul className="pricing_list">
        {plan.features.map((feature, index) => (
          <li key={index} className="pricing_item">
            <i className="ri-checkbox-circle-line"></i> {feature}
          </li>
        ))}
      </ul>
      <Link to='/' className="button button_flex pricing_button">
        {plan.buttonText} <i className="ri-arrow-right-line"></i>
      </Link>
    </article>
  );
};

export default PricingCard;
