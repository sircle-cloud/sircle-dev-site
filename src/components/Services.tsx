"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Full-stack Development",
    description: "React, Node.js, Python — moderne web applicaties van frontend tot backend.",
    techs: ["React", "Node.js", "Python", "Next.js"],
    iconBg: "bg-accent-blue/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    description: "Cross-platform en native mobile apps die gebruikers waarderen.",
    techs: ["Flutter", "React Native", "iOS", "Android"],
    iconBg: "bg-accent-orange/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-orange">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "DevOps & Cloud",
    description: "Schaalbare infrastructuur, CI/CD pipelines en cloud architectuur.",
    techs: ["AWS", "GCP", "Docker", "Kubernetes"],
    iconBg: "bg-soft-green/50",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
  },
  {
    title: "UI/UX & Frontend",
    description: "Pixel-perfect interfaces en intuïtieve gebruikerservaringen.",
    techs: ["TypeScript", "Tailwind", "Figma", "Vue"],
    iconBg: "bg-accent-warm/15",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-warm">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "API & Integraties",
    description: "Robuuste API's en naadloze integraties met externe systemen.",
    techs: ["REST", "GraphQL", "PostgreSQL", "Redis"],
    iconBg: "bg-accent-blue/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue">
        <path d="M4 11a9 9 0 0118 0" />
        <path d="M4 11a9 9 0 0018 0" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligente features en AI-gedreven oplossingen voor je product.",
    techs: ["Python", "TensorFlow", "LLMs", "Data"],
    iconBg: "bg-accent-orange/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-orange">
        <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1.27c.34-.6.99-1 1.73-1a2 2 0 110 4c-.74 0-1.39-.4-1.73-1H20a7 7 0 01-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 11-4 0c0-.74.4-1.39 1-1.73V23a7 7 0 01-7-7H2.73c-.34.6-.99 1-1.73 1a2 2 0 110-4c.74 0 1.39.4 1.73 1H4a7 7 0 017-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2z" />
      </svg>
    ),
  },
];

const technologies = [
  "React", "Python", "Node.js", "AWS", "Google Cloud", "Django",
  "Vue", "PostgreSQL", "Flutter", "TypeScript", "Docker", "Kubernetes",
  "MongoDB", "Redis", "Next.js", "GraphQL",
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-heading",
        { opacity: 0.3, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".services-heading", start: "top 85%" },
        }
      );

      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
      });

      // Tech pills animation
      gsap.utils.toArray<HTMLElement>(".tech-pill").forEach((pill, i) => {
        gsap.fromTo(
          pill,
          { opacity: 0.3, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            delay: i * 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: ".tech-grid", start: "top 88%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-light-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decoration-blob decoration-blob-orange absolute -top-32 right-1/4 w-[400px] h-[400px]" />
      <div className="absolute top-32 right-8 w-36 h-36 dot-pattern opacity-20" />

      <div className="mx-auto max-w-[85%] 2xl:max-w-[1400px] px-6 relative z-10">
        <div className="text-center mb-16 services-heading">
          <p className="text-accent-blue font-medium text-sm uppercase tracking-wider mb-4">
            Services & Technologies
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-dark-text leading-tight mb-4">
            Expertise voor{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-blue">elk project</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-accent-blue/15 -skew-x-3 rounded" />
            </span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            Van full-stack web development tot AI — onze developers beheersen de technologieën die jij nodig hebt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group bg-white rounded-2xl p-7 transition-all hover:shadow-xl hover:-translate-y-1 border border-border/50 hover:border-accent-blue/20 border-t-2 border-t-transparent hover:border-t-accent-blue"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.iconBg}`}>
                {service.icon}
              </div>
              <h3 className="font-heading text-lg font-medium text-dark-text mb-2">
                {service.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-gray-text bg-light-bg px-3 py-1 rounded-full group-hover:bg-accent-blue/8 group-hover:text-accent-blue transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology pills */}
        <div className="tech-grid text-center">
          <p className="text-gray-text text-sm font-medium mb-6 uppercase tracking-wider">
            Technologieën waar we mee werken
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="tech-pill bg-white text-dark-text text-sm font-medium px-5 py-2.5 rounded-full border border-border hover:border-accent-blue hover:text-accent-blue transition-colors cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
