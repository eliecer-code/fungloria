import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <img src={logoImg} alt="Logo FUNGLORIA" className="navbar-logo-img" />
        </a>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#inicio" className="nav-link" onClick={closeMenu}>Inicio</a>
          <a href="#quienes-somos" className="nav-link" onClick={closeMenu}>Quiénes somos</a>
          <a href="#mision-vision" className="nav-link" onClick={closeMenu}>Misión y Visión</a>
          <a href="#servicios" className="nav-link" onClick={closeMenu}>Servicios</a>
          <a href="#one-health" className="nav-link" onClick={closeMenu}>One Health</a>
          <a href="#contacto" className="nav-link" onClick={closeMenu}>Contacto</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
