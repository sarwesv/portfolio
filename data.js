const PORTFOLIO_DATA = {
  profile: {
    name: "Sarwesv",
    title: "Software Engineer & Web Developer",
    tagline: "Building interactive web applications, developer utilities, and modern digital tools.",
    bio: "Passionate developer crafting fast, responsive web applications, interactive simulations, and productive utilities.",
    avatar: "assets/images/teleprompter.png",
    location: "United States",
    status: "Active GitHub Developer",
    githubProfile: "https://github.com/sarwesv",
    githubPagesRoot: "https://sarwesv.github.io",
    email: "sarwesv@github.com",
    stats: [
      { label: "Repositories", value: "14+" },
      { label: "Active Deployments", value: "10+" },
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
      image: "assets/images/teleprompter.png",
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
      id: "invoice-app",
      title: "Invoice Application",
      category: "fullstack",
      featured: true,
      badge: "Business Tool",
      tagline: "Sleek, fast invoice builder with instant preview and print formatting.",
      description: "Clean invoice editor allowing freelancers and small businesses to generate professional invoices with live preview and PDF printing.",
      longDescription: "Streamlined invoice management application supporting line-item calculations, client management, tax adjustments, and printable clean invoice templates.",
      repoUrl: "https://github.com/sarwesv/invoice",
      demoUrl: "https://sarwesv.github.io/invoice/",
      image: "assets/images/invoice.png",
      tags: ["JavaScript", "HTML5", "CSS3", "Invoice Generator", "Print CSS"],
      metrics: [
        { label: "Load Time", value: "< 100ms" },
        { label: "Format", value: "PDF & Print" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "Real-time item total, subtotal, and tax calculations",
        "Print-optimized stylesheet for crisp PDF generation",
        "Clean, responsive interface with editable client fields"
      ]
    },
    {
      id: "us-state-capitals-quiz",
      title: "US State Capitals Quiz",
      category: "web",
      featured: true,
      badge: "Interactive Quiz",
      tagline: "Interactive educational quiz application for testing US state capitals knowledge.",
      description: "A fast-paced geography quiz game where players test their knowledge of all 50 US state capitals with score tracking and instant feedback.",
      longDescription: "Features randomized question pools, score tracking, timed answer options, high score persistence, and interactive review of incorrect answers.",
      repoUrl: "https://github.com/sarwesv/US-state-capitals-quiz",
      demoUrl: "https://sarwesv.github.io/US-state-capitals-quiz/",
      image: "assets/images/us_state_capitals_quiz.png",
      tags: ["JavaScript", "HTML5", "CSS3", "Quiz", "Geography"],
      metrics: [
        { label: "Questions", value: "50 States" },
        { label: "Feedback", value: "Instant" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "Randomized state questions with 4 multiple-choice options",
        "Instant visual indicators for correct and incorrect answers",
        "Final score breakdown and retry capabilities"
      ]
    },
    {
      id: "driving-sim",
      title: "Drive - Driving Simulator",
      category: "web",
      featured: true,
      badge: "Physics Simulation",
      tagline: "2D driving simulator web app featuring physics vectors and traffic logic.",
      description: "Interactive browser driving simulator with vehicle controls, traffic AI steering, collision detection, and customizable road layouts.",
      longDescription: "Built with modular physics scripts (physics.js, traffic.js, audio.js) for realistic acceleration, turning friction, and autonomous vehicle steering.",
      repoUrl: "https://github.com/sarwesv/portfolio",
      demoUrl: "https://sarwesv.github.io/portfolio/",
      image: "assets/images/drive.png",
      tags: ["JavaScript", "HTML5 Canvas", "Physics Vector", "Traffic AI", "Game Dev"],
      metrics: [
        { label: "Physics Engine", value: "Custom Vector" },
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Audio", value: "Engine Sound FX" }
      ],
      features: [
        "Vehicle physics model with acceleration, braking, and drift vectors",
        "Autonomous traffic AI steering and obstacle avoidance",
        "Synthesized Web Audio engine sound effects and collision sounds"
      ]
    },
    {
      id: "rocket-sim",
      title: "Rocket Flight Simulator",
      category: "web",
      featured: false,
      badge: "Simulation",
      tagline: "Interactive rocket launch and orbital mechanics flight simulator.",
      description: "Spaceflight simulator modeling rocket thrust, gravity vectors, fuel consumption, and flight trajectory telemetries.",
      longDescription: "Features live velocity graphs, fuel gauge displays, staging controls, and orbital altitude tracking.",
      repoUrl: "https://github.com/sarwesv/portfolio",
      demoUrl: "https://sarwesv.github.io/portfolio/",
      image: "assets/images/rocket_simulator.png",
      tags: ["JavaScript", "HTML5 Canvas", "Orbital Mechanics", "Physics"],
      metrics: [
        { label: "Telemetry", value: "Real-time" },
        { label: "Physics", value: "Gravity & Thrust" }
      ],
      features: [
        "Real-time flight telemetry readout (altitude, velocity, acceleration)",
        "Fuel burn control and thrust vector adjustment"
      ]
    },
    {
      id: "screen-time-blocker",
      title: "Screen Time Blocker",
      category: "devtools",
      featured: false,
      badge: "Productivity App",
      tagline: "Distraction blocker and screen time tracker for focused work sessions.",
      description: "Productivity tool designed to limit distracting applications, track active work sessions, and encourage focused deep work.",
      longDescription: "Features configurable session timers, site/app blocking schedules, and weekly screen time reports.",
      repoUrl: "https://github.com/sarwesv/portfolio",
      demoUrl: "https://sarwesv.github.io/portfolio/",
      image: "assets/images/screen_time_blocker.png",
      tags: ["Swift", "SwiftUI", "HTML5", "Productivity", "Timer"],
      metrics: [
        { label: "Platform", value: "macOS / Web" },
        { label: "Focus Timer", value: "Pomodoro & Custom" }
      ],
      features: [
        "Customizable work and break interval timers",
        "Visual progress charts for daily focus goals"
      ]
    },
    {
      id: "capital-quiz",
      title: "Capital Quiz",
      category: "web",
      featured: false,
      badge: "Educational",
      tagline: "World and state capital quiz game with score leaderboard.",
      description: "Engaging quiz game testing capital city knowledge with interactive visual cards and progress indicators.",
      longDescription: "Test your trivia skills across world and national capital cities. Simple, intuitive UI designed for fast mobile and desktop play.",
      repoUrl: "https://github.com/sarwesv/Capitalquiz",
      demoUrl: "https://sarwesv.github.io/Capitalquiz/",
      image: "assets/images/capital_quiz.png",
      tags: ["JavaScript", "HTML5", "CSS3", "Trivia"],
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
      image: "assets/images/lofi.png",
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
      image: "assets/images/game_2048.png",
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
      image: "assets/images/snake.png",
      tags: ["JavaScript", "HTML5 Canvas", "Game Dev", "Retro"],
      metrics: [
        { label: "Renderer", value: "2D Canvas" },
        { label: "Deploy", value: "GitHub Pages" }
      ],
      features: [
        "HTML5 2D Canvas rendering loop",
        "High score tracking and speed level progression"
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
      description: "Published 10+ web applications, developer tools, and interactive games hosted on GitHub Pages."
    }
  ]
};
