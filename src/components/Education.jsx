import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpenCheck } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-underline"></div>
        </div>

        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <GraduationCap size={22} />
            </div>

            <div className="timeline-content card glass-card">
              <div className="education-badge">Current Academic Program</div>

              <h3 className="degree-title">
                B.Tech – Computer Science & Engineering
              </h3>

              <div className="institution-info">
                <span className="institution-name">
                  <MapPin size={16} /> Sandip University
                </span>
                <span className="timeline-date">
                  <Calendar size={16} /> 2025 – 2029
                </span>
              </div>

              <div className="status-container">
                <span className="status-label">Current Academic Standing:</span>
                <span className="status-value highlight-pill">Second Year</span>
              </div>

              <div className="coursework-section">
                <h4 className="coursework-heading">
                  <BookOpenCheck size={18} /> Foundational Academic Areas:
                </h4>
                <ul className="coursework-tags">
                  <li>Data Structures & Algorithms</li>
                  <li>Object-Oriented Programming (C++/Java)</li>
                  <li>Database Management Systems</li>
                  <li>Computer Science Fundamentals</li>
                  <li>Web Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
