"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0.3, y: 60, clipPath: "inset(0 0 100% 0)" },
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
          { opacity: 0.3, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0.3, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0.3, x: 60, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden"
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

      {/* Decorative floating circles */}
      <div className="decoration-blob decoration-blob-blue absolute -top-20 -right-20 w-[500px] h-[500px] opacity-60" />
      <div className="decoration-blob decoration-blob-orange absolute -bottom-32 -left-32 w-[400px] h-[400px] opacity-40" />
      <div className="decoration-blob decoration-blob-warm absolute top-1/3 right-1/4 w-[300px] h-[300px] opacity-30" />

      {/* Floating dot grid decoration */}
      <div className="absolute top-20 right-10 w-40 h-40 dot-pattern-light opacity-20" />
      <div className="absolute bottom-40 left-10 w-32 h-32 dot-pattern-light opacity-15" />

      {/* Small floating circles */}
      <div className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-accent-blue/30 animate-pulse" />
      <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-accent-warm/40 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[40%] left-[5%] w-4 h-4 rounded-full bg-soft-green/20 animate-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="relative z-10 mx-auto max-w-[92%] md:max-w-[85%] 2xl:max-w-[1400px] px-4 sm:px-6 py-24 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-soft-green animate-pulse" />
              Developer outsourcing voor Nederland
            </div>

            <h1
              ref={headlineRef}
              className="font-heading text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium text-white leading-[1.05] mb-6"
            >
              Expand your dev team in{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-warm">weeks</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent-warm/25 -skew-x-3 rounded" />
              </span>
              , not months
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl font-light"
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
            <div className="mt-10 md:mt-16 flex flex-wrap items-center gap-4 md:gap-8 text-white/50 text-sm">
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

          {/* Right: Dashboard mockup / image */}
          <div ref={imageRef} className="hidden lg:block relative">
            {/* Decorative circle behind image */}
            <div className="absolute -inset-8 rounded-full bg-accent-blue/5 blur-3xl" />

            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

              {/* Floating stats card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-soft-green/30 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="text-soft-green">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">100+ developers ready</span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-accent-blue border-2 border-white/20" />
                    <div className="w-7 h-7 rounded-full bg-accent-orange border-2 border-white/20" />
                    <div className="w-7 h-7 rounded-full bg-accent-warm border-2 border-white/20" />
                    <div className="w-7 h-7 rounded-full bg-primary-light border-2 border-white/20 flex items-center justify-center text-[10px] font-bold">
                      +97
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating card - code snippet */}
            <div className="absolute -top-4 -right-4 bg-primary-light/90 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent-orange" />
                <div className="w-2 h-2 rounded-full bg-accent-warm" />
                <div className="w-2 h-2 rounded-full bg-soft-green" />
              </div>
              <div className="font-mono text-xs text-white/70 space-y-1">
                <div><span className="text-accent-blue">const</span> team = <span className="text-soft-green">await</span></div>
                <div className="pl-2"><span className="text-accent-warm">sircle</span>.expand(&#123;</div>
                <div className="pl-4 text-white/50">devs: 3, stack: &apos;react&apos;</div>
                <div className="pl-2">&#125;);</div>
              </div>
            </div>

            {/* Dot pattern decoration */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 dot-pattern-light opacity-30" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to cream - only the very bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[120px]"
        style={{
          background: "linear-gradient(to top, var(--color-cream) 0%, rgba(250,249,246,0.5) 50%, transparent 100%)",
        }}
      />
    </section>
  );
}
