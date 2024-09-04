import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Características Clave</h2>
        <div className="feature-item">
          <h3>Característica 1</h3>
          <p>Descripción de la característica 1.</p>
        </div>
        <div className="feature-item">
          <h3>Característica 2</h3>
          <p>Descripción de la característica 2.</p>
        </div>
        {/* Agrega más características aquí */}
      </div>
    </section>
  );
};

export default Features; // Asegúrate de que esta línea esté presente
