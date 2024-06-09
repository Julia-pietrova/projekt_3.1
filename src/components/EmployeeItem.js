import React from 'react';
import './EmployeeItem.css';

const EmployeeItem = ({ name, surname, position, description, photo }) => {
  return (
    <div className="employee">
      <img className="employee-photo" src={photo} alt={`${name} ${surname}`} />
      <div className="employee-info">
        <h3 className="roboto-bold employee-name">{name} {surname}</h3>
        <p className="employee-position">{position}</p>
        <p className="employee-description">{description}</p>
      </div>
    </div>
  );
};

export default EmployeeItem;