import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/footer";
import "../styles/layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
        <h1 className="header-title">Fisterra-Iasterketa Cicle</h1>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/inscripcion">Inscripción</Link></li>
            <li><Link to="/etapas">Etapas</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/acompanhantes">Acompañantes</Link></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;