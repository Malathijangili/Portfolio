import React from 'react';
import { ArrowRight, Terminal, Code, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
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
    <section id="home" className="hero-section">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>Second Year Computer Science & Engineering Student</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">JANGILI MALATHI</span>
          </h1>

          <h2 className="hero-subtitle">
            CSE Student & Aspiring Full-Stack Developer
          </h2>

          <p className="hero-description">
            Building my foundation in software development, web technologies, AI/ML, and Generative AI while creating practical projects and continuously improving my problem-solving skills.
          </p>

          <div className="hero-actions">
            <button
              onClick={() => handleScrollTo('projects')}
              className="btn btn-primary"
            >
              View My Projects <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-secondary"
            >
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            <a
              href="https://github.com/Malathijangili"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jangili-malathi-3a0299397/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} /> student_profile.js
              </div>
            </div>
            <div className="terminal-body">
              <pre>
<code>
<span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;
  <span className="code-prop">name</span>: <span className="code-string">"Jangili Malathi"</span>,
  <span className="code-prop">role</span>: <span className="code-string">"CSE Student & Aspiring Full-Stack Developer"</span>,
  <span className="code-prop">university</span>: <span className="code-string">"Sandip University"</span>,
  <span className="code-prop">academicYear</span>: <span className="code-string">"Second Year (2025–2029)"</span>,
  <span className="code-prop">focusAreas</span>: [
    <span className="code-string">"Software Development"</span>,
    <span className="code-string">"Web Development"</span>,
    <span className="code-string">"AI & Machine Learning"</span>,
    <span className="code-string">"Generative AI"</span>
  ],
  <span className="code-prop">status</span>: <span className="code-string">"Actively Learning & Building Projects 🚀"</span>
&#125;;
</code>
              </pre>
            </div>
          </div>

          <div className="hero-floating-badges">
            <div className="tech-pill">
              <Code size={16} /> Web Dev
            </div>
            <div className="tech-pill">
              <Cpu size={16} /> AI / ML
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
