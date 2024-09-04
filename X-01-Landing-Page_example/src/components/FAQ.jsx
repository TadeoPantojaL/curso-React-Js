import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-item">
          <h3>¿Cómo funciona el CRM?</h3>
          <p>El CRM ayuda a gestionar las relaciones con los clientes a través de la organización y análisis de la información.</p>
        </div>
        <div className="faq-item">
          <h3>¿Qué incluye la demostración gratuita?</h3>
          <p>La demostración gratuita incluye una visión general completa de nuestras funcionalidades y cómo pueden beneficiar a tu negocio.</p>
        </div>
        {/* Agrega más preguntas y respuestas aquí */}
      </div>
    </section>
  );
};

export default FAQ; // Asegúrate de que esta línea esté presente
