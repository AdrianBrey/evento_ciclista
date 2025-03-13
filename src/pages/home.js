import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "../components/countdown";
import cartel from "../assets/images/cartel/cartel.jpeg";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [modalAbierto, setModalAbierto] = useState(false);

  // Función para abrir el modal
  const abrirModal = () => {
    setModalAbierto(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const handleSubmit = () => {
    navigate("/inscripcion");
  };

  const normativa = () => {
    navigate("/normativa");
  };

  return (
    <div className="home-container">
      <div className="hero-title">
        <h1>Fisterra-Iasterketa Cicle</h1>
      </div>
      <header className="hero">
        <div className="hero-content">
          <p>
            Vive la emoción de una carrera ciclista épica de 5 etapas desde Fisterra
            hasta San Sebastián. Un desafío para los amantes del ciclismo.
          </p>
          <Countdown />
          <div className="buttons-container">
            <button onClick={handleSubmit} className="cta-button">
              ¡Inscríbete Ahora!
            </button>
            <button onClick={normativa} className="cta-button secondary">
              ¡Revisa la normativa del evento!
            </button>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="hero-image" onClick={abrirModal}>
          <img src={cartel} alt="Cartel del evento" />
        </div>
      </header>

      {/* Modal que se activa al hacer clic en la imagen */}
      {modalAbierto && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={cerrarModal}>&times;</span>
            <img 
              src={cartel} 
              alt="Cartel del evento en grande" 
              className="modal-imagen" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
