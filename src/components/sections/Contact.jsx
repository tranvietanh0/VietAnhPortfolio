import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import ScrollReveal from '../effects/ScrollReveal';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission - replace with actual form handling
    // Options: Formspree, Netlify Forms, EmailJS, or custom backend
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
    },
    {
      icon: MessageSquare,
      label: 'Social',
      value: 'Connect on LinkedIn',
      href: personalInfo.social.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Let&apos;s create something amazing
                </h3>
                <p className="text-text-secondary">
                  I&apos;m always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-dark-secondary rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon className="text-accent" size={22} />
                    </div>
                    <div>
                      <div className="text-text-secondary text-sm">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-text-primary hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-text-primary">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                icon={Send}
                iconPosition="right"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
