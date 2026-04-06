import Link from "next/link";
import Image from "next/image";
import { ebookData } from "@/data/ebooks";

export const metadata = {
  title: "AOS Wealth Builders Academy — Build. Fund. Acquire.",
  description:
    "Three powerful blueprints designed to walk you step-by-step from business launch to capital access to asset ownership.",
};

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Small Business Owner",
    quote:
      "The Business Launch Blueprint gave me the exact roadmap I needed. Within 3 months, my business was structured, credible, and ready for funding.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Aisha Williams",
    role: "Real Estate Investor",
    quote:
      "I went from zero knowledge about business funding to getting approved for my first line of credit. The Funding Blueprint changed everything for me.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    role: "Entrepreneur",
    quote:
      "The Asset Acquisition Blueprint showed me how to leverage my business to acquire assets I never thought possible. This series is a game-changer.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const whyChooseUs = [
  {
    title: "Step-by-Step Guidance",
    description: "No guesswork. Every chapter walks you through exactly what to do, when to do it, and why it matters.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Real-World Strategies",
    description: "These are not theories from a textbook. These are proven strategies used by real entrepreneurs building real wealth.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
  },
  {
    title: "Complete System",
    description: "Three blueprints that work together as one system — from business launch to capital access to asset ownership.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Modern city skyline representing wealth building"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/75 to-neutral-900/50" />

        <div className="relative container py-28 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
                  The Wealth Builder Blueprint Series
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-white">
                Build. Fund.{" "}
                <span className="text-brand-300">Acquire.</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-neutral-300 max-w-md">
                Three powerful blueprints designed to walk you step-by-step from
                business launch to capital access to asset ownership.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/blueprints"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-500 transition-all duration-200 shadow-lg shadow-brand-600/30"
                >
                  Explore Blueprints
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Floating Book Covers */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative w-full max-w-md">
                <div className="absolute top-8 -left-4 w-48 rounded-xl overflow-hidden shadow-2xl shadow-black/30 rotate-[-6deg] z-10">
                  <Image src={ebookData[2].image} alt={ebookData[2].title} width={192} height={256} className="w-full h-auto" />
                </div>
                <div className="relative w-52 mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/40 z-20">
                  <Image src={ebookData[0].image} alt={ebookData[0].title} width={208} height={277} className="w-full h-auto" />
                </div>
                <div className="absolute top-8 -right-4 w-48 rounded-xl overflow-hidden shadow-2xl shadow-black/30 rotate-[6deg] z-10">
                  <Image src={ebookData[1].image} alt={ebookData[1].title} width={192} height={256} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS BAR ===================== */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="container py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "3", label: "Core Blueprints" },
              { value: "15", label: "In-Depth Chapters" },
              { value: "1000+", label: "Students Enrolled" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-3xl font-extrabold text-neutral-900">{stat.value}</p>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BLUEPRINT PREVIEW ===================== */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-600 mb-3">Core Program Series</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              The Wealth Builder Blueprint Series&trade;
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Three comprehensive e-books that take you from business formation to capital access to asset ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ebookData.map((bp) => (
              <div
                key={bp.id}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/40 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center p-8 overflow-hidden">
                  <Image
                    src={bp.image}
                    alt={bp.title}
                    width={200}
                    height={267}
                    className="w-auto h-full max-h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-brand-600 tracking-widest uppercase">E-Book {bp.number}</span>
                  <h3 className="text-lg font-bold text-neutral-900 mt-2 group-hover:text-brand-700 transition-colors">{bp.title}</h3>
                  <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{bp.subtitle}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-extrabold text-neutral-900">${bp.price.toFixed(2)}</span>
                    <Link
                      href={`/checkout/${bp.id}`}
                      className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all"
                    >
                      Get Access
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-600 mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Built for Real Entrepreneurs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Our blueprints are designed by people who have been in the trenches, not academics writing from ivory towers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="group rounded-2xl overflow-hidden border border-neutral-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/2] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
            alt="Modern office space"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-neutral-900/85" />

        <div className="relative container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-300 mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              What Our Students Say
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              Real results from real entrepreneurs who followed the blueprint.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-brand-400">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-neutral-300 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== JOURNEY SECTION ===================== */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                  alt="Entrepreneur working on business strategy"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white rounded-2xl p-6 shadow-lg shadow-brand-600/30 hidden sm:block">
                <p className="text-3xl font-extrabold">3-in-1</p>
                <p className="text-sm font-medium text-brand-100">Complete System</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-600 mb-3">Your Journey</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-6">
                From Zero to Ownership
              </h2>
              <p className="text-base leading-relaxed text-neutral-600 mb-6">
                Most people have the ambition but lack the roadmap. Our three-part blueprint series gives you the exact steps to go from having an idea to owning income-generating assets.
              </p>

              <div className="space-y-5">
                {[
                  { step: "01", title: "Build Your Business", desc: "Structure a legitimate, fundable business from the ground up." },
                  { step: "02", title: "Access Capital", desc: "Position your business for funding approvals and smart capital." },
                  { step: "03", title: "Acquire Assets", desc: "Leverage your business to acquire vehicles and income-generating assets." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-700 text-sm font-bold shrink-0">{item.step}</span>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                      <p className="text-sm text-neutral-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=800&fit=crop"
            alt="Professional in business attire"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/80" />

        <div className="relative container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-base leading-relaxed text-brand-100 mb-8">
              Join thousands of entrepreneurs who have used our blueprints to build legitimate businesses, access capital, and acquire assets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/blueprints"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-brand-900 bg-white rounded-xl hover:bg-neutral-100 transition-all duration-200 shadow-lg"
              >
                Get the Blueprint Series
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
