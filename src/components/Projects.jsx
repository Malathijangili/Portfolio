import React, { useState } from 'react';
import { Search, FolderGit2, AlertCircle } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    // Category filter
    const matchesCategory =
      selectedCategory === 'All' ||
      project.categories.includes(selectedCategory);

    // Search query filter
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
      project.categories.some((cat) => cat.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            Practical projects built to solidify concepts in software development & web technologies.
          </p>
          <div className="section-underline"></div>
        </div>

        {/* Filter & Search Bar */}
        <div className="project-controls">
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              className="search-input"
              placeholder="Search projects by title, tech, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="category-filters">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="no-projects-found card">
            <AlertCircle size={40} className="no-projects-icon" />
            <h3>No projects found</h3>
            <p>
              No projects matched your search for "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
