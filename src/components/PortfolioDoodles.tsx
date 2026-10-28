import type { ReactNode } from "react";

function Doodle({ name, children }: { name: string; children: ReactNode }) {
  return (
    <svg
      className={`portfolio-doodle doodle-${name}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/** One set of little margin drawings; intentionally loose, like pen on paper. */
export default function PortfolioDoodles() {
  return (
    <div className="portfolio-doodles" aria-hidden="true">
      <Doodle name="smile">
        <path d="M78 31C69 12 43 12 29 23C13 35 14 61 27 75C40 89 65 87 78 71C88 58 87 41 78 31Z" />
        <path d="M19 39L29 40M29 38L47 39L45 51Q34 57 29 47ZM55 39L75 37L73 48Q62 55 57 48ZM47 41Q51 38 56 41M75 39L82 37" />
        <path d="M33 42L38 49M38 41L43 47M60 42L65 48M66 41L71 45M35 63Q49 76 66 61M34 61L32 65M65 60L69 62" />
      </Doodle>
      <Doodle name="sax">
        <path d="M55 15L44 13Q34 14 34 24L36 31L24 65Q18 83 34 87Q52 92 61 72L68 50M50 19L43 18Q39 19 40 25L43 31L31 68Q28 76 35 79Q43 81 48 69L55 48" />
        <path d="M51 45Q60 37 73 43Q78 47 67 51Q55 54 51 45ZM54 44Q62 43 70 46M46 14L49 20M32 37L39 39M29 45L36 47M26 54L33 56M25 63L31 64M37 80L38 87" />
        <path d="M21 85L17 89M75 25L75 35M75 25L83 23M83 23L83 32" />
        <path d="M75 34Q68 32 69 37Q73 40 75 34ZM83 31Q77 29 77 34Q81 37 83 31Z" fill="currentColor" strokeWidth="1" />
      </Doodle>
      <Doodle name="notes">
        <path d="M32 68L29 26L73 16L76 57M30 34L74 24" />
        <path d="M32 65C27 59 12 64 13 72C15 80 34 75 32 65ZM76 54C70 49 56 54 57 62C59 70 78 64 76 54Z" fill="currentColor" strokeWidth="1.2" />
        <path d="M46 77Q51 72 55 76M48 84L57 81M84 15L88 10" />
      </Doodle>
      <Doodle name="laptop">
        <path d="M21 25L79 22L82 65L17 68ZM25 30L74 28L76 59L23 62ZM17 68L8 78Q48 84 91 75L82 65M39 70L60 69L64 74L36 76Z" />
        <path d="M40 39L33 46L41 51M60 37L67 43L61 50M55 36L49 54M13 82Q51 88 86 80" />
      </Doodle>
      <Doodle name="rocket">
        <path d="M34 59Q40 27 77 14Q86 48 57 71ZM34 59L23 62L18 76L38 70M57 71L55 83L41 89L42 73M36 66L49 77M58 24L75 41" />
        <path d="M62 39C54 35 49 43 53 49C58 56 68 46 62 39ZM28 76Q17 78 16 91Q29 88 32 80M12 63L8 65M84 57L89 60" />
      </Doodle>
      <Doodle name="cool-s">
        <path d="M31 24L50 9L70 23L70 40L59 50M31 24L30 41L50 61L50 78M50 24L50 40L70 60L69 78L50 93L30 78L30 61L40 51" />
      </Doodle>
    </div>
  );
}
