"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Starter",
    price: "€5.500",
    period: "/maand",
    description: "Perfect om te starten met je eerste dedicated developer.",
    features: [
      "1 dedicated developer",
      "Full-time (40h/week)",
      "Daily standups",
      "Weekly progress updates",
      "Direct Slack access",
      "Maandelijks opzegbaar",
    ],
    highlighted: false,
    cta: "Start met Starter",
  },
  {
    name: "Growth",
    price: "€9.500",
    period: "/maand",
    description: "Ideaal voor groeiende teams die snel willen schalen.",
    features: [
      "2 dedicated developers",
      "Team collaboration",
      "Sprint planning & retrospectives",
      "Bi-weekly demos",
      "Direct Slack access",
      "Dedicated project manager",
    ],
    highlighted: true,
    cta: "Start met Growth",
    badge: "Populair",
  },
  {
    name: "Enterprise",
    price: "€13.500",
    period: "+/maand",
    description: "Voor bedrijven die een volledig team nodig hebben.",
    features: [
      "3-5+ dedicated developers",
      "Inclusief tech lead",
      "Architecture support",
      "Priority support",
      "Quarterly strategy reviews",
      "Custom SLA",
    ],
    highlighted: false,
    cta: "Neem contact op",
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-heading",
        { opacity: 0.3, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pricing-heading", start: "top 85%" },
        }
      );

      gsap.utils.toArray<HTMLElement>(".pricing-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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
    <section id="pricing" ref={sectionRef} className="py-24 md:py-32 bg-light-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decoration-blob decoration-blob-blue absolute -top-40 -left-20 w-[400px] h-[400px]" />
      <div className="decoration-blob decoration-blob-warm absolute -bottom-32 right-1/4 w-[350px] h-[350px]" />
      <div className="absolute top-20 right-10 w-36 h-36 dot-pattern-light opacity-30" />

      <div className="mx-auto max-w-[85%] 2xl:max-w-[1400px] px-6 relative z-10">
        <div className="text-center mb-16 pricing-heading">
          <p className="text-accent-blue font-medium text-sm uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-dark-text leading-tight mb-4">
            Simpele,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-blue">transparante</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-accent-blue/15 -skew-x-3 rounded" />
            </span>{" "}
            prijzen
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            Geen verborgen kosten. Geen lange contracten. Kies het plan dat bij
            jouw team past.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card relative rounded-2xl p-8 transition-all hover:shadow-xl hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-primary text-white shadow-2xl shadow-primary/20 md:-mt-4 md:mb-[-1rem] md:py-10 border-2 border-accent-blue/30"
                  : "bg-white border border-border/50 hover:border-accent-blue/20"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-orange text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-accent-orange/25">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`font-heading text-lg font-medium mb-2 ${
                    plan.highlighted ? "text-white/90" : "text-dark-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`font-heading text-4xl md:text-5xl font-bold ${
                      plan.highlighted ? "text-white" : "text-dark-text"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/60" : "text-gray-text"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-white/70" : "text-gray-text"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className={`shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-soft-green" : "text-accent-blue"
                      }`}
                      fill="currentColor"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/80" : "text-gray-text"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block text-center font-medium py-3.5 rounded-full transition-all text-sm ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90 hover:shadow-lg"
                    : "bg-primary text-white hover:bg-primary-light hover:shadow-lg"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
