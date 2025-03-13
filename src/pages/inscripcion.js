import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inscripcion.css";

const datosEtapas = [
  { etapa: "Fisterra - Ferrol", hotel: "Ferrol" },
  { etapa: "Ferrol - Ribadeo", hotel: "Ribadeo" },
  { etapa: "Ribadeo - Gijón", hotel: "Gijón" },
  { etapa: "Gijon-Santander", hotel: "Santander" },
  { etapa: "Santander - San Sebastián", hotel: "none" }
];

const preciosHotel = {
  "Ferrol": 60,
  "Ribadeo": 60,
  "Gijón": 70,
  "Santander": 70,
};

const Inscripcion = () => {
  const navigate = useNavigate();
  const [numParticipantes, setNumParticipantes] = useState(1);
  const [participantes, setParticipantes] = useState(
    Array.from({ length: numParticipantes }, () => ({
      nombre: "", dni: "", direccion: "", email: "", telefono: "", 
      etapasSeleccionadas: [], hotelesSeleccionados: {}, federado: false, merch: false, tallaMerch: ""
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
      delete updatedParticipantes[index].hotelesSeleccionados[etapa];
    } else {
      updatedParticipantes[index].etapasSeleccionadas.push(etapa);
      updatedParticipantes[index].hotelesSeleccionados[etapa] = false;
    }
    setParticipantes(updatedParticipantes);
  };

  const handleHotelChange = (index, etapa) => {
    const updatedParticipantes = [...participantes];
    updatedParticipantes[index].hotelesSeleccionados[etapa] = !updatedParticipantes[index].hotelesSeleccionados[etapa];
    setParticipantes(updatedParticipantes);
  };

  const handleMerchChange = (index) => {
    const updatedParticipantes = [...participantes];
    updatedParticipantes[index].merch = !updatedParticipantes[index].merch;
    // Reseteamos la talla cuando se desmarque la opción de merch
    if (!updatedParticipantes[index].merch) {
      updatedParticipantes[index].tallaMerch = "";
    }
    setParticipantes(updatedParticipantes);
  };

  const handleFederadoChange = (index) => {
    const updatedParticipantes = [...participantes];
    updatedParticipantes[index].federado = !updatedParticipantes[index].federado;
    setParticipantes(updatedParticipantes);
  };

  const handleNumParticipantesChange = (e) => {
    const newNum = Number(e.target.value);
    setNumParticipantes(newNum);
    setParticipantes(Array.from({ length: newNum }, (_, i) => participantes[i] || {
      nombre: "", dni: "", direccion: "", email: "", telefono: "", etapasSeleccionadas: [], hotelesSeleccionados: {}, federado: false, merch: false, tallaMerch: ""
    }));
  };

  const handleSubmit = () => {
    if (participantes.some(p => !p.nombre || !p.dni || p.etapasSeleccionadas.length === 0)) {
      alert("Completa todos los datos antes de continuar.");
      return;
    }
    console.log("Navegando a pago con datos:", { participantes }); // Depuración
    navigate("/pago", { state: { participantes } });
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
          <label>
            <input 
              type="checkbox" 
              checked={participante.federado} 
              onChange={() => handleFederadoChange(index)} 
            />
            ¿Está federado?
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={participante.merch} 
              onChange={() => handleMerchChange(index)} 
            />
            ¿Añadir pack mochila + maillot? - 75€
          </label>
          {participante.merch && (
            <div>
              <label>
                Talla de Maillot:
                <select
                  name="tallaMerch"
                  value={participante.tallaMerch}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="">Seleccionar talla</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </label>
            </div>
          )}
          <div>
            <h4>Selecciona las etapas a participar y si deseas hotel:</h4>
            {datosEtapas.map((zona, i) => (
              <div key={i} className="etapa-opcion">
                <label>
                  <input 
                    type="checkbox" 
                    checked={participante.etapasSeleccionadas.includes(zona.etapa)} 
                    onChange={() => handleEtapaChange(index, zona.etapa)} 
                  />
                  {zona.etapa} - 25€
                </label>
                {participante.etapasSeleccionadas.includes(zona.etapa) && zona.hotel !== "none" && (
                  <label>
                    <input 
                      type="checkbox" 
                      checked={participante.hotelesSeleccionados[zona.hotel]} 
                      onChange={() => handleHotelChange(index, zona.hotel)} 
                    />
                    Hotel ({preciosHotel[zona.hotel]}€)
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default Inscripcion;
