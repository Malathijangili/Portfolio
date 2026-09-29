import React from 'react';
import { BookOpen, Code, Terminal, GitBranch, Cpu, Sparkles, Brain, CheckCircle } from 'lucide-react';

const Achievements = () => {
  const learningMilestones = [
    {
      icon: <Code className="milestone-icon" size={24} />,
      title: 'Building Web Applications',
      description: 'Creating responsive web apps with HTML5, CSS3, and Vanilla JavaScript (e.g., TasteHub project).'
    },
    {
      icon: <Sparkles className="milestone-icon" size={24} />,
      title: 'React & Modern Frontend',
      description: 'Learning component architecture, state hooks, and dynamic rendering with React and Vite.'
    },
    {
      icon: <Terminal className="milestone-icon" size={24} />,
      title: 'C / C++ Fundamentals',
      description: 'Strengthening core programming concepts, data structures, and procedural / OOP logic.'
    },
    {
      icon: <BookOpen className="milestone-icon" size={24} />,
      title: 'Python Exploration',
      description: 'Exploring Python syntax and foundational libraries for computational logic.'
    },
    {
      icon: <Brain className="milestone-icon" size={24} />,
      title: 'Machine Learning Concepts',
      description: 'Understanding basic ML concepts, supervised learning principles, and workflows.'
    },
    {
      icon: <Cpu className="milestone-icon" size={24} />,
      title: 'Generative AI Tools & Patterns',
      description: 'Exploring prompt techniques, generative models, and AI-assisted developer tools.'
    },
    {
      icon: <GitBranch className="milestone-icon" size={24} />,
      title: 'Git & GitHub Version Control',
      description: 'Managing source code repositories, branching, and repository hosting.'
    },
    {
      icon: <CheckCircle className="milestone-icon" size={24} />,
      title: 'Continuous Problem Solving',
      description: 'Practicing algorithmic thinking and logical reasoning through consistent code challenges.'
    }
  ];

  return (
    <section id="achievements" className="section learning-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Learning & Progress</h2>
          <p className="section-description">
            Key milestones, active learning paths, and ongoing technical growth as a second-year CSE student.
          </p>
          <div className="section-underline"></div>
        </div>

        <div className="learning-grid">
          {learningMilestones.map((item, index) => (
            <div key={index} className="learning-card card">
              <div className="learning-card-icon">{item.icon}</div>
              <div className="learning-card-content">
                <h3 className="milestone-title">{item.title}</h3>
                <p className="milestone-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
