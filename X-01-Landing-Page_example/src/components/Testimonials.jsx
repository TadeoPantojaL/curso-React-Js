import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial">
          <p>"Excelente servicio, muy recomendable!"</p>
          <p>- Juan Pérez</p>
        </div>
        <div className="testimonial">
          <p>"Una experiencia maravillosa, sin duda volveré."</p>
          <p>- Ana Gómez</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; // Asegúrate de que esta línea esté presente
