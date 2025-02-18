// src/routes/AppRouter.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Etapas from "../pages/etapas";
import Inscripcion from "../pages/inscripcion";
import Contacto from "../pages/contacto";
import Layout from "../components/layout";
import Pago from "../pages/pago";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etapas" element={<Etapas />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pago" element={<Pago />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;