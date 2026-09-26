import React from 'react';
import heroImg from '../assets/images/hero.jpg';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Hero background" fetchPriority="high" loading="eager" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Fundación La Gloria <br />
            <span className="hero-highlight">Salvando Vidas</span>
          </h1>
          <p className="hero-subtitle">
            Promoviendo el bienestar emocional, físico y mental del individuo y sus familias. Fomentamos una cultura de comprensión, inclusión y esperanza, trabajando por la salud integral bajo el principio de "Una sola salud".
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="btn btn-primary">Conoce nuestra labor</a>
            <a href="#contacto" className="btn btn-hero-secondary">Contáctanos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
