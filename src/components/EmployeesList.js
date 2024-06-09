import React from 'react';
import EmployeeItem from './EmployeeItem';
import './EmployeesList.css';

const employees = [
  {
    name: "Jan",
    surname: "Kowalski",
    position: "Software Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna.",
    photo: "https://via.placeholder.com/100"
  },
  {
    name: "Anna",
    surname: "Nowak",
    position: "Project Manager",
    description: "Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in.",
    photo: "https://via.placeholder.com/100"
  },
  // Add more employees as needed
];

const EmployeesList = () => {
  return (
    <section className="employees-section">
      <div className="container">
        <h2 className="text-employees roboto-bold">Nasi specjaliści</h2>
        <div className="employees-list">
          {employees.map((employee, index) => (
            <EmployeeItem
              key={index}
              name={employee.name}
              surname={employee.surname}
              position={employee.position}
              description={employee.description}
              photo={employee.photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeesList;