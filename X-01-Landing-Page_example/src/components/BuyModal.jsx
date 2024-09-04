import React from 'react';
import './BuyModal.css'; // Asegúrate de que este archivo esté actualizado

const planDetails = {
  'Plan Básico': {
    features: ['Característica 1', 'Característica 2', 'Característica 3'],
    imageUrl: 'https://thumbs.dreamstime.com/b/business-plan-diagram-chart-infographic-banner-icons-vector-has-mission-swot-competitor-market-research-human-resource-299189386.jpg' // Cambia esta URL por la imagen real
  },
  'Plan Premium': {
    features: ['Característica 1', 'Característica 2', 'Característica 3', 'Característica 4'],
    imageUrl: 'https://media.licdn.com/dms/image/C4D12AQGmjzsZj3gGHQ/article-cover_image-shrink_720_1280/0/1647895953264?e=2147483647&v=beta&t=aESiX8gUPHAgOB8FxUriZdKUafRcE_wFC2AGRzBI8_0' // Cambia esta URL por la imagen real
  }
};

const BuyModal = ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  const details = planDetails[plan] || {};

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Formulario de Compra</h2>
        <p>Este formulario es meramente demostrativo.</p>
        <h3>Resumen del Plan: {plan}</h3>
        
        {details.imageUrl && (
          <img src={details.imageUrl} alt={`Imagen del ${plan}`} className="plan-image" />
        )}

        <ul className="plan-features">
          {details.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <form className="modal-form">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />

          <label htmlFor="expiryDate">Fecha de Expiración:</label>
          <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/AA" required />

          <label htmlFor="cvv">Código de Seguridad:</label>
          <input type="text" id="cvv" name="cvv" required />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default BuyModal;
