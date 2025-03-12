import React from "react";
import "../styles/footer.css";
import gadis from "../assets/images/logos/gadis.png";
import decathlon from "../assets/images/logos/decathlon.png"
import telefonica from "../assets/images/logos/telefonica.png"
import skoda from "../assets/images/logos/skoda.png"
import citroen from "../assets/images/logos/citroen.jpg"
import isb from "../assets/images/logos/isb.jpg"
import xunta from "../assets/images/logos/xunta.png"
import asturias from "../assets/images/logos/asturias.png"
import cantabria from "../assets/images/logos/cantabria.png"
import paisVasco from "../assets/images/logos/paisVasco.png"
import deportes from "../assets/images/logos/deportes.png"




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