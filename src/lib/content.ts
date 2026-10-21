/**
 * Single source of truth for all portfolio content.
 *
 * Everything here comes from Ziad Morad's CV or from details he supplied in
 * the project brief. Do not add achievements, metrics, contributions or
 * experience that cannot be verified. When something is unknown, leave it
 * out or use an explicit placeholder.
 *
 * PRIVACY: never add a phone number anywhere in this project.
 */

export const site = {
  name: "Ziad Morad",
  role: "Software Engineering Student",
  headline: "Aspiring .NET Backend Developer",
  location: "Assiut, Egypt",
  email: "ziadmorad.3182@gmail.com",
  github: "https://github.com/ziadmorad01",
  linkedin: "https://www.linkedin.com/in/ziad-morad",
  /** Filename expected inside /public. See README for how to add it. */
  cvFile: "Ziad-Morad-CV.pdf",
  title:
    "Ziad Morad | Software Engineering Student & Aspiring .NET Backend Developer",
  description:
    "Portfolio of Ziad Morad, a Software Engineering student at Assiut National University focused on backend development with C# and ASP.NET Core, currently in the DEPI Full Stack .NET program. Seeking a .NET internship or junior backend role.",
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  status: "DEPI Full Stack .NET program · in progress",
  tagline: {
    before: "Learning to build backends with ",
    accent: "C# and ASP.NET Core.",
  },
  summary:
    "I'm a Software Engineering student at the Faculty of Computers and Artificial Intelligence, Assiut National University, focused on backend development. I'm currently enrolled in the DEPI Full Stack .NET Development training program and looking for a .NET developer internship or junior backend role.",
};

export const snapshot = [
  { label: "Focus", value: "Backend with C# & ASP.NET Core" },
  { label: "University", value: "Assiut National University (FCAI)" },
  { label: "Expected graduation", value: "July 2027" },
  { label: "Training", value: "DEPI Full Stack .NET · Jul 2026 – present" },
  { label: "Location", value: "Assiut, Egypt" },
  { label: "Looking for", value: ".NET internship or junior backend role" },
] as const;

export const about = {
  paragraphs: [
    "My focus is backend development: the APIs, data and business logic behind an application. I'm studying Software Engineering and training in the DEPI Full Stack .NET Development program, a six-month track covering C#, ASP.NET Core, REST APIs, SQL Server and full-stack development practices.",
    "So far I've built a C# file system console application as a university project, plus two database-driven web applications with user authentication and application workflows: one with a team, one personal. Those two web apps use Python/Flask and Node.js/Express rather than .NET, which is why the skills section below separates what I've used in projects from what I'm learning in training.",
  ],
  aiNote: {
    title: "How I work, stated plainly",
    body: "AI tools played a significant role in building my projects. I don't present them as code I wrote entirely on my own, and I don't claim specific individual contributions. They're listed for what they are: their goals, features and technologies, and what I'm using them to learn.",
  },
};

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const projectSkills = [
  {
    project: "Virtual Disk / FAT File System",
    kind: "University project",
    items: ["C#", "Object-Oriented Programming", "File I/O"],
  },
  {
    project: "SkyReserve",
    kind: "Team project",
    items: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "Flask-Login",
      "Tailwind CSS",
    ],
  },
  {
    project: "FireGrill",
    kind: "Personal project",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "bcryptjs", "JavaScript"],
  },
];

export const trainingSkills = {
  items: [
    "C#",
    "ASP.NET Core (Web API, MVC)",
    "REST APIs",
    "SQL Server",
    "SQL",
    "Full-stack practices",
  ],
  goal: "Entity Framework Core",
};

export const foundationSkills = {
  items: ["C++", "Java", "React.js", "HTML", "CSS", "Git", "GitHub"],
  note: "Listed on my CV. They are not used in the projects shown on this page, so I don't claim project experience with them.",
};

/**
 * The honest .NET picture: where each core technology stands.
 * `project`: evidence in a project. `training`: covered by DEPI per the CV.
 */
export const dotnetEvidence = [
  {
    tech: "C#",
    project: {
      status: "used",
      text: "Virtual Disk / FAT File System (university console app)",
    },
    training: { status: "yes", text: "Covered in DEPI" },
  },
  {
    tech: "ASP.NET Core",
    project: { status: "none", text: "Not used in a project yet" },
    training: { status: "yes", text: "Covered in DEPI" },
  },
  {
    tech: "SQL Server",
    project: {
      status: "none",
      text: "Not yet. My web projects use SQLite and MongoDB",
    },
    training: { status: "yes", text: "Covered in DEPI" },
  },
  {
    tech: "REST APIs",
    project: {
      status: "partial",
      text: "REST-style endpoints in FireGrill (Node.js / Express)",
    },
    training: { status: "yes", text: "Covered in DEPI" },
  },
  {
    tech: "Entity Framework Core",
    project: { status: "none", text: "Not used in a project yet" },
    training: {
      status: "goal",
      text: "Not listed in my CV's training. A personal learning goal",
    },
  },
] as const;

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  kind: "University project" | "Team project" | "Personal project";
  goal: string;
  features: string[];
  stack: string[];
  learning: string;
  /** Path inside /public, e.g. "/images/projects/skyreserve.png". Leave null to show a placeholder. */
  screenshot: string | null;
  repo: { url: string; label: string } | null;
  repoNote: string;
};

export const projects: Project[] = [
  {
    id: "virtual-disk",
    title: "Virtual Disk / FAT File System",
    subtitle: "C# console application",
    kind: "University project",
    goal: "A C# console application built around a FAT file system, supporting the creation of files and directories and file-related operations.",
    features: ["Create files and directories", "File-related operations"],
    stack: ["C#", "OOP", "File I/O"],
    learning:
      "Object-oriented programming and file I/O in C#, the closest project to my .NET training.",
    screenshot: null,
    repo: null,
    repoNote: "Repository link not added yet.",
  },
  {
    id: "skyreserve",
    title: "SkyReserve",
    subtitle: "Flight reservation & fleet management platform",
    kind: "Team project",
    goal: "A collaborative platform covering the booking lifecycle, from flight discovery and availability to booking history and e-tickets.",
    features: [
      "Flight discovery and availability",
      "Dynamic pricing",
      "User authentication",
      "Booking history",
      "PNG e-ticket generation",
      "Admin fleet management and dashboard",
      "Booking approval workflow",
      "Responsive interface",
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "SQLite", "Flask-Login", "Tailwind CSS"],
    learning:
      "How a booking workflow, user authentication and an admin approval flow fit together in a database-backed web application.",
    screenshot: null,
    repo: {
      url: "https://github.com/Emad-Ahmed6699/SkyReserve-Flask",
      label: "View repository",
    },
    repoNote: "Hosted under the team's GitHub account.",
  },
  {
    id: "firegrill",
    title: "FireGrill",
    subtitle: "Restaurant ordering system",
    kind: "Personal project",
    goal: "A full-stack restaurant ordering application covering the customer journey from browsing the menu to checkout.",
    features: [
      "User registration and login with password hashing",
      "Menu browsing and search",
      "Category filtering",
      "Shopping cart",
      "Checkout and order creation",
      "Simulated delivery tracking",
      "MongoDB data persistence",
      "REST-style API endpoints",
      "Responsive interface",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "bcryptjs", "JavaScript"],
    learning:
      "Building REST-style endpoints, hashing passwords and persisting an order flow in MongoDB.",
    screenshot: null,
    repo: null,
    repoNote: "No public repository yet.",
  },
];

/* ------------------------------------------------------------------ */
/* Journey & education                                                 */
/* ------------------------------------------------------------------ */

export const journey = [
  {
    when: "Oct 2023",
    title: "Started B.Sc. in Software Engineering",
    body: "Faculty of Computers and Artificial Intelligence, Assiut National University. Expected graduation: July 2027.",
    state: "ongoing",
  },
  {
    when: "Hands-on projects",
    title: "Three projects across three stacks",
    body: "A C# file system console app, a team-built Flask web app, and a personal Node.js ordering app.",
    state: "done",
  },
  {
    when: "Jul 2026 – present",
    title: "DEPI Full Stack .NET Development",
    body: "A six-month training program covering C#, ASP.NET Core, REST APIs, SQL Server and full-stack practices. It is a training program, not employment.",
    state: "ongoing",
  },
  {
    when: "Goal",
    title: ".NET internship or junior backend role",
    body: "Applying what I'm learning in DEPI to real .NET work.",
    state: "goal",
  },
] as const;

export const education = {
  degree: {
    title: "B.Sc. in Software Engineering",
    school: "Faculty of Computers and Artificial Intelligence, Assiut National University",
    place: "Assiut, Egypt",
    dates: "Oct 2023 – Jul 2027 (expected)",
    status: "Currently studying",
  },
  training: {
    title: "Full Stack .NET Development",
    school: "Digital Egypt Pioneers Initiative (DEPI)",
    dates: "Jul 2026 – present",
    format: "Six-month training program",
    status: "In progress",
    body: "Structured training track covering C#, ASP.NET Core, REST APIs, SQL Server and full-stack development practices.",
  },
};

export const contact = {
  heading: "Let's talk.",
  body: "I'm looking for a .NET developer internship or junior backend role. The best way to reach me is email or LinkedIn.",
};
