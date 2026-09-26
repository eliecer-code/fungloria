import React from 'react';
import { Users, PawPrint, Sprout } from 'lucide-react';
import '../styles/sections.css';

const OneHealth = () => {
  return (
    <section id="one-health" className="one-health-section">
      <div className="container oh-container">
        <h2>Enfoque One Health</h2>
        <p className="section-subtitle">"Una sola salud"</p>
        
        <p className="oh-text">
          Integrando la salud humana, animal y ambiental como base de las intervenciones educativas. Este enfoque holístico resulta en un impacto positivo en la salud integral de la comunidad, mejorando su bienestar general.
        </p>
        
        <div className="oh-circles">
          <div className="oh-circle" data-aos="zoom-in" data-aos-delay="0">
            <Users size={48} strokeWidth={1.5} />
            <span>Salud Humana</span>
          </div>
          <div className="oh-circle" data-aos="zoom-in" data-aos-delay="150">
            <PawPrint size={48} strokeWidth={1.5} />
            <span>Salud Animal</span>
          </div>
          <div className="oh-circle" data-aos="zoom-in" data-aos-delay="300">
            <Sprout size={48} strokeWidth={1.5} />
            <span>Salud Ambiental</span>
          </div>
        </div>

        <p className="oh-text" style={{fontSize: '1rem', opacity: 0.9}}>
          Orientamos nuestra labor promoviendo el bienestar del ser humano en armonía con los animales y el entorno natural en nuestras brigadas comunitarias.
        </p>
        
        <a href="#contacto" className="btn btn-hero-secondary" style={{marginTop: '2rem'}}>Conoce One Health</a>
      </div>
    </section>
  );
};

export default OneHealth;
