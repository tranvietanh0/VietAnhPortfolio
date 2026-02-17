import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/SkillCard';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-light-secondary dark:bg-dark-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
