"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal animation
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "power3.out",
        }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-primary"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(0, 84, 249, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(235, 87, 41, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(255, 167, 16, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-soft-green animate-pulse" />
            Developer outsourcing voor Nederland
          </div>

          <h1
            ref={headlineRef}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1] mb-6"
          >
            Expand your dev team in{" "}
            <span className="relative inline-block">
              <span className="relative z-10">weeks</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent-blue/40 -skew-x-3 rounded" />
            </span>
            , not months
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
          >
            Dedicated developers voor Nederlandse bedrijven. Geïntegreerd in
            jouw team, onder Nederlands management. Vanaf{" "}
            <span className="text-accent-warm font-semibold">€5.500/maand</span>.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white font-medium px-8 py-4 rounded-full text-base transition-all hover:shadow-xl hover:shadow-accent-blue/25 hover:-translate-y-0.5"
            >
              Plan een gesprek
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-4 rounded-full text-base transition-all border border-white/20 backdrop-blur-sm"
            >
              Bekijk werkwijze
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-soft-green">
                <path d="M8 0L10.12 5.26L16 6.18L11.68 10.14L12.89 16L8 13.26L3.11 16L4.32 10.14L0 6.18L5.88 5.26L8 0Z" />
              </svg>
              100+ developers beschikbaar
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-accent-warm">
                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm.8 8.8V4H7.2v5.6h4V8H8.8z" />
              </svg>
              Start binnen 2 weken
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-accent-blue">
                <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
              </svg>
              Maandelijks opzegbaar
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
