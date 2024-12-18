import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">Page Not Found</h1>
      <Link
        href={`/`}
        className="rounded-lg bg-accent-purple px-4 py-2 text-white transition hover:bg-accent-purple/80"
      >
        Go Home
      </Link>
    </div>
  );
}
