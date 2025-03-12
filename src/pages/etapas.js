import React from "react";
import "../styles/etapas.css";

import etapa1 from "../assets/images/etapas/etapa1.jpeg"
import etapa2 from "../assets/images/etapas/etapa2.jpeg"
import etapa3 from "../assets/images/etapas/etapa3.jpeg"
import etapa4 from "../assets/images/etapas/etapa4.jpeg"
import etapa5 from "../assets/images/etapas/etapa5.jpeg"

const etapas = [
  { id: 1, start: "Fisterra", end: "Ferrol", distance: "157 km", img: etapa1},
  { id: 2, start: "Ferrol", end: "Ribadeo", distance: "135 km", img: etapa2},
  { id: 3, start: "Ribadeo", end: "Gijón", distance: "158 km", img: etapa3},
  { id: 4, start: "Gijón", end: "Santander", distance: "197 km", img: etapa4},
  { id: 5, start: "Santander", end: "San Sebastián", distance: "255 km", img: etapa5}
];

const Etapas = () => {
  return (
    <div className="etapas-container">
      <h1>Etapas de la Carrera</h1>
      <ul>
        {etapas.map((etapa) => (
          <li key={etapa.id}>
            <h3><strong>Etapa {etapa.id}:</strong> </h3>
            <p>{etapa.start} - {etapa.end} ({etapa.distance})</p>          
            <img src={etapa.img}/> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Etapas;


