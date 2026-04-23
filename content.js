/** Site copy and structured sections — edit values below, no build step required. */
window.PORTFOLIO_SITE = {
  /** Public PDF for your CV; same folder as index.html, e.g. "cv.pdf". Leave "" to hide CV links. */
  cvUrl: "cv.pdf",

  name: "Ashen Nisal",
  tagline: "I build high-performance full-stack apps with Java and Spring Boot.",
  heroEyebrow: "Hello — I build things for the web",
  heroLead: "Currently specializing in AI at SLIIT. I bridge the gap between complex backend logic and intuitive user experiences.",

  about: {
    paragraphs: [
      "👋 **Currently specialized in AI at SLIIT.** I enjoy turning requirements into working systems—whether that’s search and booking flows, role-based admin areas, or tying a front end to a Spring Boot API and MySQL.",
      "Outside of coursework, I'm passionate about exploring how **Generative AI** can be integrated into full-stack architecture. I’m open to internships and junior roles where I can keep shipping real software."
    ],
  },

  skills: [
    { label: "Frontend", items: ["HTML", "CSS", "Thymeleaf", "Responsive layouts"] },
    { label: "Backend & data", items: ["Java", "Spring Boot", "REST-style endpoints", "MySQL", "Auth & roles"] },
    { label: "Practices", items: ["Git", "GitHub", "Team-ready structure", "Testing mindset", "Documentation"] },
  ],

  experience: [
    {
      role: "Undergraduate in Information Technology specialized in Artificial Intelligence",
      org: "Sri Lanka Institute of Information Technology",
      period: "2024 — Present",
      summary:
        "Coursework and full-stack projects emphasizing web applications, databases, and object-oriented design. Recent work includes agent finder and wedding reservation systems with real user journeys.",
      highlights: [
        "Real Estate Agent Finder: search, profiles, and appointment scheduling in a web UI backed by Java.",
        "Wedding Reservation System: packages, bookings, reviews, payments, and admin/staff tools with Spring Boot and MySQL.",
      ],
    },
  ],

  contact: {
    email: "ashenath006@gmail.com",
    intro: "Open to internships, junior developer roles, and interesting project collaborations.",
    social: [
      { label: "GitHub", href: "https://github.com/Ashennisal" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ashen-nisal-435295317" },
    ],
  },
};
