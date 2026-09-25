import React from 'react';
import '../styles/sections.css';

const JoinUs = () => {
  const beneficiaries = [
    "Niños, niñas y adolescentes",
    "Adultos y adultos mayores",
    "Familias",
    "Comunidades rurales y urbanas",
    "Mujeres y población con vulneración de derechos",
    "Personas con trastornos mentales o discapacidades",
    "Instituciones educativas",
    "Organizaciones y empresas aliadas"
  ];

  const waysToJoin = [
    "Donaciones económicas",
    "Donaciones en especie",
    "Voluntariado",
    "Alianzas interinstitucionales",
    "Patrocinios de programas",
    "Responsabilidad Social Empresarial",
    "Cooperación internacional"
  ];

  return (
    <section className="join-section">
      <div className="container">
        <h2>Población Beneficiada</h2>
        <p className="section-subtitle">A quiénes dirigimos nuestros esfuerzos</p>
        
        <div className="beneficiaries-grid">
          {beneficiaries.map((b, index) => (
            <div className="beneficiary-card" key={index} data-aos="fade-up" data-aos-delay={`${index * 50}`}>
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="join-container" data-aos="zoom-in-up">
          <h2>Cómo Vincularte</h2>
          <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem'}}>
            Invitamos a empresas, organizaciones y personas naturales a apoyar nuestra misión.
          </p>
          
          <div className="join-ways">
            {waysToJoin.map((way, index) => (
              <span className="join-way" key={index}>{way}</span>
            ))}
          </div>
          
          <a href="#contacto" className="btn btn-primary">Quiero apoyar a FUNGLORIA</a>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
