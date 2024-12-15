import React from "react";

const Footer = () => {
  return (
    <footer className="custom-footer text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Deiber Riobo. Todos los derechos reservados.</p>
      <div>
        <a href="https://www.linkedin.com/in/deiber-alejandro-riobo-tique-789262266/" className="text-info mx-2" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/deiber22" className="text-info mx-2" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
