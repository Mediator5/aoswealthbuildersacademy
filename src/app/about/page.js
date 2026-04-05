import Link from "next/link";
import Image from "next/image";
import { ebookData } from "@/data/ebooks";

export const metadata = {
  title: "About Us",
  description:
    "Learn about AOS Wealth Builders Academy and our mission to help entrepreneurs build legitimate businesses, access capital, and acquire assets.",
};

const values = [
  {
    title: "Education First",
    description:
      "We believe that financial literacy is the foundation of wealth. Our blueprints are designed to educate, not just inform, giving you the knowledge to make confident decisions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
  {
    title: "Practical Application",
    description:
      "Theory without action is useless. Every chapter in our blueprints includes actionable steps you can implement immediately to move your business forward.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    title: "Long-Term Wealth",
    description:
      "We are not about quick fixes or get-rich-quick schemes. Our approach focuses on building sustainable wealth through proper business structure, strategic funding, and smart asset acquisition.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Community Driven",
    description:
      "You are not alone on this journey. Join a growing community of entrepreneurs who are building, funding, and acquiring their way to financial freedom.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const features = [
  "Step-by-step business formation guidance",
  "Funding positioning strategies that work",
  "Asset acquisition frameworks for wealth building",
  "Professional credibility building techniques",
  "Banking relationship development",
  "Capital management best practices",
];

export default function AboutPage() {
  return (
    <>
      {/* ===================== PAGE HEADER WITH IMAGE ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=600&fit=crop"
            alt="Team collaboration in modern office"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/85 to-neutral-900/60" />

        <div className="relative container py-20 lg:py-28">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-300 mb-3">About Us</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
            From Information to <span className="text-brand-300">Ownership</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300 max-w-xl">
            AOS Wealth Builders Academy exists to bridge the gap between financial knowledge and real-world wealth creation.
          </p>
        </div>
      </section>

      {/* ===================== MISSION ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-base leading-relaxed text-neutral-600 mb-4">
                Starting a business is easy &mdash; but building one that is structured, credible, and positioned to access capital is what separates amateurs from real entrepreneurs. Most people have the ambition but lack the roadmap.
              </p>
              <p className="text-base leading-relaxed text-neutral-600 mb-4">
                That is exactly why we created the Wealth Builder Blueprint Series. Our mission is to provide clear, actionable, step-by-step guidance that takes you from idea to ownership. No fluff. No theory without application. Just the blueprint.
              </p>
              <p className="text-base leading-relaxed text-neutral-600">
                We believe that everyone deserves access to the knowledge that builds wealth. Our three-part series covers the complete journey: building a fundable business, accessing capital, and acquiring income-generating assets.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop"
                  alt="Business professionals discussing strategy"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brand-600 text-white rounded-xl p-5 shadow-lg shadow-brand-600/30 hidden sm:block">
                <p className="text-2xl font-extrabold">1000+</p>
                <p className="text-xs font-medium text-brand-100">Students Empowered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT YOU WILL LEARN ===================== */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&h=500&fit=crop"
                  alt="Person studying financial documents and taking notes"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-6">What You Will Learn</h2>
              <div className="space-y-4">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-neutral-200 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 text-brand-500 shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-sm font-medium text-neutral-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-600 mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 hover:border-brand-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600 mb-5">
                  {value.icon}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE SYSTEM ===================== */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-600 mb-3">The System</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Three Blueprints. One Path.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Each blueprint builds on the last, creating a complete wealth-building system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ebookData.map((bp, i) => (
              <div key={bp.id} className="relative bg-white rounded-2xl border border-neutral-200 p-6 overflow-hidden">
                <span className="text-5xl font-extrabold text-neutral-100 absolute top-4 right-6">{bp.number}</span>
                <span className="text-xs font-bold text-brand-600 tracking-widest uppercase">Step {i + 1}</span>
                <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-2">{bp.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{bp.subtitle}</p>
                <div className="flex items-center gap-3 mt-4">
                  <Image
                    src={bp.image}
                    alt={bp.title}
                    width={48}
                    height={64}
                    className="w-12 h-auto rounded-md shadow-sm"
                  />
                  <p className="text-xs text-neutral-400">{bp.chapters.length} chapters</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blueprints"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all duration-200 shadow-lg shadow-brand-600/20"
            >
              View All Blueprints
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== CTA WITH IMAGE ===================== */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=600&fit=crop"
            alt="Cityscape at golden hour"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-900/80" />

        <div className="relative container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-base leading-relaxed text-brand-100 mb-8">
              The knowledge is here. The roadmap is clear. All that is left is for you to take the first step.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-brand-900 bg-white rounded-xl hover:bg-neutral-100 transition-all duration-200 shadow-lg"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
