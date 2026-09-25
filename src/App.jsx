import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import ActionLines from './components/ActionLines';
import OneHealth from './components/OneHealth';
import Impact from './components/Impact';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 100, // Offset (in px) from the original trigger point
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <ActionLines />
        <OneHealth />
        <Impact />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
