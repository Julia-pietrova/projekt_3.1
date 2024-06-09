import React from 'react';
import SpecialistItem from './SpecialistItem';
import specialists from '../data/specialists';
import './SpecialistsList.css';

const SpecialistsList = () => (
  <section className="services-section" id="specialisty">
    <div className="container">
      <h2 className="text-specialist roboto-bold">Nasi specjaliści</h2>
      {specialists.map((specialist, index) => (
        <SpecialistItem
          key={index}
          name={specialist.name}
          position={specialist.position}
          description={specialist.description}
          image={specialist.image}
        />
      ))}
    </div>
  </section>
);

export default SpecialistsList;