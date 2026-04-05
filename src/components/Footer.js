import Link from "next/link";

const footerLinks = {
  blueprints: [
    { label: "Business Launch Blueprint", href: "/ebook/business-launch" },
    { label: "Funding Blueprint", href: "/ebook/funding" },
    { label: "Asset Acquisition Blueprint", href: "/ebook/asset-acquisition" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blueprints", href: "/blueprints" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold tracking-tight text-white">AOS Wealth Builders</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-400">Academy</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              Build the business. Access the capital. Acquire the assets. We provide the blueprints to move you from information to ownership.
            </p>
          </div>

          {/* Blueprints Column */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-4">Blueprints</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.blueprints.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">&copy; {new Date().getFullYear()} AOS Wealth Builders Academy. All rights reserved.</p>
          <p className="text-xs text-neutral-600">The Wealth Builder Blueprint Series&trade;</p>
        </div>
      </div>
    </footer>
  );
}
