import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { personalInfo } from "@/data/links";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const nav = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
      <header className="mb-14 flex flex-col gap-6 border-b border-stone-200 pb-8 sm:mb-16 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="#"
          className="text-sm font-medium tracking-tight text-stone-900"
        >
          {personalInfo.name.split(" ")[0]} Subramani
        </Link>
        <nav
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600"
          aria-label="Page sections"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="flex flex-1 flex-col gap-20 sm:gap-24">
        <section className="flex flex-col items-center text-center" aria-label="Introduction">
          <Image
            src="/signature.png"
            alt="Signature"
            width={280}
            height={96}
            className="mb-8 h-auto w-48 object-contain sm:w-56"
            priority
          />
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
            Management Engineering
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
            {personalInfo.name}
          </h1>
          <p className="max-w-md text-base leading-relaxed text-stone-600">
            I build reliable software and cloud systems—backend, data, and
            product-facing tools—with a focus on clarity and maintainability.
          </p>
        </section>

        <section id="about" className="scroll-mt-28">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            About
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-stone-700">
            <p>
              I&apos;m studying{" "}
              <span className="text-stone-900">{education.degree}</span> at the{" "}
              {education.school}, with coursework and projects spanning
              full-stack development, cloud architecture, and analytics.
            </p>
            <p>
              Most recently I&apos;ve worked on AI validation pipelines,
              serverless backends, and event-tech platforms—always aiming for
              systems that are straightforward to operate and easy for others to
              extend.
            </p>
          </div>
        </section>

        <section id="education" className="scroll-mt-28">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Education
          </h2>
          <div className="border-l-2 border-stone-200 pl-5">
            <p className="font-medium text-stone-900">{education.degree}</p>
            <p className="mt-1 text-sm text-stone-600">{education.school}</p>
            <p className="mt-2 text-sm text-stone-600">
              {education.graduationYear} · GPA {education.gpa}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-stone-600">
              {education.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28">
          <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Experience
          </h2>
          <ul className="space-y-12">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.period}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <p className="font-medium text-stone-900">{exp.title}</p>
                    <p className="text-sm text-stone-700">
                      {exp.company}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm tabular-nums text-stone-500">
                    {exp.period}
                  </p>
                </div>
                {exp.website && (
                  <p className="mt-1 text-sm">
                    {exp.website.startsWith("http") ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900"
                      >
                        {exp.website.replace(/^https?:\/\//, "")}
                      </a>
                    ) : (
                      <span className="text-stone-600">{exp.website}</span>
                    )}
                  </p>
                )}
                <ul className="mt-4 list-inside list-disc space-y-2 text-[15px] leading-relaxed text-stone-700 marker:text-stone-400">
                  {exp.achievements.map((line) => (
                    <li key={line} className="pl-1">
                      <span className="-ml-1">{line}</span>
                    </li>
                  ))}
                </ul>
                {exp.technologies && exp.technologies.length > 0 && (
                  <p className="mt-4 text-sm leading-snug text-stone-500">
                    {exp.technologies.join(" · ")}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="scroll-mt-28">
          <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Projects
          </h2>
          <ul className="space-y-10">
            {projects.map((project) => (
              <li key={project.title}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-medium text-stone-900">{project.title}</p>
                  <p className="text-sm tabular-nums text-stone-500">
                    {project.period}
                  </p>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-stone-700">
                  {project.description}
                </p>
                <p className="mt-3 text-sm text-stone-500">
                  {project.technologies.join(" · ")}
                </p>
                {project.github && (
                  <p className="mt-2 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900"
                    >
                      Code on GitHub
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="scroll-mt-28">
          <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Technical skills
          </h2>
          <dl className="space-y-6 text-[15px] leading-relaxed text-stone-700">
            <div>
              <dt className="mb-1 text-sm font-medium text-stone-900">
                Languages
              </dt>
              <dd>{skills.languages.join(", ")}</dd>
            </div>
            <div>
              <dt className="mb-1 text-sm font-medium text-stone-900">
                Frameworks & libraries
              </dt>
              <dd>{skills.frameworks.join(", ")}</dd>
            </div>
            <div>
              <dt className="mb-1 text-sm font-medium text-stone-900">
                Databases
              </dt>
              <dd>{skills.databases.join(", ")}</dd>
            </div>
            <div>
              <dt className="mb-1 text-sm font-medium text-stone-900">
                Cloud & infrastructure
              </dt>
              <dd>{skills.cloud.join(", ")}</dd>
            </div>
            <div>
              <dt className="mb-1 text-sm font-medium text-stone-900">
                Tools & platforms
              </dt>
              <dd>{skills.tools.join(", ")}</dd>
            </div>
          </dl>
        </section>

        <section id="contact" className="scroll-mt-28">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Contact
          </h2>
          <p className="text-[15px] leading-relaxed text-stone-700">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-500"
            >
              {personalInfo.email}
            </a>
            <span className="text-stone-400"> · </span>
            <a
              href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
              className="text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-500"
            >
              {personalInfo.phone}
            </a>
            <span className="text-stone-400"> · </span>
            Waterloo, ON
          </p>
        </section>
      </main>

      <footer className="mt-24 border-t border-stone-200 pt-10">
        <SocialLinks />
        <p className="mt-8 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </footer>
    </div>
  );
}
