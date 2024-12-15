import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/menu/Home";
import About from "./components/menu/About";
import Projects from "./components/menu/Projects";
import Contact from "./components/menu/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar /> {/* Barra de navegación */}
        <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
