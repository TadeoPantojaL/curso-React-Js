import React, { useState } from 'react';
import './CTA.css';
import Modal from './Modal';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="cta-final">
      <div className="container">
        <h2>Empieza a mejorar tu gestión hoy mismo</h2>
        <button className="cta-button" onClick={openModal}>Solicita una Demostración Gratis</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default CTA;
