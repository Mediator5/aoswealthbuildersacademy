import Link from "next/link";
import Image from "next/image";
import { ebookData } from "@/data/ebooks";

export default function EbookLocked({ slug }) {
  const ebook = ebookData.find((e) => e.id === slug);

  if (!ebook) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">
            Blueprint Not Found
          </h1>
          <Link
            href="/blueprints"
            className="text-brand-600 hover:text-brand-700 font-medium"
          >
            View All Blueprints
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ---- Header ---- */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="container py-12 lg:py-16">
          <Link
            href="/blueprints"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-700 transition-colors mb-6"
          >
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
              className="w-4 h-4"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Blueprints
          </Link>

          <div className="flex items-start gap-6">
            <div className="w-16 rounded-xl overflow-hidden shadow-md shrink-0 hidden sm:block">
              <Image
                src={ebook.image}
                alt={ebook.title}
                width={64}
                height={85}
                className="w-full h-auto"
              />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-600">
                E-Book {ebook.number}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
                {ebook.title}
              </h1>
              <p className="mt-1 text-base text-neutral-500">
                {ebook.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Locked Content ---- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Preview: Show chapter titles only */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">
                What&apos;s Inside
              </h2>
              <div className="space-y-3">
                {ebook.chapters.map((ch, i) => (
                  <div
                    key={ch.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-brand-50 text-brand-700 text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">
                        {ch.title}
                      </p>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {ch.sections.length} sections
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lock Gate */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Blurred preview content */}
              <div className="p-8 blur-sm select-none pointer-events-none">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                  Introduction
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {ebook.introduction[0]}
                </p>
                <p className="text-base text-neutral-600 leading-relaxed mt-3">
                  {ebook.introduction[1] || ""}
                </p>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/70 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-neutral-100 mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-500"
                    >
                      <rect
                        width="18"
                        height="11"
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                      />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Purchase Required
                  </h3>
                  <p className="text-sm text-neutral-500 mb-6 max-w-sm mx-auto">
                    Get full access to all {ebook.chapters.length} chapters of{" "}
                    {ebook.title} for just ${ebook.price.toFixed(2)}.
                  </p>
                  <Link
                    href={`/checkout/${ebook.id}`}
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all duration-200 shadow-lg shadow-brand-600/20"
                  >
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
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    Purchase for ${ebook.price.toFixed(2)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
