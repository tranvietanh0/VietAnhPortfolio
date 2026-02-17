import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import { experience } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey"
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
