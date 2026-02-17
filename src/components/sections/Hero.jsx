import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';
import ParticleBackground from '../effects/ParticleBackground';
import FloatingObject from '../effects/FloatingObject';
import Button from '../ui/Button';
import { personalInfo } from '../../data/portfolioData';

const Hero = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <FloatingObject />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/50 via-transparent to-dark-primary pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-dark-secondary/80 rounded-full border border-white/10 mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-text-secondary text-sm">Available for work</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            <Button
              href="/assets/resume.pdf"
              variant="secondary"
              size="lg"
              icon={Download}
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {Object.entries(personalInfo.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return Icon ? (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-dark-secondary/80 border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={platform}
                >
                  <Icon size={22} />
                </motion.a>
              ) : null;
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
