"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Sircle.dev heeft ons geholpen om binnen twee weken drie developers aan ons team toe te voegen. De kwaliteit en communicatie zijn uitstekend.",
    name: "Mark de Vries",
    role: "CTO",
    company: "TechScale B.V.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    companyLogo: "TS",
  },
  {
    quote:
      "Het Nederlands management maakt het verschil. Geen miscommunicatie, geen culturele barrières — gewoon een naadloze uitbreiding van ons team.",
    name: "Lisa Jansen",
    role: "VP Engineering",
    company: "DataFlow",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    companyLogo: "DF",
  },
  {
    quote:
      "We besparen meer dan 50% ten opzichte van lokale hires en de output is vergelijkbaar. De flexibiliteit om maandelijks op te zeggen geeft ons rust.",
    name: "Thomas Bakker",
    role: "Product Manager",
    company: "ScaleUp.io",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    companyLogo: "SU",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonials-heading",
        { opacity: 0.3, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testimonials-heading", start: "top 85%" },
        }
      );

      gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 40, rotateY: 5 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decoration-blob decoration-blob-warm absolute -top-32 left-1/3 w-[400px] h-[400px]" />
      <div className="decoration-blob decoration-blob-blue absolute -bottom-40 -right-20 w-[500px] h-[500px]" />
      <div className="absolute bottom-20 left-8 w-40 h-40 dot-pattern-light opacity-30" />

      <div className="mx-auto max-w-[85%] 2xl:max-w-[1400px] px-6 relative z-10">
        <div className="text-center mb-16 testimonials-heading">
          <p className="text-accent-blue font-medium text-sm uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-dark-text leading-tight mb-4">
            Wat onze{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-blue">klanten</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-accent-blue/15 -skew-x-3 rounded" />
            </span>{" "}
            zeggen
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            Ontdek hoe Nederlandse bedrijven hun teams succesvol uitbreiden met
            Sircle.dev.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="testimonial-card bg-white rounded-2xl p-8 border border-border/50 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-accent-blue/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="#ffa710"
                  >
                    <path d="M9 0l2.47 5.01L17 5.82l-4 3.9.94 5.5L9 12.72l-4.94 2.5.94-5.5-4-3.9 5.53-.81L9 0z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-dark-text text-base leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                {/* Real avatar photo */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border/30 shrink-0"
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="text-dark-text font-medium text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-text text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                {/* Company logo badge */}
                <div className="w-10 h-10 rounded-lg bg-light-bg flex items-center justify-center text-xs font-bold text-gray-text border border-border/30">
                  {testimonial.companyLogo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
