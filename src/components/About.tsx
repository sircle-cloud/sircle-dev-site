"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Dedicated teams",
    description: "Developers die volledig geïntegreerd zijn in jouw team — geen black-box outsourcing.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Nederlands management",
    description: "Jouw aanspreekpunt is altijd Nederlands. Wij overbruggen cultuur en timezone.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: "Snel & flexibel",
    description: "Start binnen 2 weken. Maandelijks opzegbaar. Schaal op of af wanneer jij wilt.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-animate").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0.3, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decoration-blob decoration-blob-blue absolute -top-40 -right-40 w-[500px] h-[500px]" />
      <div className="decoration-blob decoration-blob-green absolute -bottom-32 -left-32 w-[400px] h-[400px]" />

      {/* Dot pattern top right */}
      <div className="absolute top-16 right-16 w-48 h-48 dot-pattern-light opacity-40" />

      <div className="mx-auto max-w-[85%] 2xl:max-w-[1400px] px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text + image */}
          <div>
            <p className="about-animate text-accent-blue font-medium text-sm uppercase tracking-wider mb-4">
              Over Sircle.dev
            </p>
            <h2 className="about-animate font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-dark-text leading-tight mb-6">
              Wij verbinden{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-blue">toptalent</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-accent-blue/15 -skew-x-3 rounded" />
              </span>{" "}
              met Nederlandse bedrijven
            </h2>
            <p className="about-animate text-gray-text text-lg leading-relaxed mb-8">
              We zijn gepassioneerd over het helpen van Nederlandse bedrijven om hun
              development teams te versterken. Via ons partnership met 100+
              developers bieden we hoogwaardige, dedicated teamleden aan — volledig
              geïntegreerd in jouw workflow via Slack, Git en daily standups.
            </p>

            {/* Image with overlay */}
            <div className="about-animate relative rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern workspace"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>

            <div className="about-animate flex flex-wrap gap-3">
              {["Slack integratie", "Git workflow", "Daily standups", "Sprint planning"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-soft-green/50 text-primary text-sm font-medium px-4 py-1.5 rounded-full border border-soft-green/30"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="about-animate group bg-white rounded-2xl p-6 flex gap-5 items-start transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-default border border-border/50 hover:border-accent-blue/30"
              >
                <div className="shrink-0 w-12 h-12 bg-accent-blue/8 rounded-xl flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-dark-text mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
