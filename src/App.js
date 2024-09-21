// src/App.js
import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';
import './styles.css'; // Importing CSS for styling

const App = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'General Checkup', description: 'A basic health checkup.', price: 50 },
    { id: 2, name: 'Blood Test', description: 'Comprehensive blood test.', price: 30 }
  ]);

  // Add a new service
  const addService = (service) => {
    setServices([...services, { id: Date.now(), ...service }]);
  };

  // Delete a service
  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  // Edit service functionality
  const editService = (id) => {
    const name = prompt('Enter new name');
    const description = prompt('Enter new description');
    const price = prompt('Enter new price');
    
    setServices(
      services.map(service => 
        service.id === id 
          ? { ...service, name, description, price } 
          : service
      )
    );
  };

  return (
    <div className="App">
      <h1>Healthcare Services Manager</h1>
      <AddServiceForm onAdd={addService} />
      <ServiceList services={services} onDelete={deleteService} onEdit={editService} />
    </div>
  );
};

export default App;
