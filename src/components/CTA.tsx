"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="cta-content relative bg-primary rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-orange/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-warm/5 rounded-full blur-[150px]" />

          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
              Klaar om je team uit te breiden?
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Plan een gratis kennismakingsgesprek en ontdek hoe wij jouw development
              team kunnen versterken — binnen 2 weken.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:hello@sircle.dev"
                className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white font-medium px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-accent-blue/25 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                Neem contact op
              </a>
              <a
                href="tel:+31852129145"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-4 rounded-full text-base transition-all border border-white/20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +31 85 212 91 45
              </a>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
              <span>hello@sircle.dev</span>
              <span className="hidden sm:inline">|</span>
              <span>Zwaardstraat 16, 2584 TX Den Haag</span>
              <span className="hidden sm:inline">|</span>
              <span>Onderdeel van SIRCLE holding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
