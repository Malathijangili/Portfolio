import React from 'react';
import { Code2, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
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
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <Code2 size={24} className="logo-icon" />
              <span>JANGILI MALATHI</span>
            </div>
            <p className="footer-tagline">
              CSE Student & Aspiring Full-Stack Developer
            </p>
            <p className="footer-subtext">
              Sandip University • Computer Science & Engineering (2025–2029)
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul className="footer-nav">
              <li><a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavLinkClick(e, '#about')}>About</a></li>
              <li><a href="#skills" onClick={(e) => handleNavLinkClick(e, '#skills')}>Skills</a></li>
              <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, '#projects')}>Projects</a></li>
              <li><a href="#education" onClick={(e) => handleNavLinkClick(e, '#education')}>Education</a></li>
              <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-group">
            <h4>Connect</h4>
            <div className="footer-social-links">
              <a
                href="https://github.com/Malathijangili"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="footer-social-btn"
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jangili-malathi-3a0299397/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="footer-social-btn"
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a
                href="mailto:malavikapateljangili@gmail.com"
                aria-label="Email Me"
                className="footer-social-btn"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 JANGILI MALATHI. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
