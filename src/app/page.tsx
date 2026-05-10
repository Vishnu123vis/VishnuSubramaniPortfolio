import type { ReactNode } from "react";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
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
  children: ReactNode;
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
    <div className="min-h-screen px-5 pb-28 pt-12 sm:px-8 sm:pb-32 sm:pt-16">
      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <article className="animate-enter mx-auto max-w-xl text-pretty">
        <section aria-label="Introduction">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
            <div className="order-2 min-w-0 flex-1 space-y-6 sm:order-1">
              <p className="text-fg text-[1.4rem] font-medium leading-snug tracking-tight">
                hey, I&apos;m vishnu
              </p>
              <div className="text-body space-y-4 text-[15px] leading-relaxed">
                <p>
                  management engineering @{" "}
                  <ExternalLink href={UW}>university of waterloo</ExternalLink>
                  <span className="text-muted">
                    {" · "}
                    {education.gpa}
                    {" · "}
                    {education.graduationYear.toLowerCase()}
                  </span>
                </p>
                <p>
                  currently looking for a{" "}
                  <span className="text-fg">summer &apos;26 swe internship</span>
                  {" — "}backend, cloud, or applied ai. open to remote and
                  toronto/waterloo.
                </p>
                <p>
                  winter &apos;26 @{" "}
                  <ExternalLink href="https://www.sunlife.com/">
                    sun life
                  </ExternalLink>
                  {" — "}rag + bedrock validation, lambda services, openshift,
                  and a backstage plugin.
                </p>
                <p className="text-muted">
                  interested in dependable backends, applied ai, and interfaces
                  that stay out of the way.
                </p>
              </div>
            </div>
            <Image
              src="/signature.png"
              alt=""
              width={1024}
              height={903}
              className="order-1 h-auto w-[4.75rem] shrink-0 object-contain object-left dark:invert dark:opacity-90 sm:order-2 sm:mt-1 sm:w-[6rem]"
              priority
            />
          </div>
        </section>

        <section id="built" className="section">
          <h3 className="section-title">what i&apos;ve built</h3>
          <ul className="list-arrow text-body space-y-3 text-[15px] leading-snug">
            {projects.map((p) => (
              <li key={p.title} className="min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-1.5">
                  <span className="inline-flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-soft" aria-hidden>
                      ↳
                    </span>
                    {p.github ? (
                      <ExternalLink href={p.github}>
                        {p.title.toLowerCase()}
                      </ExternalLink>
                    ) : (
                      <span className="text-fg">{p.title.toLowerCase()}</span>
                    )}
                  </span>
                  <span className="text-muted break-words">
                    — {p.tagline}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="previously" className="section">
          <h3 className="section-title">previously</h3>
          <ul className="text-body space-y-4 text-[15px] leading-snug">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.period}`} className="min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div className="min-w-0 flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-soft" aria-hidden>
                      ↳
                    </span>
                    <span className="text-fg">{exp.roleShort}</span>
                    <span className="text-muted">@</span>
                    {exp.companyUrl ? (
                      <ExternalLink href={exp.companyUrl}>
                        {exp.company.toLowerCase()}
                      </ExternalLink>
                    ) : (
                      <span>{exp.company.toLowerCase()}</span>
                    )}
                  </div>
                  <span className="text-muted shrink-0 text-[13.5px] tabular-nums sm:text-sm">
                    {exp.period.toLowerCase()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="stack" className="section">
          <h3 className="section-title">stack</h3>
          <dl className="text-body space-y-3 text-[15px] leading-relaxed">
            {(
              [
                ["languages", skills.languages],
                ["frameworks", skills.frameworks],
                ["data", skills.databases],
                ["cloud", skills.cloud],
                ["tools", skills.tools],
              ] as const
            ).map(([label, items]) => (
              <div
                key={label}
                className="grid grid-cols-1 gap-x-4 sm:grid-cols-[6.5rem_1fr]"
              >
                <dt className="text-muted">{label}</dt>
                <dd className="break-words">{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="section">
          <h3 className="section-title">say hi</h3>
          <p className="text-body text-[15px] leading-relaxed">
            <a
              href={`mailto:${personalInfo.email}`}
              className="link-quiet text-fg font-medium"
            >
              {personalInfo.email}
            </a>
            <span className="text-soft"> · </span>
            <a
              href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
              className="link-quiet"
            >
              {personalInfo.phone}
            </a>
            <span className="text-soft"> · </span>
            waterloo, on
          </p>
        </section>

        <footer className="border-line-soft mt-14 border-t pt-9">
          <SocialLinks />
          <p className="text-soft mt-7 text-xs">
            © {new Date().getFullYear()} {personalInfo.name.toLowerCase()}
          </p>
        </footer>
      </article>
    </div>
  );
}
