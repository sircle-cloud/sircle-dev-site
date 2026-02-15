"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Vertel ons wat je nodig hebt",
    description:
      "Plan een gratis kennismakingsgesprek. We bespreken jouw requirements, tech stack, teamstructuur en cultuur. Op basis daarvan zoeken wij de perfecte match.",
    details: ["Requirements gesprek", "Tech stack analyse", "Team culture fit"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    number: "02",
    title: "Ontmoet je developers",
    description:
      "Binnen 2 weken presenteren wij 2-3 pre-screened kandidaten. Je voert zelf de video interviews en technische assessments — jij beslist wie er in je team komt.",
    details: ["2-3 kandidaten in 2 weken", "Video interviews", "Technische assessment"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
  {
    number: "03",
    title: "Start met bouwen",
    description:
      "Na jouw akkoord starten we direct de onboarding. Tooling setup, Slack access, Git repositories — binnen een week draait je nieuwe teamlid mee in daily standups.",
    details: ["Snelle onboarding", "Tooling & access setup", "Daily standups"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-heading",
        { opacity: 0.3, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-heading",
            start: "top 85%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".process-step").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0.3, x: i % 2 === 0 ? -40 : 40, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decoration-blob decoration-blob-green absolute top-0 right-0 w-[500px] h-[500px]" />
      <div className="absolute top-20 left-10 w-40 h-40 dot-pattern-light opacity-30" />

      <div className="mx-auto max-w-[85%] 2xl:max-w-[1400px] px-6 relative z-10">
        <div className="text-center mb-16 process-heading">
          <p className="text-accent-blue font-medium text-sm uppercase tracking-wider mb-4">
            Werkwijze
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-dark-text leading-tight mb-4">
            In 3 stappen naar{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-blue">jouw team</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-accent-blue/15 -skew-x-3 rounded" />
            </span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            Van eerste gesprek tot productieve developer — wij maken het simpel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-step group relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-px border-t-2 border-dashed border-border z-0" />
              )}

              <div className="relative bg-white rounded-2xl overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1 border border-border/50 hover:border-accent-blue/20">
                {/* Step image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  {/* Step number overlay */}
                  <span className="absolute top-4 left-4 text-4xl font-heading font-bold text-white/80 drop-shadow-lg">
                    {step.number}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="font-heading text-xl font-medium text-dark-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Detail tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-xs font-medium text-accent-blue bg-accent-blue/8 px-3 py-1 rounded-full"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
