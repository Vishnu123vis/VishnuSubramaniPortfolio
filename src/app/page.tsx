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

const SECTION_HEAD = "mb-4 text-[13.5px] font-medium text-muted sm:text-[14px]";

export default function Home() {
  return (
    <div className="min-h-svh px-6 py-7 sm:px-10 sm:py-9 md:h-svh md:overflow-hidden lg:py-10">
      <div className="fixed right-5 top-5 z-40 sm:right-7 sm:top-7">
        <ThemeToggle />
      </div>

      <article className="animate-enter mx-auto flex h-full w-full max-w-6xl flex-col gap-7 lg:gap-9">
        <header className="flex items-start gap-5 sm:gap-8">
          <Image
            src="/signature.png"
            alt=""
            width={1024}
            height={903}
            className="h-auto w-[3.25rem] shrink-0 object-contain object-left dark:invert sm:w-[4rem] lg:w-[4.5rem]"
            priority
          />
          <div className="min-w-0 flex-1 space-y-1.5">
            <p className="text-fg text-[1.45rem] font-medium leading-tight tracking-tight sm:text-[1.7rem] lg:text-[1.95rem]">
              hey, I&apos;m vishnu
            </p>
            <p className="text-body text-[13.5px] leading-relaxed sm:text-[14.5px]">
              management engineering @{" "}
              <ExternalLink href={UW}>university of waterloo</ExternalLink>
              <span className="text-muted">
                {" · "}
                {education.gpa}
                {" · "}
                {education.graduationYear.toLowerCase()}
              </span>
            </p>
            <p className="text-body text-[13.5px] leading-relaxed sm:text-[14.5px]">
              currently looking for a{" "}
              <span className="text-fg">fall &apos;26 swe internship</span>
              {" — "}backend, cloud, or applied ai.
            </p>
          </div>
        </header>

        <main className="grid min-h-0 flex-1 grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <section className="min-w-0">
            <h3 className={SECTION_HEAD}>what i&apos;ve built</h3>
            <ul className="list-arrow text-body space-y-3.5 text-[13.5px] leading-snug sm:text-[14px]">
              {projects.map((p) => (
                <li key={p.title} className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-1.5">
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
                  </div>
                  <p className="text-muted ml-4 mt-0.5 text-[12.5px] leading-snug">
                    {p.tagline}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-line-soft min-w-0 md:border-l md:pl-8 lg:pl-12">
            <h3 className={SECTION_HEAD}>previously</h3>
            <ul className="text-body space-y-3.5 text-[13.5px] leading-snug sm:text-[14px]">
              {experiences.map((exp) => (
                <li key={`${exp.company}-${exp.period}`} className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-1.5">
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
                  <p className="text-muted ml-4 mt-0.5 text-[12.5px] tabular-nums">
                    {exp.period.toLowerCase()}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-line-soft min-w-0 md:border-l md:pl-8 lg:pl-12">
            <h3 className={SECTION_HEAD}>stack</h3>
            <dl className="text-body space-y-2.5 text-[13px] leading-relaxed sm:text-[13.5px]">
              {(
                [
                  ["lang", skills.languages],
                  ["fwk", skills.frameworks],
                  ["data", skills.databases],
                  ["cloud", skills.cloud],
                  ["tools", skills.tools],
                ] as const
              ).map(([label, items]) => (
                <div
                  key={label}
                  className="grid grid-cols-[3.25rem_1fr] gap-x-3"
                >
                  <dt className="text-soft pt-[1px] text-[13px] font-normal sm:text-[13.5px]">
                    {label}
                  </dt>
                  <dd className="break-words">{items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </main>

        <footer className="border-line-soft flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-5">
          <p className="text-body text-[13px] leading-relaxed sm:text-[13.5px]">
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
          <div className="flex items-center justify-between gap-4 sm:gap-5">
            <SocialLinks />
            <span className="text-soft hidden text-[12px] sm:inline">
              © {new Date().getFullYear()} {personalInfo.name.toLowerCase()}
            </span>
          </div>
        </footer>
      </article>
    </div>
  );
}
