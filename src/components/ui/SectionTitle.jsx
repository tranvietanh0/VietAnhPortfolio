import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="w-12 h-1 bg-accent rounded-full" />
        <div className="w-3 h-3 bg-accent-purple rounded-full" />
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
