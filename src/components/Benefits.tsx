"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "40-60% kostenvoordeel",
    description:
      "Bespaar fors ten opzichte van lokale hires, zonder in te leveren op kwaliteit. Onze developers leveren vergelijkbare output.",
    color: "bg-soft-green/50 text-primary",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: "Start binnen 2 weken",
    description:
      "Geen maandenlange wervingsprocessen. Binnen 2 weken heb je een dedicated developer in je team.",
    color: "bg-accent-blue/10 text-accent-blue",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a1 1 0 01-.78-1.63l9.9-10.2a.5.5 0 01.86.46l-1.92 6.02A1 1 0 0013 10h7a1 1 0 01.78 1.63l-9.9 10.2a.5.5 0 01-.86-.46l1.92-6.02A1 1 0 0011 14H4z" />
      </svg>
    ),
    title: "Maandelijks opzegbaar",
    description:
      "Geen lange contracten of lock-in. Schaal op of af wanneer je wilt — volledige flexibiliteit.",
    color: "bg-accent-orange/10 text-accent-orange",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M9 8h10M9 12h10M9 16h10M5 8h.01M5 12h.01M5 16h.01" />
      </svg>
    ),
    title: "Nederlands management",
    description:
      "Jouw aanspreekpunt is altijd Nederlands. Wij overbruggen taal, cultuur en timezone — jij focust op bouwen.",
    color: "bg-accent-warm/15 text-accent-warm",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Vetted & pre-screened",
    description:
      "Dubbel selectieproces: TechNext pre-screent, Sircle.dev doet de final check. Alleen de beste developers.",
    color: "bg-soft-green/50 text-primary",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.95-2 5-4 5s-4-3.05-4-5a4 4 0 014-4z" />
        <path d="M8 14s-4 2-4 6h16c0-4-4-6-4-6" />
        <path d="M15 11l2 2 4-4" />
      </svg>
    ),
    title: "AI-augmented development",
    description:
      "Onze developers werken met AI-tools als Claude Code en Copilot — 2-3x hogere productiviteit.",
    color: "bg-accent-blue/10 text-accent-blue",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".benefits-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".benefits-heading",
            start: "top 85%",
          },
        }
      );

      // Staggered card reveal
      gsap.utils.toArray<HTMLElement>(".benefit-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-24 md:py-32 bg-light-bg">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16 benefits-heading">
          <p className="text-accent-blue font-medium text-sm uppercase tracking-wider mb-4">
            Waarom Sircle.dev
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-dark-text leading-tight mb-4">
            Voordelen die het verschil maken
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            Ontdek waarom steeds meer Nederlandse bedrijven kiezen voor Sircle.dev
            om hun development teams te versterken.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="benefit-card group bg-white rounded-2xl p-7 transition-all hover:shadow-xl hover:-translate-y-1 cursor-default border border-border/50"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${benefit.color}`}
              >
                {benefit.icon}
              </div>
              <h3 className="font-heading text-xl font-medium text-dark-text mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
