"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ebookData } from "@/data/ebooks";

export default function EbookContent({ slug }) {
  const [activeChapter, setActiveChapter] = useState("intro");

  const ebook = ebookData.find((e) => e.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!ebook) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("[data-chapter]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [ebook]);

  if (!ebook) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Blueprint Not Found</h1>
          <Link href="/blueprints" className="text-brand-600 hover:text-brand-700 font-medium">
            View All Blueprints
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ---- Hero Banner with Cover Image ---- */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="container py-12 lg:py-16">
          <Link
            href="/blueprints"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-700 transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
            Back to Blueprints
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Ebook Cover Thumbnail */}
            <div className="w-20 h-auto rounded-xl overflow-hidden shadow-lg shrink-0 hidden sm:block">
              <Image
                src={ebook.image}
                alt={ebook.title}
                width={80}
                height={107}
                className="w-full h-auto"
              />
            </div>

            <div className="flex items-start gap-4 flex-1">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-100 text-brand-600 shrink-0 sm:hidden">
                {ebook.icon === "rocket" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                )}
                {ebook.icon === "dollar" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                )}
                {ebook.icon === "shield" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                )}
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-600">
                  E-Book {ebook.number}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
                  {ebook.title}
                </h1>
                <p className="mt-1 text-base text-neutral-500">{ebook.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Content Area ---- */}
      <div className="container py-12 lg:py-16">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              {/* Sidebar Cover Image */}
              <div className="w-full rounded-xl overflow-hidden shadow-md mb-6">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  width={260}
                  height={347}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">
                Table of Contents
              </p>
              <nav className="flex flex-col gap-1">
                <a
                  href="#intro"
                  onClick={(e) => { e.preventDefault(); document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" }); }}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${activeChapter === "intro" ? "text-brand-700 bg-brand-50 font-semibold border-l-[3px] border-brand-600" : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50"}`}
                >
                  Introduction
                </a>
                {ebook.chapters.map((ch, i) => (
                  <a
                    key={ch.id}
                    href={`#${ch.id}`}
                    onClick={(e) => { e.preventDefault(); document.getElementById(ch.id)?.scrollIntoView({ behavior: "smooth" }); }}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors ${activeChapter === ch.id ? "text-brand-700 bg-brand-50 font-semibold border-l-[3px] border-brand-600" : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50"}`}
                  >
                    Ch. {i + 1}: {ch.title}
                  </a>
                ))}
                <a
                  href="#conclusion"
                  onClick={(e) => { e.preventDefault(); document.getElementById("conclusion")?.scrollIntoView({ behavior: "smooth" }); }}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${activeChapter === "conclusion" ? "text-brand-700 bg-brand-50 font-semibold border-l-[3px] border-brand-600" : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50"}`}
                >
                  Conclusion
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="max-w-2xl">
            {/* Introduction */}
            <div id="intro" data-chapter className="mb-14">
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-500"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
                Introduction
              </h2>
              <div className="space-y-4">
                {ebook.introduction.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-neutral-600">{p}</p>
                ))}
              </div>
            </div>

            {/* Chapters */}
            {ebook.chapters.map((chapter, ci) => (
              <div key={chapter.id} id={chapter.id} data-chapter className="mb-14">
                <div className="flex items-start gap-4 mb-6 pb-4 border-b border-neutral-200">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-700 text-sm font-bold shrink-0">
                    {ci + 1}
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900 pt-1.5">{chapter.title}</h2>
                </div>

                <div className="space-y-8">
                  {chapter.sections.map((section, si) => (
                    <div key={si}>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-3">{section.heading}</h3>
                      <div className="space-y-3">
                        {section.content.map((p, pi) => (
                          <p key={pi} className="text-base leading-relaxed text-neutral-600">{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Conclusion */}
            <div id="conclusion" data-chapter className="mb-14">
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                Conclusion
              </h2>
              <div className="p-6 rounded-xl bg-brand-50 border border-brand-100">
                <div className="space-y-4">
                  {ebook.conclusion.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-neutral-700 font-medium">{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Between Ebooks */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 pt-8 border-t border-neutral-200">
              {ebook.prevEbook && (
                <Link
                  href={`/ebook/${ebook.prevEbook.id}`}
                  className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-brand-200 hover:bg-brand-50/30 transition-all group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400 group-hover:text-brand-500 transition-colors"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                  <div>
                    <p className="text-xs text-neutral-400 font-medium">Previous</p>
                    <p className="text-sm font-semibold text-neutral-700 group-hover:text-brand-700 transition-colors">{ebook.prevEbook.title}</p>
                  </div>
                </Link>
              )}
              {ebook.nextEbook && (
                <Link
                  href={`/ebook/${ebook.nextEbook.id}`}
                  className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200 hover:border-brand-200 hover:bg-brand-50/30 transition-all group text-right"
                >
                  <div>
                    <p className="text-xs text-neutral-400 font-medium">Next</p>
                    <p className="text-sm font-semibold text-neutral-700 group-hover:text-brand-700 transition-colors">{ebook.nextEbook.title}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-neutral-400 group-hover:text-brand-500 transition-colors"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
