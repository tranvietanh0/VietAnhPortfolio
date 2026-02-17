export const personalInfo = {
  name: "Viet Anh",
  title: "Game Developer",
  tagline: "Crafting immersive mobile gaming experiences with Unity",
  bio: "I'm a passionate Game Developer with expertise in Unity and mobile game development. I specialize in creating engaging gameplay experiences, optimizing performance for mobile platforms, and building scalable game architectures. With a focus on clean code and user experience, I bring ideas to life through interactive entertainment.",
  email: "vietanh@example.com",
  location: "Vietnam",
  yearsExp: "3+",
  projectsCompleted: "10+",
  social: {
    github: "https://github.com/vietanh",
    linkedin: "https://linkedin.com/in/vietanh",
    twitter: "https://twitter.com/vietanh",
  }
};

export const skills = [
  {
    category: "Game Engines",
    items: [
      { name: "Unity", level: 90 },
      { name: "Unreal Engine", level: 60 },
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C#", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "C++", level: 65 },
      { name: "Python", level: 70 },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Addressables", level: 85 },
      { name: "Zenject/VContainer", level: 80 },
    ]
  },
  {
    category: "Game Development",
    items: [
      { name: "Mobile Optimization", level: 85 },
      { name: "UI/UX Design", level: 75 },
      { name: "Game Architecture", level: 80 },
      { name: "Monetization (Ads/IAP)", level: 85 },
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "TheOne Studio",
    role: "Unity Game Developer",
    duration: "2022 - Present",
    description: "Developing mobile games using Unity with focus on UI systems, game architecture, and third-party SDK integration. Implementing ad monetization, in-app purchases, and analytics systems.",
    highlights: [
      "Built reusable UI framework used across multiple projects",
      "Integrated MaxSDK, Firebase, and AppsFlyer",
      "Optimized game performance for low-end devices"
    ]
  },
  {
    id: 2,
    company: "Game Studio ABC",
    role: "Junior Game Developer",
    duration: "2020 - 2022",
    description: "Started career in game development, working on casual mobile games. Learned Unity fundamentals, C# programming, and mobile game development best practices.",
    highlights: [
      "Developed 5+ casual games from concept to launch",
      "Implemented game mechanics and UI systems",
      "Collaborated with artists and designers"
    ]
  },
];

export const projects = [
  {
    id: 1,
    title: "Puzzle Adventure",
    description: "A challenging puzzle game with hundreds of levels, featuring unique mechanics and beautiful visuals. Implemented progressive difficulty system and daily challenges.",
    image: "/assets/images/project1.jpg",
    tags: ["Unity", "C#", "Mobile", "Puzzle"],
    links: {
      playstore: "https://play.google.com/store",
      appstore: "https://apps.apple.com",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Idle Tycoon Game",
    description: "An addictive idle game where players build and manage their empire. Features offline progression, prestige system, and social leaderboards.",
    image: "/assets/images/project2.jpg",
    tags: ["Unity", "C#", "Idle", "Mobile"],
    links: {
      playstore: "https://play.google.com/store",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Action RPG Demo",
    description: "A demo showcasing real-time combat, inventory system, and character progression. Built with modular architecture for easy content expansion.",
    image: "/assets/images/project3.jpg",
    tags: ["Unity", "C#", "RPG", "Combat"],
    links: {
      github: "https://github.com/vietanh/action-rpg",
      demo: "https://vietanh.itch.io/action-rpg",
    },
    featured: false,
  },
  {
    id: 4,
    title: "Hypercasual Collection",
    description: "A collection of hypercasual games with simple but engaging mechanics. Focused on satisfying gameplay loops and high retention rates.",
    image: "/assets/images/project4.jpg",
    tags: ["Unity", "C#", "Hypercasual", "Mobile"],
    links: {
      playstore: "https://play.google.com/store",
    },
    featured: false,
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
