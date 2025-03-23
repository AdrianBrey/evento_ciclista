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

const isValidDNI = (dni) => {
  const dniRegex = /^[0-9]{8}[A-Za-z]$/;
  return dniRegex.test(dni);
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const Inscripcion = () => {
  const navigate = useNavigate();
  const [numParticipantes, setNumParticipantes] = useState(1);
  const [participantes, setParticipantes] = useState(
    Array.from({ length: numParticipantes }, () => ({
      nombre: "", dni: "", direccion: "", email: "", telefono: "", 
      etapasSeleccionadas: [], hotelesSeleccionados: {}, federado: false, merch: false, tallaMerch: "",
      errors: { dni: "", email: "", nombre: "", etapas: "" } // Campos de error
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
      nombre: "", dni: "", direccion: "", email: "", telefono: "", etapasSeleccionadas: [], hotelesSeleccionados: {}, federado: false, merch: false, tallaMerch: "",
      errors: { dni: "", email: "", nombre: "", etapas: "" }
    }));
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const updatedParticipantes = [...participantes];
    
    // Validaciones
    updatedParticipantes.forEach((p, index) => {
      let errors = {};
      
      if (!p.nombre) {
        errors.nombre = "El nombre es obligatorio.";
        formIsValid = false;
      }
      
      if (!p.dni || !isValidDNI(p.dni)) {
        errors.dni = "El DNI debe ser válido.";
        formIsValid = false;
      }
      
      if (!isValidEmail(p.email)) {
        errors.email = "El correo debe ser válido.";
        formIsValid = false;
      }
      
      if (p.etapasSeleccionadas.length === 0) {
        errors.etapas = "Selecciona al menos una etapa.";
        formIsValid = false;
      }
      
      updatedParticipantes[index].errors = errors;
    });

    setParticipantes(updatedParticipantes);
    
    if (!formIsValid) {
      return; // Si algún campo es inválido, no enviamos el formulario
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
          <label>Nombre: 
            <input 
              type="text" 
              name="nombre" 
              value={participante.nombre} 
              onChange={(e) => handleChange(index, e)} 
            />
            {participante.errors.nombre && <span className="error">{participante.errors.nombre}</span>}
          </label>
          <label>DNI: 
            <input 
              type="text" 
              name="dni" 
              value={participante.dni} 
              onChange={(e) => handleChange(index, e)} 
            />
            {participante.errors.dni && <span className="error">{participante.errors.dni}</span>}
          </label>
          <label>Dirección: 
            <input 
              type="text" 
              name="direccion" 
              value={participante.direccion} 
              onChange={(e) => handleChange(index, e)} 
            />
          </label>
          <label>Email: 
            <input 
              type="email" 
              name="email" 
              value={participante.email} 
              onChange={(e) => handleChange(index, e)} 
            />
            {participante.errors.email && <span className="error">{participante.errors.email}</span>}
          </label>
          <label>Teléfono: 
            <input 
              type="tel" 
              name="telefono" 
              value={participante.telefono} 
              onChange={(e) => handleChange(index, e)} 
            />
          </label>
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
            {participante.errors.etapas && <span className="error">{participante.errors.etapas}</span>}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default Inscripcion;
