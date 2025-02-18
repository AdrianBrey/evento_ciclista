import React from "react";
import "../styles/contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>Si tienes alguna pregunta sobre el evento, no dudes en ponerte en contacto con nosotros.</p>
      <ul>
        <li><strong>Email:</strong> info@fisterra-iasterketa.com</li>
        <li><strong>Teléfono:</strong> +34 123 456 789</li>
        <li><strong>Dirección:</strong> Av. del Deporte, 45, San Sebastián</li>
      </ul>
    </div>
  );
};

export default Contacto;