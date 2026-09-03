const PORTFOLIO_DATA = {
  profile: {
    name: "sarwesv",
    handle: "sarwesv",
    pronouns: "he/him",
    title: "Web Developer & Coder",
    tagline: "Just a 9-year-old who loves computers and coding.",
    bio: "Just a 9-year-old who loves computers and coding.",
    avatar: "assets/images/teleprompter.png",
    location: "United States",
    status: "Active GitHub Developer",
    githubProfile: "https://github.com/sarwesv",
    githubPagesRoot: "https://sarwesv.github.io",
    email: "mogalt@gmail.com",
    stats: [
      { label: "Public Repositories", value: "7" },
      { label: "Active Deployments", value: "7" },
      { label: "Primary Language", value: "JavaScript" },
      { label: "GitHub Pages", value: "Live" }
    ]
  },

  categories: [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full-Stack & Tools" },
    { id: "devtools", name: "Developer Utilities" },
    { id: "web", name: "Web Applications & Games" }
  ],

  projects: [
    {
      id: "invoice-app",
      title: "Invoice & Savings App",
      category: "fullstack",
      featured: true,
      badge: "Full-Stack App",
      tagline: "VaultCraft Smart Savings Planner & Goal Tracker with privacy controls.",
      description: "Simple, fun savings goal planner and tracker designed for managing goals, deposits, and growth targets.",
      longDescription: "VaultCraft is a full-featured web application allowing users to track savings goals, log deposits, set growth targets, and manage activity logs with privacy controls.",
      repoUrl: "https://github.com/sarwesv/invoice",
      demoUrl: "https://sarwesv.github.io/invoice/",
      tags: ["JavaScript", "HTML5", "CSS3", "Savings App", "Firebase"],
      metrics: [
        { label: "Storage", value: "LocalStorage" },
        { label: "Privacy", value: "Enabled" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "Interactive savings goal progress tracking with visual progress bars",
        "Direct email background form integration",
        "Permanent account privacy mode"
      ]
    },
    {
      id: "teleprompter",
      title: "Teleprompter App",
      category: "devtools",
      featured: true,
      badge: "Developer Tool",
      tagline: "Simple, customizable browser teleprompter for speeches, video recordings, and presentations.",
      description: "A lightweight, distraction-free teleprompter web application with adjustable scroll speeds, font sizes, mirror modes, and smooth auto-scrolling controls.",
      longDescription: "Designed for content creators and presenters. Features keyboard shortcuts, live text editing, customizable text size and colors, mirror mode for teleprompter hardware rigs, and high FPS smooth scrolling.",
      repoUrl: "https://github.com/sarwesv/teleprompter",
      demoUrl: "https://sarwesv.github.io/teleprompter/",
      tags: ["JavaScript", "HTML5", "CSS Grid", "Teleprompter", "Web App"],
      metrics: [
        { label: "Scroll Engine", value: "60 FPS" },
        { label: "Interface", value: "Clean UI" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "Adjustable scrolling speed and font sizing controls",
        "Horizontal and vertical text flip (Mirroring) for hardware rigs",
        "Distraction-free dark mode interface with fullscreen support",
        "Keyboard shortcut bindings for pause/play and speed adjustments"
      ]
    },
    {
      id: "capital-quiz",
      title: "Capital Quiz",
      category: "web",
      featured: true,
      badge: "Educational Quiz",
      tagline: "World and state capital quiz game with score leaderboard.",
      description: "Engaging quiz game testing capital city knowledge with interactive visual cards and progress indicators.",
      longDescription: "Test your trivia skills across world and national capital cities. Simple, intuitive UI designed for fast mobile and desktop play.",
      repoUrl: "https://github.com/sarwesv/Capitalquiz",
      demoUrl: "https://sarwesv.github.io/Capitalquiz/",
      tags: ["JavaScript", "HTML5", "CSS3", "Trivia", "Quiz"],
      metrics: [
        { label: "Interface", value: "Responsive" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "Interactive answer cards with smooth feedback animations",
        "Progress tracking bar and accuracy percentage"
      ]
    },
    {
      id: "lofi-player",
      title: "Lofi Ambient Player",
      category: "web",
      featured: false,
      badge: "Audio App",
      tagline: "Minimalist ambient Lofi music player with relaxation visuals.",
      description: "Web music player tailored for study and focus with soothing Lofi beats and visual background animations.",
      longDescription: "An aesthetic web audio player featuring curated Lofi audio tracks, ambient sound controls, and relaxing background visualizers.",
      repoUrl: "https://github.com/sarwesv/Lofi",
      demoUrl: "https://sarwesv.github.io/Lofi/",
      tags: ["JavaScript", "Web Audio", "CSS Glassmorphism", "Music"],
      metrics: [
        { label: "Design", value: "Glassmorphism" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "Audio playback controls with track toggles",
        "Ambient background mood lighting visuals"
      ]
    },
    {
      id: "game-2048",
      title: "2048 Tile Game",
      category: "web",
      featured: false,
      badge: "Web Game",
      tagline: "Classic 2048 sliding block puzzle built with smooth CSS animations.",
      description: "Recreation of the popular 2048 puzzle game featuring touch swipe controls, smooth tile animations, and score tracking.",
      longDescription: "Slide numbered tiles on a grid to combine them and reach 2048. Includes high score saving in browser LocalStorage.",
      repoUrl: "https://github.com/sarwesv/2048",
      demoUrl: "https://sarwesv.github.io/2048/",
      tags: ["JavaScript", "CSS Animations", "Game", "Mobile Touch"],
      metrics: [
        { label: "Animation", value: "60 FPS" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "Smooth tile sliding and merging visual transitions",
        "Keyboard arrow and touch swipe controls for mobile play"
      ]
    },
    {
      id: "snake-game",
      title: "Snake Retro Game",
      category: "web",
      featured: false,
      badge: "Retro Game",
      tagline: "Classic arcade Snake game built with HTML5 Canvas and retro styling.",
      description: "Nostalgic Snake arcade game with score tracking, speed progression, collision detection, and retro sound effects.",
      longDescription: "Control the snake to collect food while avoiding walls and your own tail. Features increasing speed levels as score climbs.",
      repoUrl: "https://github.com/sarwesv/snake",
      demoUrl: "https://sarwesv.github.io/snake/",
      tags: ["JavaScript", "HTML5 Canvas", "Game Dev", "Retro"],
      metrics: [
        { label: "Renderer", value: "2D Canvas" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "HTML5 2D Canvas rendering loop",
        "High score tracking and speed level progression"
      ]
    },
    {
      id: "fish-simulator",
      title: "Fish Simulator",
      category: "web",
      featured: false,
      badge: "Simulation",
      tagline: "Interactive underwater fish aquarium simulation with realistic swimming physics.",
      description: "A calming web aquarium simulation featuring interactive fish behaviors, food feeding, and underwater ambient effects.",
      longDescription: "Watch and interact with colorful virtual fish in an animated underwater environment with food physics and particle systems.",
      repoUrl: "https://github.com/sarwesv/fishsim",
      demoUrl: "https://sarwesv.github.io/fishsim/",
      tags: ["JavaScript", "HTML5 Canvas", "Physics", "Simulation"],
      metrics: [
        { label: "Graphics", value: "Canvas 2D" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "Realistic fish swimming physics and particle effects",
        "Interactive feeding mechanics"
      ]
    }
  ],

  skills: [
    {
      category: "Frontend Development",
      icon: "code",
      items: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5 & Semantic Markup", level: 98 },
        { name: "CSS3 / Glassmorphic UI", level: 92 },
        { name: "Web Audio & Canvas 2D", level: 85 },
        { name: "Responsive Web Design", level: 95 }
      ]
    },
    {
      category: "Developer Tools & Version Control",
      icon: "server",
      items: [
        { name: "Git & GitHub", level: 95 },
        { name: "GitHub Pages Hosting", level: 95 },
        { name: "Browser DevTools", level: 90 },
        { name: "REST APIs & JSON", level: 88 }
      ]
    }
  ],

  timeline: [
    {
      year: "2026",
      title: "Active Developer & Open Source Creator",
      company: "GitHub (sarwesv)",
      description: "Published web applications, developer tools, and interactive games hosted on GitHub Pages."
    }
  ]
};
