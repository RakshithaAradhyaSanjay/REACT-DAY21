// src/components/PricingCard.js
import React from 'react';

const PricingCard = ({ title, price, features }) => {
    return (
        <div className="pricing-card">
            <h2>{title}</h2>
            <p className="price">{price}</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button>BUTTON</button>
        </div>
    );
};

export default PricingCard;
