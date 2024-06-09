import React from 'react';
import './SpecialistItem.css';

const SpecialistItem = ({ name, position, description, image }) => (
  <div className="service">
    <img className="photo" src={image} loading="lazy" alt={name} />
    <div className="service-info">
      <h3 className="roboto-bold text-spec">{name} [{position}]</h3>
      <p className="text-description">{description}</p>
    </div>
  </div>
);

export default SpecialistItem;