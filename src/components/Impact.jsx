import React from 'react';
import '../styles/sections.css';

const Impact = () => {
  const trajectory = [
    {
      activity: "Taller psicoeducativo en prevención del suicidio",
      place: "Instituciones Educativas, La Unión y zona rural",
      desc: "Se logró establecer un espacio valioso de reflexión, educación y humanización, brindando herramientas como el reconocimiento de signos de alarma."
    },
    {
      activity: "Taller en prevención del cáncer de mama",
      place: "JAC Vereda Pajarito",
      desc: "Se impactó el nivel de conciencia sobre la importancia de la prevención y el autocuidado a través de la detección temprana."
    },
    {
      activity: "Brigada Comunitaria Biopsicosocial",
      place: "Cabildo Indígena San Carlos",
      desc: "Integración efectiva de la salud humana, animal y ambiental como pilar fundamental, generando un impacto positivo y holístico."
    },
    {
      activity: "Jornada Recreativa Comunitaria",
      place: "JAC Vereda Rabo Largo – La Balsa",
      desc: "Se fomentó la diversión, el desarrollo integral y la socialización a través del juego, ofreciendo una experiencia positiva para el bienestar emocional."
    }
  ];

  return (
    <section className="impact-section">
      <div className="container">
        <h2>Nuestra Trayectoria</h2>
        <p className="section-subtitle">Impacto en nuestras comunidades</p>
        
        <div className="timeline">
          {trajectory.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className="timeline-content">
                <h4>{item.activity}</h4>
                <span className="timeline-place">{item.place}</span>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
