// src/pages/Pago.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pago.css";

const preciosEtapa = 25;
const precioSeguro = 25;
const precioMerch = 75;

const preciosHotel = {
  "Ferrol": 60,
  "Ribadeo": 60,
  "Gijón": 70,
  "Santander": 70,
};

const Pago = () => { 
  const location = useLocation();
  const { participantes } = location.state || { participantes: [] };
  const [metodoPago, setMetodoPago] = useState("paypal");

  const calcularTotal = () => {
    return participantes.reduce((total, participante) => {
      const costoEtapas = participante.etapasSeleccionadas.length * preciosEtapa;
      const costoSeguro = participante.federado ? 0 : participante.etapasSeleccionadas.length * precioSeguro;
      const costoMerch = participante.merch ? precioMerch : 0; // Cambié la lógica para mostrar el precio correcto
      const costoHoteles = Object.entries(participante.hotelesSeleccionados)
        .filter(([_, seleccionado]) => seleccionado)
        .reduce((sum, [etapa]) => sum + preciosHotel[etapa], 0);
      return total + costoEtapas + costoSeguro + costoHoteles + costoMerch;
    }, 0);
  };

  const handlePago = () => {
    alert(`Pago realizado con ${metodoPago}`);
  };

  return (
    <div className="pago-container">
      <h2>Resumen de Inscripción</h2>
      <div className="pago-contenido">
        <div className="resumen izquierda">
          <div className="desglose">      
            {participantes.map((participante, index) => (
              <div key={index} className="participante-resumen">
                <h3>{participante.nombre}</h3>
                <p>DNI: {participante.dni}</p>
                <p>Teléfono: {participante.telefono}</p>
                <p>Email: {participante.email}</p>
                <h4>Etapas seleccionadas:</h4>
                <ul>
                  {participante.etapasSeleccionadas.map((etapa, i) => (
                    <li key={i} className="detalle-etapa">
                      <span>{etapa}</span>
                      <span className="precio">{preciosEtapa}€</span>
                    </li>
                  ))}
                </ul>
                
            
                {!participante.federado && participante.etapasSeleccionadas.length > 0 && (
                  <>
                    <h4>Seguro obligatorio:</h4>
                    <ul>
                      {participante.etapasSeleccionadas.map((etapa, i) => (
                        <li key={i} className="detalle-seguro">
                          <span>{etapa} - Seguro</span>
                          <span className="precio">{precioSeguro}€</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
           
                {participante.merch && (
                  <>
                    <h4>Pack Mochila + Maillot:</h4>
                    <ul>
                      <li className="detalle-merch">
                        <span>Pack Mochila + Maillot</span>
                        <span className="precio">{precioMerch}€</span>
                      </li>
                    </ul>
                  </>
                )}
                
                {Object.entries(participante.hotelesSeleccionados).some(([etapa, seleccionado]) => seleccionado && etapa !== 'none') && (
                  <>
                    <h4>Hoteles seleccionados:</h4>
                    <ul>
                      {Object.entries(participante.hotelesSeleccionados)
                        .filter(([etapa, seleccionado]) => seleccionado && etapa !== 'none')
                        .map(([etapa], i) => (
                          <li className="detalle-hotel" key={i}>
                            <span>{etapa}</span>
                            <span className="precio">{preciosHotel[etapa]}€</span>
                          </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
          <h3 className="detalle-total"><span>Total:</span> <span className="precio">{calcularTotal()}€</span></h3>
        </div>
        <div className="opciones-pago derecha">
          <h3>Selecciona el método de pago</h3>
          <div className="metodos-pago">
            <button className={metodoPago === "bizum" ? "activo" : ""} onClick={() => setMetodoPago("bizum")}>Bizum</button>
            <button className={metodoPago === "paypal" ? "activo" : ""} onClick={() => setMetodoPago("paypal")}>PayPal</button>
          </div>
          <button className="boton-pagar" onClick={handlePago}>Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Pago;
