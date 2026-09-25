import React from 'react';
import { Activity, Heart, Leaf, Users2, LineChart, Handshake } from 'lucide-react';
import '../styles/sections.css';

const ActionLines = () => {
  const lines = [
    { title: "Atención Integral en Salud Mental y Bienestar Biopsicosocial", icon: Activity },
    { title: "Promoción del Bienestar, Prevención y Cultura de Cuidado", icon: Heart },
    { title: "Implementación del Enfoque One Health", icon: Leaf },
    { title: "Desarrollo Personal, Inclusión Social y Reducción del Estigma", icon: Users2 },
    { title: "Investigación, Monitoreo y Evaluación", icon: LineChart },
    { title: "Gestión Institucional, Alianzas y Sostenibilidad", icon: Handshake }
  ];

  return (
    <section className="action-lines-section">
      <div className="container">
        <h2>Líneas de Acción</h2>
        <p className="section-subtitle">Pilares fundamentales de nuestra intervención</p>
        
        <div className="action-grid">
          {lines.map((line, index) => {
            const Icon = line.icon;
            return (
              <div className="action-card" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div style={{color: 'var(--primary)', flexShrink: 0}}>
                  <Icon size={28} />
                </div>
                <h4>{line.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActionLines;
