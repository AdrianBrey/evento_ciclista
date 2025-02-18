// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <h1>Fisterra-Iasterketa Cicle</h1>
      </header>
      <div className="content-wrapper">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/etapas">Etapas</Link></li>
            <li><Link to="/inscripcion">Inscripción</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;