import React from "react";

const projects = [
  { title: "Proyecto 1", description: "Descripción del proyecto 1", link: "#" },
  { title: "Proyecto 2", description: "Descripción del proyecto 2", link: "#" },
];

function Projects() {
  return (
    <div>
      <h1>Mis Proyectos</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
