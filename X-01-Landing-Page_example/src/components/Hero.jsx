import React, { useState } from 'react';
import './Hero.css';
import Modal from './Modal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="hero">
      <div className="container">
        <h1>Transforma tu Gestión con Nuestro CRM Personalizado</h1>
        <p>
          Optimiza tu flujo de trabajo, organiza tu información y aumenta la
          productividad con nuestra solución CRM adaptable a tus necesidades.
        </p>
        <button className="cta-button" onClick={openModal}>Solicita una Demostración Gratis</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;
