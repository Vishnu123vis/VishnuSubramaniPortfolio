import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16 text-center">
      <p className="text-sm font-medium tabular-nums text-neutral-400">404</p>
      <h1 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-neutral-600">
        That URL doesn&apos;t exist. Head back to the site.
      </p>
      <Link
        href="/"
        className="link-quiet mt-8 text-[15px] font-medium text-neutral-900"
      >
        ← home
      </Link>
    </div>
  );
}
