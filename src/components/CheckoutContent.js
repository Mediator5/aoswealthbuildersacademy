"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ebookData } from "@/data/ebooks";

export default function CheckoutContent({ slug }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  async function handleCheckout() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ebookId: ebook.id }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      setError("Failed to connect to payment server. Please try again.");
      setLoading(false);
    }
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
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
            Complete Your Purchase
          </h1>
        </div>
      </section>

      {/* ---- Checkout Content ---- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1fr_380px] gap-10 lg:gap-16">
              {/* Product Details */}
              <div>
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-28 sm:w-36 rounded-xl overflow-hidden shadow-lg shrink-0">
                    <Image
                      src={ebook.image}
                      alt={ebook.title}
                      width={144}
                      height={192}
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-600">
                      E-Book {ebook.number}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                      {ebook.title}
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">
                      {ebook.subtitle}
                    </p>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="text-base font-bold text-neutral-900 mb-4">
                    What You Will Get
                  </h3>
                  <div className="space-y-3">
                    {ebook.chapters.map((ch, i) => (
                      <div
                        key={ch.id}
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
                          Chapter {i + 1}: {ch.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-6 mt-6">
                  <h3 className="text-base font-bold text-neutral-900 mb-3">
                    Included Benefits
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Instant digital access",
                      "Read on any device",
                      "Lifetime access to content",
                      "Future updates included",
                    ].map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-neutral-600"
                      >
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
                          className="text-brand-500 shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div>
                <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sticky top-24">
                  <h3 className="text-base font-bold text-neutral-900 mb-6">
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">{ebook.title}</span>
                      <span className="font-semibold text-neutral-900">
                        ${ebook.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t border-neutral-200" />
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-neutral-900">
                        Total
                      </span>
                      <span className="text-2xl font-extrabold text-neutral-900">
                        ${ebook.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all duration-200 shadow-lg shadow-brand-600/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
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
                        Pay ${ebook.price.toFixed(2)}
                      </>
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                    Secured by Stripe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
