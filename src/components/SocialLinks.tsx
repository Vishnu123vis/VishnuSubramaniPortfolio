import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaRegFilePdf,
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { getSocialLinks } from "@/data/links";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
  website: FaGlobe,
  resume: FaRegFilePdf,
  figma: SiFigma,
} as const;

export default function SocialLinks() {
  const links = getSocialLinks();

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        const isResume = link.icon === "resume";
        return (
          <a
            key={`${link.icon}-${link.url}`}
            href={link.url}
            aria-label={link.name}
            className="text-neutral-400 transition-colors hover:text-neutral-900"
            {...(isResume
              ? { download: true }
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
