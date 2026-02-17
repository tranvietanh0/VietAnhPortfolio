import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Code } from 'lucide-react';
import ScrollReveal from '../effects/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../data/portfolioData';

const About = () => {
  const stats = [
    { icon: Calendar, value: personalInfo.yearsExp, label: 'Years Experience' },
    { icon: Briefcase, value: personalInfo.projectsCompleted, label: 'Projects Completed' },
    { icon: Code, value: '50K+', label: 'Lines of Code' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-purple/20 p-1">
                <div className="w-full h-full rounded-2xl bg-dark-secondary flex items-center justify-center">
                  {/* Placeholder for avatar - replace with actual image */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">
                        {personalInfo.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm">
                      Add your photo at<br />
                      <code className="text-accent">/public/assets/images/avatar.jpg</code>
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/10 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin size={18} className="text-accent" />
                <span>{personalInfo.location}</span>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-dark-secondary rounded-xl border border-white/5"
                    whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.3)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="mx-auto mb-2 text-accent" size={24} />
                    <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                    <div className="text-xs text-text-secondary">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['Unity Expert', 'Mobile Specialist', 'Clean Architecture', 'Team Player'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-dark-tertiary rounded-full text-sm text-text-secondary border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
