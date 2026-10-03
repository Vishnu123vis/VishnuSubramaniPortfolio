export interface Project {
  title: string;
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
    title: "Keyfortly",
    tagline: "property management for five businesses and three landlords. rent, leases, maintenance, and Ontario LTB paperwork",
    description: "Property-management SaaS built and operated end to end.",
    period: "Ongoing",
    technologies: ["React", "TypeScript", "AWS", "DynamoDB"],
    features: ["Rent and tenant management", "Leases and e-signing", "Maintenance tracking"],
    live: "https://keyfortly.com/",
  },
  {
    title: "Keyfortly Agent",
    tagline: "turns tenant messages into maintenance cases, with manager approvals, human takeover, and an audit trail. in development",
    description: "An AI operations assistant for property managers, currently in private development.",
    period: "Ongoing",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Twilio", "AWS CDK"],
    features: ["Tenant message intake", "Approval-controlled follow-ups", "Operations dashboard"],
  },
  {
    title: "Findr",
    tagline:
      "hackathon team matching — gemini resume parsing, swipe flow, fastapi + mongodb",
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
