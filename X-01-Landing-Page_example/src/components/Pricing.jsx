import React, { useState } from 'react';
import './Pricing.css';
import BuyModal from './BuyModal';

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan('');
  };

  return (
    <section className="pricing">
      <div className="container">
        <h2>Planes y Precios</h2>
        <div className="pricing-plan">
          <h3>Plan Básico</h3>
          <p>$10/mes</p>
          <ul>
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
          </ul>
          <button onClick={() => openModal('Plan Básico')}>Suscribirse</button>
        </div>
        <div className="pricing-plan">
          <h3>Plan Premium</h3>
          <p>$30/mes</p>
          <ul>
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
            <li>Característica 4</li>
          </ul>
          <button onClick={() => openModal('Plan Premium')}>Suscribirse</button>
        </div>
      </div>
      <BuyModal isOpen={isModalOpen} onClose={closeModal} plan={selectedPlan} />
    </section>
  );
};

export default Pricing;
