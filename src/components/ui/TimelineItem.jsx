import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const TimelineItem = ({ experience, index, isLast }) => {
  return (
    <motion.div
      className="relative pl-8 pb-12"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-10 w-0.5 h-full bg-gradient-to-b from-accent to-transparent" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
        <Briefcase size={12} className="text-white" />
      </div>

      {/* Content */}
      <div className="bg-light-secondary dark:bg-dark-secondary rounded-xl p-6 border border-gray-200 dark:border-white/5 hover:border-accent/30 transition-all duration-300 ml-4">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-text-primary">{experience.role}</h3>
          <span className="text-accent text-sm font-medium px-3 py-1 bg-accent/10 rounded-full">
            {experience.duration}
          </span>
        </div>
        <h4 className="text-accent-purple font-medium mb-3">{experience.company}</h4>
        <p className="text-gray-600 dark:text-text-secondary mb-4">{experience.description}</p>

        {experience.highlights && (
          <ul className="space-y-2">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-text-secondary text-sm">
                <span className="text-accent mt-1">&#x2022;</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
