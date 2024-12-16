import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/icon11.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        {/* Imagen antes del texto "Portafolio" */}
        <NavLink className="navbar-brand" to="/">
          <img src={icon} alt="Icono" className="navbar-icon" /> Riobo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-text text-white">Menú</span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} 
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} 
                to="/about"
              >
                Sobre Mí
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} 
                to="/projects"
              >
                Proyectos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} 
                to="/contact"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
