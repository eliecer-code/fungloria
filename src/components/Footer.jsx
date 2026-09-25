import React from 'react';
import { Camera, Share2, Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-about">
            <a href="#inicio" className="footer-logo">
              <img src={logoImg} alt="Logo FUNGLORIA" className="navbar-logo-img" />
            </a>
            <p className="footer-desc">
              Promoviendo el bienestar emocional, físico y mental con un enfoque One Health en nuestras comunidades, fomentando una cultura de comprensión, inclusión y esperanza.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><Camera size={20} /></a>
              <a href="#" className="social-icon"><Share2 size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-section">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <div className="footer-links">
              <a href="#inicio" className="footer-link">Inicio</a>
              <a href="#quienes-somos" className="footer-link">Quiénes somos</a>
              <a href="#servicios" className="footer-link">Servicios</a>
              <a href="#one-health" className="footer-link">One Health</a>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Contacto</h4>
            <p><MapPin size={16} style={{flexShrink:0}}/> Calle 14 #10-45, La Unión – Sucre</p>
            <p><Phone size={16} style={{flexShrink:0}}/> 314 685 6233</p>
            <p><Mail size={16} style={{flexShrink:0}}/> info@fundacionlagloria.org</p>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fundación La Gloria Salvando Vidas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
