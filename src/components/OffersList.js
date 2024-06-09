import React from 'react';
import offers from '../data/offers';
import OfferItem from './OfferItem';
import './OffersList.css';

const OffersList = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h3 className="text-services">Czym zajmuje się nasza firma?</h3>
        <div className="items">
          {offers.map((offer) => (
            <OfferItem key={offer.id} name={offer.name} isNew={offer.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersList;