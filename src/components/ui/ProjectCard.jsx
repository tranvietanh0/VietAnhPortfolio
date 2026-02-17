import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const getLinkIcon = (type) => {
    switch (type) {
      case 'github':
        return <Github size={18} />;
      case 'demo':
      case 'playstore':
      case 'appstore':
        return <Play size={18} />;
      default:
        return <ExternalLink size={18} />;
    }
  };

  const getLinkLabel = (type) => {
    switch (type) {
      case 'github':
        return 'Code';
      case 'demo':
        return 'Demo';
      case 'playstore':
        return 'Play Store';
      case 'appstore':
        return 'App Store';
      default:
        return 'Link';
    }
  };

  return (
    <motion.div
      className="group bg-light-primary dark:bg-dark-secondary rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-accent/30 transition-all duration-300 card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-light-tertiary dark:bg-dark-tertiary">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className={`absolute inset-0 ${project.image ? 'hidden' : 'flex'} items-center justify-center bg-gradient-to-br from-accent/20 to-accent-purple/20`}>
          <span className="text-4xl font-bold text-accent/50">{project.title.charAt(0)}</span>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-light-primary dark:from-dark-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-text-primary mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium bg-light-tertiary dark:bg-dark-tertiary text-gray-600 dark:text-text-secondary rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-white/5">
          {Object.entries(project.links).map(([type, url]) => (
            <a
              key={type}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-600 dark:text-text-secondary hover:text-accent transition-colors"
            >
              {getLinkIcon(type)}
              <span>{getLinkLabel(type)}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
