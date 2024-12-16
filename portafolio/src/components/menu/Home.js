import React, { useState, useEffect } from "react";
import "../../css/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // Speed of typing

  useEffect(() => {
    const phrases = [
      "Desarrollador Backend",
      "Entusiasta de la Tecnología",
      "Apasionado por la Innovación",
      "Listo para Nuevos Retos",
    ];

    const handleTyping = () => {
      const currentPhrase = phrases[currentIndex];

      if (isDeleting) {
        // Delete text
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50); // Speed of deletion
      } else {
        // Type text
        setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
        setTypingSpeed(100); // Speed of typing
      }

      // If the text is fully typed, wait and then start deleting
      if (!isDeleting && displayedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      }

      // If the text is fully deleted, move to the next phrase
      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length); // Loop through phrases
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, typingSpeed, currentIndex]);

  return (
    <div className="home">
      <div className="welcome-section">
        <h1>¡Bienvenido a mi Portafolio!</h1>
        <p className="typing-text">{displayedText}<span className="cursor">|</span></p>
        <div className="button-group">
          <button onClick={() => navigate("/about")}>Sobre Mí</button>
          <button onClick={() => navigate("/projects")}>Proyectos</button>
          <button onClick={() => navigate("/contact")}>Contacto</button>
        </div>
        <p className="creative-text">
          Transformando ideas en soluciones. <span className="highlight">Innovación al alcance de tus manos.</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
