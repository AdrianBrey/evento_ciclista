import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pago = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { participantes, hotel } = location.state || {};

  if (!participantes || participantes.length === 0) {
    console.log("No se recibieron datos de inscripción. Redirigiendo...");
    navigate("/inscripcion"); // Redirige si no hay datos
    return null;
  }

  return (
    <div>
      <h2>Resumen de Inscripción</h2>
      {participantes.map((p, index) => (
        <div key={index}>
          <h3>Participante {index + 1}</h3>
          <p>Nombre: {p.nombre}</p>
          <p>DNI: {p.dni}</p>
          <p>Etapas: {p.etapasSeleccionadas.join(", ")}</p>
        </div>
      ))}
      <p>Opción de hotel: {hotel ? "Sí" : "No"}</p>
      <button>Pagar</button>
    </div>
  );
};

export default Pago;