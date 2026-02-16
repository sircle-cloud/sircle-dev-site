"use client";

const footerLinks = {
  "Pagina's": [
    { label: "Home", href: "#hero" },
    { label: "Over ons", href: "#about" },
    { label: "Voordelen", href: "#benefits" },
    { label: "Werkwijze", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ],
  Services: [
    { label: "Full-stack Development", href: "#services" },
    { label: "Mobile Development", href: "#services" },
    { label: "DevOps & Cloud", href: "#services" },
    { label: "UI/UX & Frontend", href: "#services" },
    { label: "AI & Machine Learning", href: "#services" },
  ],
  Contact: [
    { label: "hello@sircle.dev", href: "mailto:hello@sircle.dev" },
    { label: "+31 85 212 91 45", href: "tel:+31852129145" },
    { label: "Zwaardstraat 16", href: "#contact" },
    { label: "2584 TX Den Haag", href: "#contact" },
  ],
};

export default function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[92%] md:max-w-[85%] 2xl:max-w-[1400px] px-4 sm:px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <a href="#hero" className="flex items-center gap-2 text-white font-heading text-xl font-semibold mb-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="#0054f9" />
                  <path d="M8 14C8 10.686 10.686 8 14 8C17.314 8 20 10.686 20 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="14" cy="17" r="2.5" fill="white" />
                </svg>
                sircle.dev
              </a>
              <p className="text-white/50 text-sm max-w-sm">
                Expand your dev team in weeks, not months. Developer outsourcing
                voor Nederlandse bedrijven.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <p className="font-heading text-lg font-medium mb-3">
                Blijf op de hoogte
              </p>
              <div className="flex gap-2 max-w-full">
                <input
                  type="email"
                  placeholder="Je email adres"
                  className="bg-white/10 border border-white/15 text-white placeholder:text-white/40 rounded-full px-5 py-2.5 text-sm min-w-0 flex-1 md:w-72 md:flex-none focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                />
                <button className="bg-accent-blue hover:bg-accent-blue/90 text-white font-medium px-5 sm:px-6 py-2.5 rounded-full text-sm transition-all whitespace-nowrap shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-[92%] md:max-w-[85%] 2xl:max-w-[1400px] px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Onderdeel van SIRCLE holding. Dedicated developer teams voor
              Nederlandse scale-ups en tech-bedrijven.
            </p>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/sebastiaanvreeken"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-accent-blue rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* X/Twitter */}
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-accent-blue rounded-full flex items-center justify-center transition-colors"
                aria-label="X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-medium text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[92%] md:max-w-[85%] 2xl:max-w-[1400px] px-4 sm:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Sircle.dev — Onderdeel van SIRCLE holding. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4 text-white/40 text-xs">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Algemene Voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
