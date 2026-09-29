import React from 'react';
import { Target, Compass, ArrowRight, Rocket } from 'lucide-react';

const CareerObjective = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 70;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="career-objective" className="section objective-section">
      <div className="container">
        <div className="objective-card glass-card">
          <div className="objective-badge">
            <Rocket size={16} /> Vision & Trajectory
          </div>

          <h2 className="objective-heading">Where I'm Heading</h2>

          <blockquote className="objective-quote">
            "My goal is to build a strong foundation in software development and AI/ML, gain practical industry experience through internships and projects, and eventually grow into a skilled full-stack developer and AI/ML engineer."
          </blockquote>

          <div className="objective-highlights">
            <div className="objective-pill">
              <Target size={16} /> Foundational Core
            </div>
            <div className="objective-pill">
              <Compass size={16} /> Industry Experience
            </div>
            <div className="objective-pill">
              <Rocket size={16} /> Full-Stack & AI Growth
            </div>
          </div>

          <div className="objective-cta">
            <button onClick={handleScrollToContact} className="btn btn-primary">
              Let's Connect <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerObjective;
