import React from "react";
import "../styles/acompanhantes.css";
import ferrol from "../assets/images/acompanhantes/ferrol.jpeg";
import ribadeo from "../assets/images/acompanhantes/ribadeo.jpeg";
import santander from "../assets/images/acompanhantes/santander.jpeg";
import sebastian from "../assets/images/acompanhantes/sebastian.jpeg";
import xixon from "../assets/images/acompanhantes/xixon.jpeg";
import karts from "../assets/images/acompanhantes/karts.jpeg";
import colchoneta from "../assets/images/acompanhantes/colchoneta.jpeg";
import constitucion from "../assets/images/acompanhantes/constitucion.jpeg"

const locations = [
  { 
    city: "Ferrol", 
    bar: "Café Bar Avanti", 
    location: "Plaza de Armas",
    description: "Café Bar Avanti ofrecerá refrescos, agua, cerveza y otros productos a los asistentes durante todo el post-evento.",
    imgSrc: ferrol
  },
  { 
    city: "Ribadeo", 
    bar: "Café Pub Cortello", 
    location: "Plaza del Concello",
    description: "Café Pub Cortello contará con un espacio exclusivo para el evento donde todos los participantes podrán disfrutar de sus servicios.",
    imgSrc: ribadeo
  },
  { 
    city: "Xixón", 
    bar: "Cafetería & Sports Bar La Regence", 
    location: "Parque del Tren de la Libertad",
    description: "La Regence es un bar muy ligado al deporte. Tendrán una barra exclusiva para el evento en el recinto.",
    imgSrc: santander
  },
  { 
    city: "Santander", 
    bar: "La Braña Beer & Food", 
    location: "Plaza del Ayuntamiento",
    description: "La Braña Beer & Food ofrecerá su servicio exclusivamente en el recinto del evento.",
    imgSrc: sebastian
  },
  { 
    city: "San Sebastián", 
    bar: "Bar Paco Bueno", 
    location: "Plaza de la Constitución",
    description: "Bar Paco Bueno abastecerá a los participantes durante la fiesta de fin de evento en San Sebastián.",
    imgSrc: xixon
  },
];

const Acompanantes = () => {
  return (
    <div className="acompanantes-contenedor">
      <div className="acompanantes-info">
        <h2>Programa de Acompañantes</h2>
        {locations.map(({ city, bar, location, description, imgSrc }, index) => (
          <div key={index} className="location-item">
            <img src={imgSrc} alt={`${city} image`} />
            <div>
              <p>
                <span>{city}</span>: {bar} estará en {location}.
              </p>
              <p>{description}</p>
            </div>
          </div>
        ))}

        <div className="minieventos">
          <h3>Minieventos</h3>
          
          <p>Actividades con karts a pedales, triciclos y bicicletas para los más pequeños, y bicicletas para los más grandes.</p>
            <p></p>
            <img src={karts}></img>
            <p>Inflables para los niños.</p>
            <img src={colchoneta}></img>
          
        </div>

        <div className="gran-minievento">
          <h3>Gran Minievento en San Sebastián</h3>
          <img src={constitucion}></img>
          <p>
            Carrera contrarreloj aprovechando el circuito de los Karts, entrega de premios, y una fiesta de la espuma. 
            La fiesta será animada por un DJ desde las 18:00 hasta las 20:00, momento en que finalizará el evento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acompanantes;
