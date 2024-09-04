import React from 'react';
import './Modal.css'; // Asegúrate de crear este archivo para el estilo del modal

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Bienvenido</h2>
        <form className="modal-form">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
