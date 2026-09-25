import React from 'react';
import { Target, Eye } from 'lucide-react';
import '../styles/sections.css';

const MissionVision = () => {
  const values = [
    "Empatía", "Solidaridad", "Respeto por la dignidad humana", 
    "Igualdad", "Equidad", "Resiliencia", "Transparencia", "Excelencia"
  ];

  return (
    <section id="mision-vision" className="mvv-section">
      <div className="container">
        
        <div className="mvv-grid">
          <div className="mv-card" data-aos="fade-up" data-aos-delay="100">
            <div className="mv-icon">
              <Target size={36} />
            </div>
            <h3>Nuestra Misión</h3>
            <p>
              Promover el bienestar emocional, físico y mental del individuo, brindando apoyo, 
              recursos y servicios que permitan prevenir, tratar y superar los problemas 
              relacionados con la salud mental entre otras discapacidades y las de su familia, 
              fomentando una cultura de comprensión, inclusión y esperanza.
            </p>
          </div>
          
          <div className="mv-card" data-aos="fade-up" data-aos-delay="200">
            <div className="mv-icon">
              <Eye size={36} />
            </div>
            <h3>Nuestra Visión</h3>
            <p>
              Fungloria se proyecta como una Fundación líder en la atención integral del 
              individuo y sus familias donde sea prioritaria, comprometida y apoyada, 
              permitiendo que todas las personas alcancen su máximo potencial y tengan 
              vidas plenas libres de estigmas y discriminación.
            </p>
          </div>
        </div>

        <div className="values-container">
          <h2>Nuestros Valores</h2>
          <div className="values-marquee">
            <div className="values-track">
              {/* Duplicamos el array para lograr un efecto infinito impecable */}
              {[...values, ...values].map((value, index) => (
                <span key={index} className="value-tag">{value}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
