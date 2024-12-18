import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/icon11.png";

function Navbar() {
  const navbarRef = useRef(null);

  const handleDocumentClick = (event) => {
    // Cierra el menú si se hace clic fuera del menú desplegable
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      const toggler = document.querySelector(".navbar-toggler");
      const menu = document.querySelector("#navbarNav");
      if (menu && menu.classList.contains("show")) {
        toggler.click(); // Simula un clic para cerrar el menú
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar" ref={navbarRef}>
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
