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
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            alt="Spring Boot"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg"
            alt="Power BI"
          />
        </div>
      </div>

      {/* Proyectos */}
      <div className="projects-section">
        <h2>Proyectos Creados</h2>
        <div className="project">
          <h3>Proyecto 1</h3>
          <button>Conocer más sobre mis proyectos</button>
        </div>
        <div className="project">
          <h3>Proyecto 2</h3>
          <button>Conocer más sobre mis proyectos</button>
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
