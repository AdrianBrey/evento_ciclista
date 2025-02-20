import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pago.css";


const precioPorEtapa = 50; // Precio por etapa seleccionada
const precioHotel = 100; // Precio adicional por alojamiento

const Pago = () => {
  const location = useLocation();
  const { participantes = [], hotel } = location.state || {};
  const [metodoPago, setMetodoPago] = useState("tarjeta");

  const calcularTotal = () => {
    let total = participantes.reduce((sum, p) => sum + p.etapasSeleccionadas.length * precioPorEtapa, 0);
    if (hotel) total += precioHotel;
    return total;
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
            {participantes.length > 0 ? (
              participantes.map((p, index) => (
                <div key={index} className="participante-detalle">
                  <div className="detalle-info">
                    <p><strong>{p.nombre}</strong> - {p.dni}</p>
                    <ul>
                      {p.etapasSeleccionadas.map((etapa, i) => (
                        <li key={i} className="detalle-etapa">
                          <span>{etapa}</span>
                          <span className="precio">{precioPorEtapa}€</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay participantes</p>
            )}
            <p className="detalle-hotel"><strong>Alojamiento:</strong> <span className="precio">{hotel ? `Sí - ${precioHotel}€` : "No"}</span></p>
          </div>
          <h3 className="detalle-total"><span>Total:</span> <span className="precio">{calcularTotal()}€</span></h3>
        </div>
        <div className="opciones-pago derecha">
          <h3>Selecciona el método de pago</h3>
          <div className="metodos-pago">
            <button className={metodoPago === "tarjeta" ? "activo" : ""} onClick={() => setMetodoPago("tarjeta")}>Tarjeta</button>
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