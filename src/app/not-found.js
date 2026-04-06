import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="text-center">
        <p className="text-6xl font-extrabold text-brand-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Page Not Found</h1>
        <p className="text-base text-neutral-500 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors"
        >
          Back to Homet
        </Link>
      </div>
    </div>
  );
}
