import React from 'react';
import aboutImg from '../assets/images/quienessomos_1.png';
import '../styles/sections.css';

const About = () => {
  return (
    <section id="quienes-somos" className="about-section">
      <div className="container">
        <h2>Quiénes somos</h2>
        <p className="section-subtitle">Nuestra historia y propósito</p>
        
        <div className="about-grid">
          <div className="about-image" data-aos="fade-right">
            <img 
              src={aboutImg} 
              alt="Equipo de profesionales de FUNGLORIA trabajando con la comunidad" 
            />
          </div>
          
          <div className="about-text" data-aos="fade-left">
            <p>
              Fundación La Gloria Salvando Vidas (FUNGLORIA U.S.) nace de la vocación de servicio de un grupo de profesionales del área de la salud, oriundos y residentes del municipio de La Unión, Sucre.
            </p>
            <p>
              Nuestra creación surge ante la preocupación por la salud física y emocional de las personas, así como por el impacto de los factores externos en el bienestar integral, tanto individual como comunitario.
            </p>
            <div className="about-highlight">
              Trabajamos con una profunda vocación de servicio, dedicados a la salud integral de las personas, sus familias y comunidades.
            </div>
            <p>
              Desde nuestra fundación, hemos desarrollado diversas campañas de prevención en salud, abordando temas vitales como la salud oral, prevención del cáncer de mama y salud mental. Destacamos nuestro trabajo en la prevención del suicidio y la relación entre el bienestar emocional y la tenencia responsable de animales.
            </p>
            <p>
              Contamos con un equipo interdisciplinario conformado por profesionales de las ciencias de la salud, sociales, humanas, ambientales y administrativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
