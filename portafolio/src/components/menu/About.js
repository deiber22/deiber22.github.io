import React from "react";
import profile from "../../img/perf.jpg";
import "../../css/About.css";

function About() {
  return (
    <div className="about-section">
      {/* Introducción Personal */}
      <div className="intro-section">
        <div className="about-image">
          <img src={profile} alt="Deiber Riobo" className="profile-picture" />
          <div className="intro-details">
            <h2>Deiber Riobo</h2>
            <h3>Ingeniero de Sistemas</h3>
          </div>
        </div>
        <div className="about-text">
          <h1>Sobre Mí</h1>
          <p>
            Hola, mi nombre es <strong>Deiber Riobo</strong>, apasionado por la{" "}
            <strong>tecnología</strong> e <strong>innovación</strong>. Me
            especializo como <strong>desarrollador backend</strong>, diseñando
            APIs que solucionen problemas.
          </p>
        </div>
      </div>

      {/* Habilidades */}
      <div className="skills-section">
        <h2>Mis Habilidades</h2>
        <div className="skills-logos">
          <div className="skill-item" style={{ "--logo-color": "#007396" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
            />
            <span>Java</span>
          </div>
          <div className="skill-item" style={{ "--logo-color": "#3776AB" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
            />
            <span>Python</span>
          </div>
          <div className="skill-item" style={{ "--logo-color": "#6DB33F" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="Spring Boot"
            />
            <span>Spring Boot</span>
          </div>
          <div className="skill-item" style={{ "--logo-color": "#61DBFB" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <span>React</span>
          </div>
          <div className="skill-item" style={{ "--logo-color": "#68A063" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
            <span>Node.js</span>
          </div>
          <div className="skill-item" style={{ "--logo-color": "#00758F" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
            />
            <span>MySQL</span>
          </div>
          <div className="skill-item" style={{ "--logo-color": "#F0DB4F" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <span>JavaScript</span>
          </div>
          <div className="skill-item" style={{ "--logo-color": "#4479A1" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              alt="SQL"
            />
            <span>SQL</span>
          </div>
          <div className="skill-item" style={{ "--logo-color": "#F2C811" }}>
            <img
              src="https://raw.githubusercontent.com/microsoft/PowerBI-Icons/24f1db8bdfab951c25db591772140d2f4ec5bc1e/SVG/Power-BI.svg"
              alt="Power BI"
            />
            <span>Power BI</span>
          </div>
        </div>
      </div>

      {/* Educación */}
      <div className="education-section">
        <h2>Educación</h2>
        <p>
          Actualmente estoy estudiando <strong>Ingeniería de Sistemas</strong>.
          Comencé en el año <strong>2021</strong> y continúo hasta la fecha
          actual.
        </p>
      </div>
    </div>
  );
}

export default About;
