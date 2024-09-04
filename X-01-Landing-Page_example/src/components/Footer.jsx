import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="#privacy">Política de privacidad</a></li>
          <li><a href="#terms">Términos y condiciones</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer; // Asegúrate de que esta línea esté presente
