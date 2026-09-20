import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card overflow-hidden hover:shadow-glow-lg transition-all duration-300 group animate-slideUp">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 md:h-56 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white/10 group-hover:scale-110 transition-transform duration-300">
          {project.id}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-dark-text mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-dark-text2 text-sm md:text-base mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-6 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-text2 hover:text-blue-400 transition-colors flex-1"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-sm">Code</span>
          </a>
          {project.liveDemo !== '#' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-text2 hover:text-green-400 transition-colors flex-1"
              aria-label={`Live demo for ${project.title}`}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'Java', 'JavaScript', 'Other'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-bg2/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-dark-text2 text-lg max-w-2xl mx-auto">
            Showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slideUp">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-dark-bg2 text-dark-text2 hover:bg-dark-bg3 border border-white/10'
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{
                animation: 'slideUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-slideUp">
            <p className="text-dark-text2 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 animate-slideUp">
          <p className="text-dark-text2 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaGithub className="w-5 h-5" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
