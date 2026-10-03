import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { getSocialLinks } from "@/data/links";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
  website: FaGlobe,
  figma: SiFigma,
} as const;

export default function SocialLinks() {
  const links = getSocialLinks();

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={`${link.icon}-${link.url}`}
            href={link.url}
            aria-label={link.name}
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-5 w-5 shrink-0" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
