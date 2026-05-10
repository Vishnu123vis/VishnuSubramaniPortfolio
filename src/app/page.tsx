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
    <div className="min-h-screen px-7 pb-36 pt-16 sm:px-12 sm:pb-44 sm:pt-24">
      <div className="fixed right-5 top-5 z-40 sm:right-8 sm:top-8">
        <ThemeToggle />
      </div>

      <article className="animate-enter mx-auto max-w-[44rem] text-pretty">
        <section aria-label="Introduction">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
            <div className="order-2 min-w-0 flex-1 space-y-7 sm:order-1">
              <p className="text-fg text-[2.15rem] font-medium leading-tight tracking-tight sm:text-[2.45rem]">
                hey, I&apos;m vishnu
              </p>
              <div className="text-body space-y-5 text-[18px] leading-relaxed">
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
                  <span className="text-fg">fall &apos;26 swe internship</span>
                  {" — "}backend, cloud, or applied ai.
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
              className="order-1 h-auto w-[7rem] shrink-0 object-contain object-left dark:invert sm:order-2 sm:mt-1 sm:w-[9rem]"
              priority
            />
          </div>
        </section>

        <section id="built" className="section">
          <h3 className="section-title">what i&apos;ve built</h3>
          <ul className="list-arrow text-body space-y-5 text-[18px] leading-snug">
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
          <ul className="text-body space-y-6 text-[18px] leading-snug">
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
                  <span className="text-muted shrink-0 text-[14px] tabular-nums sm:text-[15.5px]">
                    {exp.period.toLowerCase()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="stack" className="section">
          <h3 className="section-title">stack</h3>
          <dl className="text-body space-y-5 text-[18px] leading-relaxed">
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
                className="grid grid-cols-1 gap-x-6 sm:grid-cols-[7.5rem_1fr]"
              >
                <dt className="text-muted">{label}</dt>
                <dd className="break-words">{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="section">
          <h3 className="section-title">say hi</h3>
          <p className="text-body text-[18px] leading-relaxed">
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

        <footer className="border-line-soft mt-20 border-t pt-12 sm:mt-24 sm:pt-14">
          <SocialLinks />
          <p className="text-soft mt-9 text-[13.5px]">
            © {new Date().getFullYear()} {personalInfo.name.toLowerCase()}
          </p>
        </footer>
      </article>
    </div>
  );
}
