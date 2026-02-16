"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Over ons", href: "#about" },
  { label: "Voordelen", href: "#benefits" },
  { label: "Werkwijze", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMenu = useCallback(() => {
    setMobileOpen(true);

    // Wait for render
    requestAnimationFrame(() => {
      if (tlRef.current) tlRef.current.kill();

      const tl = gsap.timeline();
      tlRef.current = tl;

      // Overlay slides in
      tl.fromTo(
        overlayRef.current,
        { clipPath: "circle(0% at calc(100% - 40px) 32px)" },
        {
          clipPath: "circle(150% at calc(100% - 40px) 32px)",
          duration: 0.6,
          ease: "power3.inOut",
        }
      );

      // Menu items stagger in
      tl.fromTo(
        menuItemsRef.current.filter(Boolean),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=0.2"
      );

      // CTA fades in
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.1"
        );
      }
    });
  }, []);

  const closeMenu = useCallback(() => {
    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({
      onComplete: () => setMobileOpen(false),
    });
    tlRef.current = tl;

    // CTA and items fade out
    tl.to([ctaRef.current, ...menuItemsRef.current.filter(Boolean)].reverse(), {
      y: -20,
      opacity: 0,
      duration: 0.2,
      stagger: 0.03,
      ease: "power3.in",
    });

    // Overlay closes
    tl.to(
      overlayRef.current,
      {
        clipPath: "circle(0% at calc(100% - 40px) 32px)",
        duration: 0.4,
        ease: "power3.inOut",
      },
      "-=0.1"
    );
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (mobileOpen) {
      closeMenu();
    }
    // Small delay so animation plays before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, mobileOpen ? 500 : 0);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-[92%] md:max-w-[85%] 2xl:max-w-[1400px] px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="relative z-[60] flex items-center gap-2 text-white font-heading text-xl font-semibold"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
              <circle cx="14" cy="14" r="14" fill="#0054f9" />
              <path d="M8 14C8 10.686 10.686 8 14 8C17.314 8 20 10.686 20 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="14" cy="17" r="2.5" fill="white" />
            </svg>
            sircle.dev
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-white/80 hover:text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden md:inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-accent-blue/25"
          >
            Plan een gesprek
          </a>

          {/* Mobile menu button - modern dot grid */}
          <button
            onClick={() => (mobileOpen ? closeMenu() : openMenu())}
            className="md:hidden relative z-[60] text-white w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="grid grid-cols-2 gap-[5px]">
              <span className="w-[5px] h-[5px] bg-white rounded-full" />
              <span className="w-[5px] h-[5px] bg-white rounded-full" />
              <span className="w-[5px] h-[5px] bg-white rounded-full" />
              <span className="w-[5px] h-[5px] bg-white rounded-full" />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile menu overlay */}
      {mobileOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[55] md:hidden"
          style={{
            background: "linear-gradient(160deg, #0a1e1e 0%, #142828 40%, #0d2525 100%)",
            clipPath: "circle(0% at calc(100% - 40px) 32px)",
          }}
        >
          {/* Close button - top right */}
          <button
            onClick={closeMenu}
            className="absolute top-0 right-0 z-[70] w-16 h-16 flex items-center justify-center text-white hover:text-accent-warm transition-colors"
            aria-label="Sluiten"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Subtle background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-40 -right-20 w-80 h-80 bg-accent-warm/8 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03]" />
          </div>

          {/* Menu content */}
          <div className="relative h-full flex flex-col justify-start pt-20 px-8 sm:px-10 pb-10 overflow-y-auto">
            {/* Nav links */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  ref={(el) => { menuItemsRef.current[i] = el; }}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="group flex items-center gap-4 py-3 text-white/90 hover:text-white transition-colors"
                >
                  <span className="text-xs text-accent-warm/60 font-mono w-6">
                    0{i + 1}
                  </span>
                  <span className="font-heading text-3xl font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {link.label}
                  </span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent-warm">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom CTA section */}
            <div ref={ctaRef} className="mt-10 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
                Neem contact op
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@sircle.dev"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                  <span className="text-base">hello@sircle.dev</span>
                </a>
                <a
                  href="tel:+31852129145"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span className="text-base">+31 85 212 91 45</span>
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="mt-6 inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
              >
                Plan een gesprek
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
