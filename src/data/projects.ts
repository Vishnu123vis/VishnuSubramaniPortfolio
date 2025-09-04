export interface Project {
  title: string;
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
    period: "Mar 2025",
    description: "Hackathon team matchmaking platform with AI-driven profiles",
    technologies: ["Python", "React", "FastAPI", "MongoDB", "Gemini AI", "Google Vision", "PyPDF2", "OAuth 2.0"],
    features: [
      "Resume parsing via Gemini + Vision + PyPDF2",
      "Real-time swipe matching with FastAPI + MongoDB",
      "AI-driven profile matching"
    ],
    github: "https://github.com/Vishnu123vis/Findr"
  },
  {
    title: "Serverless E-commerce App",
    period: "May 2025",
    description: "Full-stack serverless e-commerce application with AWS infrastructure",
    technologies: ["TypeScript", "AWS Lambda", "DynamoDB", "Cognito", "SES", "EventBridge"],
    features: [
      "15+ Lambda serverless backend",
      "Single-table DynamoDB schema with GSIs",
      "Cognito-secured APIs, SES order emails"
    ],
    github: "https://github.com/Vishnu123vis/serverless-ecommerce-platform"
  },
  {
    title: "Spotify Playlist Genre Analyzer",
    period: "Sep 2024",
    description: "Analyze and visualize music genres in Spotify playlists",
    technologies: ["JavaScript", "React", "Chart.js", "Spotify API"],
    features: [
      "Analyzed up to 60 songs per playlist",
      "Visualizations with Chart.js",
      "Automated fetching with Axios (manual effort -80%)"
    ],
    github: "https://github.com/Vishnu123vis/spotify-genre-analyzer"
  }
];
