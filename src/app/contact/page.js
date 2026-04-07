import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AOS Wealth Builders Academy. We are here to help you on your wealth-building journey.",
};

export default function ContactPage() {
  return (
    <>
      {/* ===================== PAGE HEADER WITH IMAGE ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop"
            alt="Professional communication"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/60" />

        <div className="relative container py-20 lg:py-28">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-300 mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300 max-w-xl">
            Have a question about our blueprints or need help getting started?
            Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      {/* ===================== CONTACT FORM + INFO ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
            {/* Form */}
            <ContactForm />

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Email Card */}
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">Email</h3>
                    <p className="text-sm text-neutral-500">We respond within 24 hours</p>
                  </div>
                </div>
                <a
                  href="mailto:info@aosimpactacademy.com"
                  className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                >
                  info@aosimpactacademy.com
                </a>
              </div>

              {/* Image Card */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
                  alt="Team working together"
                  width={400}
                  height={250}
                  className="w-full h-auto"
                />
              </div>

              {/* FAQ Card */}
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-sm font-bold text-neutral-900 mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">How do I access the blueprints?</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Once you get access, you can read all three blueprints directly on our website at any time.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">Are the blueprints suitable for beginners?</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Absolutely. The series is designed to take you from zero to ownership, step by step.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">Can I get personalized guidance?</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Send us a message through the contact form and we will discuss how we can help you further.
                    </p>
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
