import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Inscripcion from "../pages/inscripcion";
import Etapas from "../pages/etapas";
import Contacto from "../pages/contacto";
import Pago from "../pages/pago";
import Normativa from "../pages/normativa";
import Voluntarios from "../pages/voluntarios";
import Acompañantes from "../pages/acompanhantes"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inscripcion" element={<Inscripcion />} />
        <Route path="etapas" element={<Etapas />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="pago" element={<Pago />} />
        <Route path="normativa" element={<Normativa />} />
        <Route path="voluntarios" element={<Voluntarios/>}/>
        <Route path="acompanhantes" element={<Acompañantes/>}/>
      </Route>
    </Routes>
  );
};

export default AppRouter;