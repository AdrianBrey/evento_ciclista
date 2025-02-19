import React from "react";
import "../styles/footer.css";
import gadis from "../assets/images/gadis.png";
import decathlon from "../assets/images/decathlon.png"
import telefonica from "../assets/images/telefonica.png"
import skoda from "../assets/images/skoda.png"
import citroen from "../assets/images/citroen.jpg"
import isb from "../assets/images/isb.jpg"
import xunta from "../assets/images/xunta.png"
import asturias from "../assets/images/asturias.png"
import cantabria from "../assets/images/cantabria.png"
import paisVasco from "../assets/images/paisVasco.png"
import deportes from "../assets/images/deportes.png"




const patrocinadores = [
  { nombre: "Gadis", logo: gadis },
  { nombre: "Decathlon", logo: decathlon },
  { nombre: "Telefonica", logo: telefonica },
  { nombre: "Skoda", logo: skoda },
  { nombre: "Citroen", logo: citroen },
  { nombre: "ISB", logo:  isb},
  { nombre: "Xunta de Galicia", logo: xunta },
  { nombre: "Gobierno de Asturias", logo: asturias },
  { nombre: "Gobierno de Cantabria", logo: cantabria },
  { nombre: "Gobierno del País Vasco", logo: paisVasco },
  { nombre: "Ministerio de Deportes", logo: deportes }
];

const Footer = () => {
  return (
    <footer className="footer">
    
      <div className="patrocinadores-container">
        {patrocinadores.map((patrocinador, index) => (
          <div key={index} className="patrocinador">
            <img src={patrocinador.logo} alt={patrocinador.nombre} />
            <p>{patrocinador.nombre}</p>
          </div>
        ))}
      </div>
      <p>© 2025 Fisterra-Iasterketa Cicle. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;