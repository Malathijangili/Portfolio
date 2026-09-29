import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CareerObjective from './components/CareerObjective';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Set dynamic document title for SEO
    document.title = "JANGILI MALATHI | CSE Student & Aspiring Full-Stack Developer";
  }, []);

  return (
    <div className={`app-root ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <CareerObjective />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
