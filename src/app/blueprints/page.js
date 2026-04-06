import Link from "next/link";
import Image from "next/image";
import { ebookData } from "@/data/ebooks";

export const metadata = {
  title: "Blueprints",
  description:
    "Explore all three Wealth Builder Blueprints — from business launch to funding to asset acquisition.",
};

/* Contextual images for each blueprint section */
const blueprintImages = [
  "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
];

export default function BlueprintsPage() {
  return (
    <>
      {/* ===================== PAGE HEADER WITH IMAGE ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=600&fit=crop"
            alt="Business strategy meeting"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/60" />

        <div className="relative container py-20 lg:py-28">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-300 mb-3">
            Core Program Series
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
            The Wealth Builder Blueprint Series&trade;
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300 max-w-xl">
            Three comprehensive e-books that take you from business formation to
            capital access to asset ownership. Each blueprint builds on the last.
          </p>
        </div>
      </section>

      {/* ===================== BLUEPRINT CARDS ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="flex flex-col gap-24">
            {ebookData.map((bp, i) => (
              <div
                key={bp.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image Side */}
                <div className="flex justify-center">
                  <div className="relative group w-full max-w-lg">
                    {/* Contextual background image */}
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={blueprintImages[i]}
                        alt={`Context for ${bp.title}`}
                        width={600}
                        height={400}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    {/* Ebook cover overlay */}
                    <div className="absolute -bottom-6 -right-4 w-32 sm:w-40 rounded-xl overflow-hidden shadow-2xl shadow-neutral-900/20 border-4 border-white">
                      <Image
                        src={bp.image}
                        alt={bp.title}
                        width={160}
                        height={213}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-extrabold text-neutral-100">
                      {bp.number}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                    {bp.title}
                  </h2>
                  <p className="text-sm font-medium text-brand-600 mb-4">
                    {bp.subtitle}
                  </p>

                  {/* Introduction text */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {bp.introduction[0]}
                  </p>

                  {/* Chapter List */}
                  <div className="space-y-2.5 mb-8">
                    {bp.chapters.map((ch, ci) => (
                      <div
                        key={ci}
                        className="flex items-start gap-3 text-sm text-neutral-600"
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
                          className="w-4 h-4 mt-0.5 text-brand-500 shrink-0"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>
                          Chapter {ci + 1}: {ch.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-extrabold text-neutral-900">${bp.price.toFixed(2)}</span>
                    <span className="text-xs text-neutral-400 font-medium uppercase tracking-wide">One-time payment</span>
                  </div>

                  <Link
                    href={`/checkout/${bp.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all duration-200 shadow-sm"
                  >
                    Purchase Blueprint
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=600&fit=crop"
            alt="Modern workspace"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-neutral-900/80" />

        <div className="relative container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300 mb-8">
              Reach out to our team and we will help you get started on your
              wealth-building journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-neutral-900 bg-white rounded-xl hover:bg-neutral-100 transition-all duration-200 shadow-lg"
            >
              Contact Us
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
          </div>
        </div>
      </section>
    </>
  );
}
