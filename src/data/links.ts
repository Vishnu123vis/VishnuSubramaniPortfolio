/** Add your public Figma profile or file URL when you have one; icon is hidden if empty. */
export const personalInfo = {
  name: "Vishnu Subramani",
  website: "https://vishnus.online",
  email: "v5subram@uwaterloo.ca",
  linkedin: "https://www.linkedin.com/in/vishnusubramani/",
  github: "https://github.com/Vishnu123vis",
  phone: "437-231-4480",
  resumePath: "/resume.pdf",
  /** e.g. https://www.figma.com/@yourusername — leave blank to hide the Figma icon */
  figma: "",
};

export type SocialLink = {
  name: string;
  url: string;
  icon: "linkedin" | "github" | "email" | "website" | "resume" | "figma";
};

export function getSocialLinks(): SocialLink[] {
  const links: SocialLink[] = [
    { name: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" },
    { name: "GitHub", url: personalInfo.github, icon: "github" },
    { name: "Email", url: `mailto:${personalInfo.email}`, icon: "email" },
    { name: "Website", url: personalInfo.website, icon: "website" },
    { name: "Resume PDF", url: personalInfo.resumePath, icon: "resume" },
  ];
  if (personalInfo.figma) {
    links.push({ name: "Figma", url: personalInfo.figma, icon: "figma" });
  }
  return links;
}
