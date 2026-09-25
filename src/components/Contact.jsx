import React from 'react';
import { MapPin, Phone, Mail, Globe, Camera, Share2 } from 'lucide-react';
import '../styles/sections.css';

const Contact = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <h2>Contacto</h2>
        <p className="section-subtitle">Estamos para escucharte</p>
        
        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-item">
              <MapPin className="contact-icon" size={48} />
              <div>
                <h4>Sede Operativa</h4>
                <p>Calle 14 #10-45, La Unión – Sucre</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon" size={48} />
              <div>
                <h4>Teléfono</h4>
                <p>314 685 6233</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Mail className="contact-icon" size={48} />
              <div>
                <h4>Correo electrónico</h4>
                <a href="mailto:info@fundacionlagloria.org">info@fundacionlagloria.org</a>
              </div>
            </div>
            
            <div className="contact-item">
              <Globe className="contact-icon" size={48} />
              <div>
                <h4>Sitio Web</h4>
                <a href="https://fundacionlagloria.org" target="_blank" rel="noreferrer">fundacionlagloria.org</a>
              </div>
            </div>
            
            <div className="contact-item">
              <Camera className="contact-icon" size={48} />
              <div>
                <h4>Redes Sociales</h4>
                <p>Instagram / Facebook: <a href="https://instagram.com/fundacionlagloria" target="_blank" rel="noreferrer">@fundacionlagloria</a></p>
              </div>
            </div>
          </div>
          
          <div className="contact-form" data-aos="fade-left">
            <h3>Envíanos un mensaje</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label>Correo electrónico</label>
                <input type="email" placeholder="Tu correo" required />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input type="tel" placeholder="Tu teléfono" />
              </div>
              <div className="form-group">
                <label>Motivo del contacto</label>
                <select>
                  <option>Información general</option>
                  <option>Servicios</option>
                  <option>Donaciones o Voluntariado</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea rows="4" placeholder="¿Cómo podemos ayudarte?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{marginTop: '1rem'}}>Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
