import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { personalInfo } from "@/data/links";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const UW = "https://uwaterloo.ca/";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-quiet"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-14 sm:px-8 sm:pt-20">
      <article className="animate-enter mx-auto max-w-xl">
        <Image
          src="/signature.png"
          alt=""
          width={1024}
          height={903}
          className="h-auto w-[min(13.5rem,88vw)] object-contain object-left"
          priority
        />

        <p className="mt-10 text-[1.35rem] font-medium leading-snug tracking-tight text-neutral-900">
          hey, I&apos;m vishnu
        </p>

        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-neutral-700">
          <p>
            management engineering @{" "}
            <ExternalLink href={UW}>university of waterloo</ExternalLink>
            <span className="text-neutral-500">
              {" "}
              · {education.gpa} · {education.graduationYear.toLowerCase()}
            </span>
          </p>
          <p>
            currently @{" "}
            <ExternalLink href="https://www.linkedin.com/company/tedxuw/">
              tedxuw
            </ExternalLink>
            , shipping speaker &amp; ticket tooling with next.js, prisma, and
            clerk.
          </p>
          <p>
            winter &apos;26 @{" "}
            <ExternalLink href="https://www.sunlife.com/">sun life</ExternalLink>
            — rag + bedrock validation, lambda services, openshift, and a
            backstage plugin.
          </p>
          <p className="text-neutral-600">
            interested in dependable backends, applied ai, and interfaces that
            stay out of the way.
          </p>
        </div>

        <h3
          id="built"
          className="mb-3 mt-14 scroll-mt-24 text-base font-semibold text-neutral-900"
        >
          what i&apos;ve built
        </h3>
        <ul className="list-arrow space-y-2.5 text-[15px] leading-snug text-neutral-800">
          {projects.map((p) => (
            <li key={p.title} className="flex flex-wrap items-baseline gap-x-1">
              <span className="text-neutral-400" aria-hidden>
                ↳
              </span>
              {p.github ? (
                <ExternalLink href={p.github}>{p.title.toLowerCase()}</ExternalLink>
              ) : (
                <span>{p.title.toLowerCase()}</span>
              )}
              <span className="text-neutral-500">— {p.tagline}</span>
            </li>
          ))}
        </ul>

        <h3
          id="previously"
          className="mb-3 mt-14 scroll-mt-24 text-base font-semibold text-neutral-900"
        >
          previously
        </h3>
        <ul className="space-y-4 text-[15px] leading-snug text-neutral-800">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`}>
              <div className="flex flex-wrap items-baseline gap-x-1">
                <span className="text-neutral-400" aria-hidden>
                  ↳
                </span>
                <span>{exp.roleShort}</span>
                <span className="text-neutral-500">@</span>
                {exp.companyUrl ? (
                  <ExternalLink href={exp.companyUrl}>
                    {exp.company.toLowerCase()}
                  </ExternalLink>
                ) : (
                  <span>{exp.company.toLowerCase()}</span>
                )}
                <span className="text-neutral-400">
                  · {exp.period.toLowerCase()}
                </span>
              </div>
              {exp.website && !exp.companyUrl && (
                <p className="ml-4 mt-0.5 text-sm">
                  <ExternalLink href={exp.website}>
                    {exp.website.replace(/^https?:\/\//, "")}
                  </ExternalLink>
                </p>
              )}
              <details className="ml-4 mt-1.5 border-l border-neutral-200 pl-3">
                <summary className="cursor-pointer select-none text-sm text-neutral-500 hover:text-neutral-800">
                  highlights
                </summary>
                <ul className="mt-2 space-y-1.5 text-[14px] leading-relaxed text-neutral-700">
                  {exp.achievements.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                {exp.technologies && exp.technologies.length > 0 && (
                  <p className="mt-2 text-[13px] leading-snug text-neutral-500">
                    {exp.technologies.join(" · ")}
                  </p>
                )}
              </details>
            </li>
          ))}
        </ul>

        <h3
          id="stack"
          className="mb-3 mt-14 scroll-mt-24 text-base font-semibold text-neutral-900"
        >
          stack
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
          <p>
            <span className="text-neutral-500">languages — </span>
            {skills.languages.join(", ")}
          </p>
          <p>
            <span className="text-neutral-500">frameworks — </span>
            {skills.frameworks.join(", ")}
          </p>
          <p>
            <span className="text-neutral-500">data — </span>
            {skills.databases.join(", ")}
          </p>
          <p>
            <span className="text-neutral-500">cloud — </span>
            {skills.cloud.join(", ")}
          </p>
          <p>
            <span className="text-neutral-500">tools — </span>
            {skills.tools.join(", ")}
          </p>
        </div>

        <p className="mt-14 text-[15px] text-neutral-700">
          say hi —{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="link-quiet font-medium"
          >
            {personalInfo.email}
          </a>
          <span className="text-neutral-400"> · </span>
          <a
            href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
            className="link-quiet"
          >
            {personalInfo.phone}
          </a>
          <span className="text-neutral-400"> · </span>
          waterloo, on
        </p>

        <footer className="mt-12 border-t border-neutral-200 pt-8">
          <SocialLinks />
          <p className="mt-6 text-xs text-neutral-400">
            © {new Date().getFullYear()} {personalInfo.name.toLowerCase()}
          </p>
        </footer>
      </article>
    </div>
  );
}
