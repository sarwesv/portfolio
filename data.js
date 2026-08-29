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
      badge: "Featured App",
      tagline: "VaultCraft Smart Savings Planner & Goal Tracker.",
      description: "Simple, fun savings goal planner and tracker designed for tracking savings goals, deposits, and growth targets.",
      longDescription: "VaultCraft is a web application allowing users to track savings goals, log deposits, set growth targets, and manage activity logs with privacy controls.",
      repoUrl: "https://github.com/sarwesv/invoice",
      demoUrl: "https://sarwesv.github.io/invoice/",
      image: "assets/images/invoice.svg",
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
