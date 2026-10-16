import type { ReactNode } from "react";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { personalInfo } from "@/data/links";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="link-quiet">{children}</a>;
}

const photos = [
  { src: "/photos/alto-performance.webp", alt: "Playing alto saxophone alongside the band at Waterloo", width: 1200, height: 1009 },
  { src: "/photos/outdoor-jazz.webp", alt: "Playing saxophone with the band at an outdoor performance", width: 700, height: 1505 },
  { src: "/photos/hack-the-north.webp", alt: "With my saxophone and the goose mascot at Hack the North", width: 900, height: 1200 },
];

export default function Home() {
  return (
    <main className="portfolio">
      <header className="intro">
        <div className="identity">
          <div className="name-row">
            <Image src="/signature.png" alt="" width={1024} height={903} className="signature dark:invert" priority />
            <h1>Hey, I&apos;m Vishnu.</h1>
          </div>
          <ThemeToggle />
        </div>
        <p className="education">Management Engineering @ <ExternalLink href="https://uwaterloo.ca/">University of Waterloo</ExternalLink><span className="gpa"> · {education.gpa}</span></p>
        <div className="intro-work">
          <p>AI engineer building agents @ <ExternalLink href="https://www.revvity.com/">Revvity</ExternalLink>.</p>
          <p>Founded <ExternalLink href="https://keyfortly.com/">KeyFortly</ExternalLink>.</p>
          <p>Building <ExternalLink href="https://dispatchient.mistyfrog8.chatgpt.site">Dispatchient</ExternalLink>.</p>
        </div>
        <p className="availability">Looking for 2027 engineering internship at a startup.</p>
      </header>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">What I&apos;ve built</h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.title}>
              <div className="project-name">
                <ExternalLink href={(project.live || project.github)!}>{project.title}</ExternalLink>
                {project.audience && <span className="audience">({project.audience})</span>}
              </div>
              <p>{project.tagline}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <ul className="experience-list">
          {experiences.map((experience) => (
            <li key={`${experience.company}-${experience.period}`}>
              <div>
                <p className="company">{experience.companyUrl ? <ExternalLink href={experience.companyUrl}>{experience.company}</ExternalLink> : experience.company}</p>
                <p className="role">{experience.roleShort}</p>
              </div>
              <span className="period">{experience.period}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading">Away from the keyboard</h2>
        <p className="about-copy">I lead <ExternalLink href="https://www.instagram.com/ghost_notes_official/">Ghost Notes</ExternalLink>, a jazz band where I play alto saxophone. We&apos;ve played at restaurants, coffee shops, and Hack the North.</p>
        <div className="photo-collage">
          {photos.map((photo) => (
            <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View photo: ${photo.alt}`}>
              <Image {...photo} alt={photo.alt} sizes="(max-width: 640px) 45vw, 320px" />
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="stack-heading">
        <h2 id="stack-heading">Tools I work with</h2>
        <dl className="stack-list">
          {([
            ["AI", skills.ai], ["Agents", skills.agents], ["Languages", skills.languages],
            ["Frameworks", skills.frameworks], ["Data", skills.databases], ["Cloud", skills.cloud], ["Tools", skills.tools],
          ] as const).map(([label, items]) => (
            <div key={label}><dt>{label}</dt><dd>{items.join(", ")}</dd></div>
          ))}
        </dl>
      </section>

      <footer>
        <div className="contact">
          <a href={`mailto:${personalInfo.email}`} className="link-quiet">{personalInfo.email}</a>
          <p><a href={`tel:${personalInfo.phone.replace(/\D/g, "")}`} className="link-quiet">{personalInfo.phone}</a><span> · Waterloo, ON</span></p>
        </div>
        <SocialLinks />
      </footer>
    </main>
  );
}
