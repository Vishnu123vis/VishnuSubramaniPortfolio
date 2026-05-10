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
  {
    title: "Serverless E-commerce Platform",
    tagline:
      "full checkout on aws — 15+ lambdas, single-table dynamodb, cognito + ses",
    period: "May 2025",
    description: "Full-stack serverless e-commerce application with AWS infrastructure",
    technologies: [
      "TypeScript",
      "AWS Lambda",
      "DynamoDB",
      "Cognito",
      "SES",
      "EventBridge",
    ],
    features: [
      "15+ Lambda serverless backend",
      "Single-table DynamoDB schema with GSIs",
      "Cognito-secured APIs, SES order emails",
    ],
    github: "https://github.com/Vishnu123vis/serverless-ecommerce-platform",
  },
  {
    title: "Spotify Playlist Genre Analyzer",
    tagline: "playlist genre charts with chart.js + spotify web api",
    period: "Sep 2024",
    description: "Analyze and visualize music genres in Spotify playlists",
    technologies: ["JavaScript", "React", "Chart.js", "Spotify API"],
    features: [
      "Analyzed up to 60 songs per playlist",
      "Visualizations with Chart.js",
      "Automated fetching with Axios (manual effort -80%)",
    ],
    github: "https://github.com/Vishnu123vis/spotify-genre-analyzer",
  },
];
