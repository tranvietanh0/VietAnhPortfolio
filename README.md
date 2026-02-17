# Viet Anh Portfolio

A modern, minimalist dark-themed portfolio website for a Game Developer built with React + Vite.

## Features

- **Dark Minimalist Design** - Clean, professional look with accent colors
- **Smooth Animations** - Powered by Framer Motion
- **3D Elements** - Interactive 3D objects using React Three Fiber
- **Particle Effects** - Dynamic background with tsParticles
- **Responsive Design** - Works on all devices
- **Sections**: Hero, About, Skills, Experience, Projects, Contact

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Three Fiber + Three.js
- tsParticles
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal info (name, title, bio, email, social links)
- Skills and proficiency levels
- Work experience
- Projects

### Assets

Add your assets to `public/assets/`:
- `images/avatar.jpg` - Your profile photo
- `images/project1.jpg`, etc. - Project screenshots
- `resume.pdf` - Your CV for download

### Styling

- Colors: `tailwind.config.js` - Update the color palette
- Global styles: `src/index.css` - Custom CSS utilities

## Deployment

Build the project and deploy the `dist` folder to any static hosting:

- **Vercel**: `vercel` or connect GitHub repo
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## Contact Form

The contact form currently simulates submission. To make it functional:

1. **Formspree**: Add your Formspree endpoint
2. **Netlify Forms**: Add `data-netlify="true"` to form
3. **EmailJS**: Integrate EmailJS SDK
4. **Custom Backend**: Create API endpoint

## License

MIT License - Feel free to use this template for your portfolio!
