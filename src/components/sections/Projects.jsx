import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Get unique tags
  const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {allTags.slice(0, 8).map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === tag
                  ? 'bg-accent text-white'
                  : 'bg-dark-tertiary text-text-secondary hover:text-text-primary hover:bg-dark-primary'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Link */}
        {filteredProjects.length > 4 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href={personalInfo?.social?.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
            >
              View more on GitHub
              <span className="text-lg">&rarr;</span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
