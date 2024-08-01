import React from 'react';
import './Card.css';

function Card({ name, description, link, icon }) {
  return (
    <a href={link} className="card" target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={`${name} icon`} className="card-icon" />
      <h2 className="card-title">{name}</h2>
      <p className="card-description">{description}</p>
    </a>
  );
}

export default Card;
