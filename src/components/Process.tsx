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
  },
  {
    number: "02",
    title: "Ontmoet je developers",
    description:
      "Binnen 2 weken presenteren wij 2-3 pre-screened kandidaten. Je voert zelf de video interviews en technische assessments — jij beslist wie er in je team komt.",
    details: ["2-3 kandidaten in 2 weken", "Video interviews", "Technische assessment"],
  },
  {
    number: "03",
    title: "Start met bouwen",
    description:
      "Na jouw akkoord starten we direct de onboarding. Tooling setup, Slack access, Git repositories — binnen een week draait je nieuwe teamlid mee in daily standups.",
    details: ["Snelle onboarding", "Tooling & access setup", "Daily standups"],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-heading",
        { opacity: 0, y: 40 },
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
          { opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 },
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
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16 process-heading">
          <p className="text-accent-blue font-medium text-sm uppercase tracking-wider mb-4">
            Werkwijze
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-dark-text leading-tight mb-4">
            In 3 stappen naar jouw team
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

              <div className="relative bg-light-bg rounded-2xl p-8 h-full transition-all hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-accent-blue/20">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-heading font-bold text-accent-blue/15 group-hover:text-accent-blue/30 transition-colors">
                    {step.number}
                  </span>
                </div>

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
          ))}
        </div>
      </div>
    </section>
  );
}
