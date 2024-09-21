// src/components/ServiceList.js
import React from 'react';

const ServiceList = ({ services, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Available Healthcare Services</h2>
      {services.length === 0 && <p>No services available.</p>}
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
            <button onClick={() => onEdit(service.id)}>Edit</button>
            <button onClick={() => onDelete(service.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
