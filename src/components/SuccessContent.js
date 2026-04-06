"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ebookData } from "@/data/ebooks";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const ebookId = searchParams.get("ebook");

  const [status, setStatus] = useState("verifying"); // verifying | success | error
  const ebook = ebookData.find((e) => e.id === ebookId);

  useEffect(() => {
    if (!sessionId || !ebookId) {
      setStatus("error");
      return;
    }

    async function verifyPayment() {
      try {
        const res = await fetch("/api/stripe/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, ebookId }),
        });

        const data = await res.json();

        if (data.success) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    }

    verifyPayment();
  }, [sessionId, ebookId]);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="max-w-lg mx-auto text-center">
          {status === "verifying" && (
            <>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mx-auto mb-6">
                <svg
                  className="animate-spin w-8 h-8 text-brand-600"
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
              </div>
              <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                Verifying Your Payment...
              </h1>
              <p className="text-neutral-500">
                Please wait while we confirm your purchase.
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mx-auto mb-6">
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
                  className="text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2">
                Payment Successful!
              </h1>
              <p className="text-neutral-500 mb-8">
                You now have full access to{" "}
                <span className="font-semibold text-neutral-700">
                  {ebook?.title || "your blueprint"}
                </span>
                . Start reading now.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {ebook && (
                  <Link
                    href={`/ebook/${ebook.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all duration-200 shadow-lg shadow-brand-600/20"
                  >
                    Read {ebook.title}
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
                  Browse More Blueprints
                </Link>
              </div>
            </>
          )}

          {status === "error" && (
            <>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mx-auto mb-6">
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
                  className="text-red-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" x2="9" y1="9" y2="15" />
                  <line x1="9" x2="15" y1="9" y2="15" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                Verification Failed
              </h1>
              <p className="text-neutral-500 mb-8">
                We could not verify your payment. If you were charged, please
                contact our support team and we will resolve this immediately.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all duration-200"
                >
                  Contact Support
                </Link>
                <Link
                  href="/blueprints"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-all duration-200"
                >
                  Back to Blueprints
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
