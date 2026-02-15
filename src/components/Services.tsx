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
  },
  {
    title: "Mobile Development",
    description: "Cross-platform en native mobile apps die gebruikers waarderen.",
    techs: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    title: "DevOps & Cloud",
    description: "Schaalbare infrastructuur, CI/CD pipelines en cloud architectuur.",
    techs: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    title: "UI/UX & Frontend",
    description: "Pixel-perfect interfaces en intuïtieve gebruikerservaringen.",
    techs: ["TypeScript", "Tailwind", "Figma", "Vue"],
  },
  {
    title: "API & Integraties",
    description: "Robuuste API's en naadloze integraties met externe systemen.",
    techs: ["REST", "GraphQL", "PostgreSQL", "Redis"],
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligente features en AI-gedreven oplossingen voor je product.",
    techs: ["Python", "TensorFlow", "LLMs", "Data"],
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
        { opacity: 0, y: 40 },
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
          { opacity: 0, y: 40, scale: 0.97 },
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
          { opacity: 0, scale: 0.8 },
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
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-light-bg">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16 services-heading">
          <p className="text-accent-blue font-medium text-sm uppercase tracking-wider mb-4">
            Services & Technologies
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-dark-text leading-tight mb-4">
            Expertise voor elk project
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            Van full-stack web development tot AI — onze developers beheersen de technologieën die jij nodig hebt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group bg-white rounded-2xl p-7 transition-all hover:shadow-xl hover:-translate-y-1 border border-border/50"
            >
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
