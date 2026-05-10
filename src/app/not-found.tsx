import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-soft text-sm font-medium tabular-nums">404</p>
      <h1 className="text-fg mt-2 text-xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-body mt-3 max-w-sm text-[15px] leading-relaxed">
        That URL doesn&apos;t exist. Head back to the site.
      </p>
      <Link href="/" className="link-quiet text-fg mt-8 text-[15px] font-medium">
        ← home
      </Link>
    </div>
  );
}
