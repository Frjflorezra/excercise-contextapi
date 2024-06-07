import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Contact } from "../components/Contact";
import { Articles } from "../components/Articles";
import { About } from "../components/About";
import { ErrorPage } from "../components/ErrorPage";

export const AppRouter = () => {
  return (
    <Router>
      {/* Menú de navegación */}
      <header className="header-nav">
        <nav>
          <div className="logo">
            <h2>LOGO</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/login">Identificate</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/article">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/about">Acerca de</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* Configurar las rutas */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/inicio" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/article" element={<Articles />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </section>
    </Router>
  );
};
