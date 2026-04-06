import Link from "next/link";
import { ebookData } from "@/data/ebooks";

export const metadata = {
  title: "Payment Cancelled",
  description: "Your payment was cancelled. You can try again anytime.",
};

export default async function CancelPage({ searchParams }) {
  const { ebook: ebookId } = await searchParams;
  const ebook = ebookData.find((e) => e.id === ebookId);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2">
            Payment Cancelled
          </h1>
          <p className="text-neutral-500 mb-8">
            No worries — your payment was not processed. You can try again
            whenever you are ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {ebook && (
              <Link
                href={`/checkout/${ebook.id}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all duration-200 shadow-lg shadow-brand-600/20"
              >
                Try Again
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            )}
            <Link
              href="/blueprints"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-all duration-200"
            >
              Browse Blueprints
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
