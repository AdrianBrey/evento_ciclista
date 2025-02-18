import React from "react";
import "../styles/etapas.css";

const etapas = [
  { id: 1, start: "Fisterra", end: "Ferrol", distance: "157 km" },
  { id: 2, start: "Ferrol", end: "Ribadeo", distance: "135 km" },
  { id: 3, start: "Ribadeo", end: "Gijón", distance: "158 km" },
  { id: 4, start: "Gijón", end: "Santander", distance: "197 km" },
  { id: 5, start: "Santander", end: "San Sebastián", distance: "255 km" }
];

const Etapas = () => {
  return (
    <div className="etapas-container">
      <h2>Etapas de la Carrera</h2>
      <ul>
        {etapas.map((etapa) => (
          <li key={etapa.id}>
            <strong>Etapa {etapa.id}:</strong> {etapa.start} - {etapa.end} ({etapa.distance})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Etapas;