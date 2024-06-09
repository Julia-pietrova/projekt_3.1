import React from 'react';
import './OfferItem.css';

const OfferItem = ({ name, isNew }) => {
  return (
    <div className="item">
      {isNew && <span className="dot"></span>}
      <p className="text-item">{name}</p>
      {isNew && <p>(nowość)</p>}
    </div>
  );
};

export default OfferItem;