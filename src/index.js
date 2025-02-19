import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRouter from "./routes/appRouter";
import "./styles/global.css"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <AppRouter />
  </HashRouter>
);
