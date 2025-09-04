export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies?: string[];
  website?: string;
}

export const experiences: Experience[] = [
  {
    title: "Backend Developer Intern",
    company: "Serverless Guru",
    period: "May 2025 – Present",
    achievements: [
      "Built backend with AWS Lambda, API Gateway, DynamoDB (99.9% uptime)",
      "Improved DynamoDB sort key filtering (cost -35%, speed +60%)",
      "Streamlined infra with Serverless Framework v4 (deploy time -80%)",
      "Authored onboarding docs/training"
    ],
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless Framework"]
  },
  {
    title: "Software Engineer",
    company: "TEDxUW",
    period: "Apr 2025 – Present",
    achievements: [
      "Built ticket/speaker dashboard with Next.js + TS",
      "Schema with Prisma + Neon PostgreSQL",
      "Clerk auth with Google + Discord (support requests -30%)",
      "Figma collaboration for UI"
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk"],
    website: "Website in progress"
  },
  {
    title: "Software Developer",
    company: "MarTechBees",
    period: "May – Aug 2024",
    achievements: [
      "Serverless property manager app (workload/cost -25%)",
      "Lambda + API Gateway backend in TS",
      "CRUD with DynamoDB (manual entry -80%)",
      "Dashboards with Recharts",
      "Stripe API for payments"
    ],
    technologies: ["TypeScript", "AWS Lambda", "DynamoDB", "Recharts", "Stripe"],
    website: "https://pmbees.com/"
  },
  {
    title: "Lead Programming Instructor",
    company: "Code Ninjas",
    period: "May – Aug 2023",
    achievements: [
      "Led coding camps (ages 5–18)",
      "Designed/taught Web Dev Camp (100+ students)",
      "Projects like portfolios + games, retention +80%"
    ],
    technologies: ["Web Development", "Teaching", "Curriculum Design"]
  }
];
