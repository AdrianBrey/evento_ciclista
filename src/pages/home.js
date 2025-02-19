import React from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "../components/countdown";
import "../styles/home.css";


const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
       navigate("/inscripcion");
  };

  return (
    <div className="home-container">
      <header className="hero">
        <h1>Fisterra-Iasterketa Cicle</h1>
        <p>
          Vive la emoción de una carrera ciclista épica de 5 etapas desde Fisterra
          hasta San Sebastián. Un desafío para los amantes del ciclismo.
        </p>
        <Countdown />
        <button onClick={handleSubmit} className="cta-button">¡Inscríbete Ahora!</button>
        
      </header>     
    </div>
  );
};

export default Home;