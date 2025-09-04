export const personalInfo = {
  name: "Vishnu Subramani",
  website: "https://vishnus.online",
  email: "v5subram@uwaterloo.ca",
  linkedin: "https://www.linkedin.com/in/vishnusubramani/",
  github: "https://github.com/Vishnu123vis",
  phone: "437-231-4480",
  resume: "/resume.pdf" // Placeholder for resume download
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "linkedin"
  },
  {
    name: "GitHub", 
    url: personalInfo.github,
    icon: "github"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "email"
  }
];
