/**
 * Projects shown on the site.
 * - liveUrl: your *public* demo (e.g. after deploying on Render/Railway/Fly.io). Not localhost.
 * - featured / sortOrder: featured items first; lower sortOrder comes first within each group.
 * - image: path or URL to a screenshot (e.g. images/wedding-preview.png).
 */
window.PORTFOLIO_PROJECTS = [
  {
    title: "Web-based Wedding Reservation and Booking System",
    description:
      "A full-stack wedding reservation system using Spring Boot, Thymeleaf, and MySQL. Users browse packages and venues, make reservations, leave reviews, and complete payments; admins and staff get role-based tools to run operations.",
    tags: ["Spring Boot", "Thymeleaf", "MySQL", "Java"],
    liveUrl: "",
    repoUrl: "https://github.com/Ashennisal/wedding_reservation",
    image: "images/wedding-preview.png",
    imageAlt: "Wedding reservation system screenshot",
    featured: true,
    sortOrder: 1,
  },
  {
    title: "Real Estate Agent Finder and Appointment System",
    description:
      "A web app that connects buyers and sellers with real estate agents: search and filter agents, view profiles, and book appointments through a straightforward interface. Built to practice full-stack flow from UI to persistence.",
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    liveUrl: "",
    repoUrl: "https://github.com/Ashennisal/Real-State-Agent-Finder-and-Appointment-System-main",
    image: "images/real-estate-preview.png",
    imageAlt: "Real estate agent finder screenshot",
    featured: false,
    sortOrder: 2,
  },
  {
    title: "AI Legal Analyzer",
    description:
      "Exploration of document-oriented workflows: ingestion, structured outputs, and review-oriented tooling. In progress — links will go live once the demo and repository are published.",
    tags: ["Python", "AI", "APIs"],
    liveUrl: "",
    repoUrl: "",
    image: "images/legal-preview.png",
    imageAlt: "AI legal analyzer preview",
    featured: false,
    sortOrder: 3,
  },
];
