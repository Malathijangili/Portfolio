import React from 'react';
import { Code2, Globe, Database, Wrench, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'PROGRAMMING LANGUAGES',
      icon: <Code2 size={22} className="cat-icon" />,
      skills: [
        { name: 'C', level: 'Familiar' },
        { name: 'C++', level: 'Familiar' },
        { name: 'Java', level: 'Familiar' },
        { name: 'JavaScript', level: 'Familiar' },
        { name: 'Python', level: 'Familiar' }
      ]
    },
    {
      category: 'WEB DEVELOPMENT',
      icon: <Globe size={22} className="cat-icon" />,
      skills: [
        { name: 'HTML5', level: 'Familiar' },
        { name: 'CSS3', level: 'Familiar' },
        { name: 'JavaScript (ES6+)', level: 'Familiar' },
        { name: 'Bootstrap', level: 'Familiar' },
        { name: 'React (Basics)', level: 'Learning' }
      ]
    },
    {
      category: 'DATABASE',
      icon: <Database size={22} className="cat-icon" />,
      skills: [
        { name: 'SQL', level: 'Familiar' }
      ]
    },
    {
      category: 'TOOLS & PLATFORMS',
      icon: <Wrench size={22} className="cat-icon" />,
      skills: [
        { name: 'Git', level: 'Familiar' },
        { name: 'GitHub', level: 'Familiar' }
      ]
    },
    {
      category: 'AI & MACHINE LEARNING',
      icon: <BrainCircuit size={22} className="cat-icon" />,
      skills: [
        { name: 'Machine Learning Concepts', level: 'Exploring' },
        { name: 'Generative AI Basics', level: 'Exploring' }
      ]
    }
  ];

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Familiar':
        return 'badge-familiar';
      case 'Learning':
        return 'badge-learning';
      case 'Exploring':
        return 'badge-exploring';
      default:
        return 'badge-familiar';
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            Categorized overview of tools and technologies I am building competency in.
          </p>
          <div className="section-underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                {cat.icon}
                <h3>{cat.category}</h3>
              </div>
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level-badge ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
