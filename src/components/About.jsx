import React from 'react';
import { GraduationCap, Compass, BookOpen, Target } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <GraduationCap className="card-icon text-blue" size={28} />,
      title: 'Education',
      detail: 'Second Year B.Tech CSE',
      description: 'Sandip University (2025–2029)'
    },
    {
      icon: <Compass className="card-icon text-blue" size={28} />,
      title: 'Focus',
      detail: 'Software Development & AI/ML',
      description: 'Building practical & core programming skills'
    },
    {
      icon: <BookOpen className="card-icon text-blue" size={28} />,
      title: 'Currently Learning',
      detail: 'Web Dev, AI/ML, Generative AI',
      description: 'Exploring frontend frameworks and AI concepts'
    },
    {
      icon: <Target className="card-icon text-blue" size={28} />,
      title: 'Goal',
      detail: 'Full-Stack Developer & AI/ML Engineer',
      description: 'Aiming for industry experience & practical growth'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <h3 className="about-subtitle">
              Passionate CSE Student Exploring Technology & Building Solutions
            </h3>
            <p className="about-paragraph">
              I am a second-year Computer Science and Engineering student at Sandip University with a strong interest in software development, artificial intelligence, and machine learning.
            </p>
            <p className="about-paragraph">
              I have a solid foundation in C, C++, Java, Python, HTML, CSS, and JavaScript and enjoy building practical projects while continuously improving my problem-solving and technical skills.
            </p>
            <p className="about-paragraph">
              Currently, I am exploring web development, AI/ML, and Generative AI, and actively looking for opportunities to learn, contribute, and grow as a developer.
            </p>
          </div>

          <div className="about-cards-grid">
            {cards.map((card, index) => (
              <div key={index} className="info-card">
                <div className="info-card-header">
                  {card.icon}
                  <h4>{card.title}</h4>
                </div>
                <h5 className="info-card-detail">{card.detail}</h5>
                <p className="info-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
