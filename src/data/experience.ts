export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  achievements: string[];
  technologies?: string[];
  website?: string;
}

export const experiences: Experience[] = [
  {
    title: "AI Software Engineer / Solutions Architect",
    company: "Sun Life Financial",
    location: "Toronto, ON",
    period: "January 2026 – April 2026",
    achievements: [
      "Engineered a RAG pipeline using Amazon Bedrock, Titan V2, and pgvector on RDS PostgreSQL for policy validation.",
      "Built a concurrent AWS Lambda backend in Python with multi-threaded processing, reducing validation time by 70%.",
      "Deployed containerized services on Red Hat OpenShift with nginx, ConfigMaps, and custom OCI container images.",
      "Integrated the validation engine into Spotify Backstage via Confluence API and a React/TypeScript portal plugin.",
    ],
    technologies: [
      "Python",
      "AWS Lambda",
      "Bedrock",
      "PostgreSQL",
      "pgvector",
      "OpenShift",
      "React",
      "TypeScript",
      "Backstage",
    ],
  },
  {
    title: "Backend Developer Intern",
    company: "Serverless Guru",
    location: "Remote · Wilmington, DE",
    period: "May 2025 – August 2025",
    achievements: [
      "Architected and built a scalable backend with AWS Lambda, API Gateway, and DynamoDB, achieving 99.9% uptime.",
      "Improved filtering with DynamoDB overloaded sort keys, cutting query costs by 35% and boosting speed by 60%.",
      "Streamlined infrastructure using the Serverless Framework (v4) with YAML-based IaC, cutting deployment time by 80%.",
      "Authored internal training materials and onboarding docs to improve new engineer ramp-up.",
    ],
    technologies: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Serverless Framework",
    ],
  },
  {
    title: "Software Engineer",
    company: "TEDxUW",
    location: "Waterloo, ON",
    period: "April 2025 – Present",
    achievements: [
      "Built speaker and ticket sales dashboard with Next.js, React, and TypeScript for a responsive, high-traffic-ready UI.",
      "Designed user profile schema with Prisma and Neon PostgreSQL for attendee and sponsor preferences.",
      "Implemented Clerk authentication with Google and Discord, reducing support requests by 30%.",
      "Collaborated in Figma on mockups and components to streamline UI flow across the team.",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Figma"],
  },
  {
    title: "Software Developer",
    company: "MarTechBees",
    location: "Toronto, ON",
    period: "May 2024 – August 2024",
    achievements: [
      "Built a serverless web app for property managers using AWS, reducing workload and cutting costs by 25%.",
      "Developed Lambda + API Gateway backends in TypeScript with full CRUD on DynamoDB (manual entry −80%).",
      "Created dashboards with Recharts in React for unit status and lease trends.",
      "Integrated Stripe for payments via HTTP POST to improve tenant transactions.",
    ],
    technologies: ["TypeScript", "AWS Lambda", "DynamoDB", "Recharts", "Stripe"],
    website: "https://pmbees.com/",
  },
];
