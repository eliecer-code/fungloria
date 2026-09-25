import React from 'react';
import { HeartPulse, Users, CheckCircle2 } from 'lucide-react';
import '../styles/sections.css';

const Services = () => {
  const asistenciales = [
    "Psicología clínica y comunitaria",
    "Psiquiatría",
    "Medicina general",
    "Trabajo social",
    "Acompañamiento psicosocial familiar",
    "Evaluación, intervención y seguimiento"
  ];

  const comunitarios = [
    "Charlas, talleres y cursos",
    "Brigadas de salud",
    "Campañas de sensibilización",
    "Acompañamiento a instituciones educativas",
    "Procesos de participación comunitaria",
    "Programas de prevención del suicidio",
    "Intervención breve y en crisis",
    "Asesoría en salud mental institucional",
    "Implementación del enfoque One Health"
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <p className="section-subtitle">Ofrecemos servicios dirigidos a comunidades, instituciones públicas, privadas y organizaciones sociales.</p>
        
        <div className="services-grid">
          <div className="service-category" data-aos="fade-up" data-aos-delay="100">
            <h3><HeartPulse /> Servicios Asistenciales</h3>
            <div className="service-list">
              {asistenciales.map((item, index) => (
                <div className="service-item" key={index}>
                  <CheckCircle2 className="service-item-icon" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="service-category" data-aos="fade-up" data-aos-delay="200">
            <h3><Users /> Servicios Comunitarios y Educativos</h3>
            <div className="service-list">
              {comunitarios.map((item, index) => (
                <div className="service-item" key={index}>
                  <CheckCircle2 className="service-item-icon" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
