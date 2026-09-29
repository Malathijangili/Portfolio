import React from 'react';
import { ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card card">
      <div className="project-card-header">
        <div className="project-card-tag">{project.imageTag}</div>
        <h3 className="project-title">{project.title}</h3>
      </div>

      <div className="project-card-body">
        <p className="project-description">{project.description}</p>

        <div className="project-tech-stack">
          <span className="tech-stack-label"><Code2 size={14} /> Technologies:</span>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>
                <CheckCircle2 size={14} className="feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-card-footer">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <GithubIcon size={16} /> GitHub Code
          </a>
        )}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        ) : (
          <span className="pending-deployment-badge">
            Live Demo: Add after deployment
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
