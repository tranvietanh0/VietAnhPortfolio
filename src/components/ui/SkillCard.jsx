import { motion } from 'framer-motion';

const SkillCard = ({ category, items, index }) => {
  return (
    <motion.div
      className="bg-light-primary dark:bg-dark-secondary rounded-xl p-6 border border-gray-200 dark:border-white/5 hover:border-accent/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-accent">{category}</h3>
      <div className="space-y-4">
        {items.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-900 dark:text-text-primary font-medium">{skill.name}</span>
              <span className="text-gray-600 dark:text-text-secondary text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-light-tertiary dark:bg-dark-tertiary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-purple rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
