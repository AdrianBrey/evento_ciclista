import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inscripcion.css";

const etapasDisponibles = [
  "Fisterra - Ferrol",
  "Ferrol - Ribadeo",
  "Ribadeo - Gijón",
  "Gijón - Santander",
  "Santander - San Sebastián"
];

const Inscripcion = () => {
  const navigate = useNavigate();
  const [numParticipantes, setNumParticipantes] = useState(1);
  const [hotel, setHotel] = useState(false);
  const [participantes, setParticipantes] = useState(
    Array.from({ length: numParticipantes }, () => ({
      nombre: "", dni: "", direccion: "", email: "", telefono: "", etapasSeleccionadas: []
    }))
  );

  const handleChange = (index, e) => {
    const updatedParticipantes = [...participantes];
    updatedParticipantes[index][e.target.name] = e.target.value;
    setParticipantes(updatedParticipantes);
  };

  const handleEtapaChange = (index, etapa) => {
    const updatedParticipantes = [...participantes];
    const etapas = updatedParticipantes[index].etapasSeleccionadas;
    if (etapas.includes(etapa)) {
      updatedParticipantes[index].etapasSeleccionadas = etapas.filter(e => e !== etapa);
    } else {
      updatedParticipantes[index].etapasSeleccionadas.push(etapa);
    }
    setParticipantes(updatedParticipantes);
  };

  const handleNumParticipantesChange = (e) => {
    const newNum = Number(e.target.value);
    setNumParticipantes(newNum);
    setParticipantes(Array.from({ length: newNum }, (_, i) => participantes[i] || {
      nombre: "", dni: "", direccion: "", email: "", telefono: "", etapasSeleccionadas: []
    }));
  };

  const handleSubmit = () => {
    if (participantes.some(p => !p.nombre || !p.dni || p.etapasSeleccionadas.length === 0)) {
      alert("Completa todos los datos antes de continuar.");
      return;
    }
    console.log("Navegando a pago con datos:", { participantes, hotel }); // Depuración
    navigate("/pago", { state: { participantes, hotel } });
  };
  
  return (
    <div className="inscripcion-container">
      <h2>Formulario de Inscripción</h2>
      <label>
        Número de participantes:
        <select value={numParticipantes} onChange={handleNumParticipantesChange}>
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>
      {participantes.map((participante, index) => (
        <div key={index} className="participante-form">
          <h3>Participante {index + 1}</h3>
          <label>Nombre: <input type="text" name="nombre" value={participante.nombre} onChange={(e) => handleChange(index, e)} /></label>
          <label>DNI: <input type="text" name="dni" value={participante.dni} onChange={(e) => handleChange(index, e)} /></label>
          <label>Dirección: <input type="text" name="direccion" value={participante.direccion} onChange={(e) => handleChange(index, e)} /></label>
          <label>Email: <input type="email" name="email" value={participante.email} onChange={(e) => handleChange(index, e)} /></label>
          <label>Teléfono: <input type="tel" name="telefono" value={participante.telefono} onChange={(e) => handleChange(index, e)} /></label>
          <div>
            <h4>Selecciona las etapas a participar:</h4>
            {etapasDisponibles.map((etapa, i) => (
              <label key={i}>
                <input 
                  type="checkbox" 
                  checked={participante.etapasSeleccionadas.includes(etapa)} 
                  onChange={() => handleEtapaChange(index, etapa)} 
                />
                {etapa}
              </label>
            ))}
          </div>
        </div>
      ))}
      <label>
        <input type="checkbox" checked={hotel} onChange={() => setHotel(!hotel)} />
        ¿Deseas incluir alojamiento en hotel?
      </label>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default Inscripcion;