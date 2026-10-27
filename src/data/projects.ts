export interface Project {
  title: string;
  audience?: string;
  /** One line for the minimal ↳ list */
  tagline: string;
  description: string;
  technologies: string[];
  period: string;
  github?: string;
  live?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    title: "KeyFortly",
    audience: "users: 40 landlords · 5 businesses",
    tagline: "End-to-end property management for Ontario landlords, from leases and rent to maintenance.",
    description: "Property-management SaaS built and operated end to end.",
    period: "Ongoing",
    technologies: ["React", "TypeScript", "AWS", "DynamoDB"],
    features: ["Rent and tenant management", "Leases and e-signing", "Maintenance tracking"],
    live: "https://keyfortly.com/",
  },
  {
    title: "Dispatchient",
    tagline: "AI-powered maintenance coordination, from tenant messages to structured cases, with human oversight and an audit trail.",
    description: "A standalone AI-powered maintenance coordination platform for landlords and property managers.",
    period: "Ongoing",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Twilio", "AWS CDK"],
    features: ["Tenant text and photo intake", "Policy-controlled coordination and human review", "Separate tenant and provider conversations", "Operations dashboard and audit trail"],
    live: "https://dispatchient.com",
  },
  {
    title: "Findr",
    tagline:
      "Hackathon team matching with AI-powered profiles, resume parsing, and a swipe-based matching flow.",
    period: "Mar 2025",
    description: "Hackathon team matchmaking platform with AI-driven profiles",
    technologies: [
      "Python",
      "React",
      "FastAPI",
      "MongoDB",
      "Gemini AI",
      "Google Vision",
      "PyPDF2",
      "OAuth 2.0",
    ],
    features: [
      "Resume parsing via Gemini + Vision + PyPDF2",
      "Real-time swipe matching with FastAPI + MongoDB",
      "AI-driven profile matching",
    ],
    github: "https://github.com/Vishnu123vis/Findr",
  },
];
