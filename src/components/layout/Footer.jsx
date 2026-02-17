import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';
import { personalInfo, navLinks } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <footer className="bg-light-secondary dark:bg-dark-secondary border-t border-gray-200 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Code2 className="text-accent" size={28} />
              <span className="gradient-text">VietAnh</span>
            </a>
            <p className="text-gray-600 dark:text-text-secondary text-sm max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-text-primary font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 dark:text-text-primary font-semibold mb-4">Get in Touch</h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-gray-600 dark:text-text-secondary hover:text-accent transition-colors text-sm mb-4"
            >
              <Mail size={16} />
              {personalInfo.email}
            </a>
            <div className="flex gap-4">
              {Object.entries(personalInfo.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return Icon ? (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-light-tertiary dark:bg-dark-tertiary flex items-center justify-center text-gray-600 dark:text-text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
                    aria-label={platform}
                  >
                    <Icon size={18} />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-text-secondary text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-text-secondary text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
