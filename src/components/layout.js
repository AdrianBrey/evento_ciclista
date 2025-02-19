// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import "../styles/layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
        <h1 class="header-title">Fisterra-Iasterketa Cicle</h1>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/inscripcion">Inscripción</a></li>
            <li><a href="/etapas">Etapas</a></li>
            <li><a href="/contacto">Contacto</a></li>
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