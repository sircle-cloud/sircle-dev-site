"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Developers beschikbaar",
    prefix: "",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: 2,
    suffix: " weken",
    label: "Gemiddelde opstarttijd",
    prefix: "<",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
  {
    value: 60,
    suffix: "-85%",
    label: "Kostenvoordeel",
    prefix: "",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    value: 90,
    suffix: "%+",
    label: "Klant retentie",
    prefix: "",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Counter animations
      countRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: () => {
            if (el) {
              el.textContent = `${stats[i].prefix}${Math.round(obj.val)}`;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #142828 0%, #1a3636 40%, #0d2020 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-warm rounded-full blur-[120px]" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern-light opacity-10" />

      {/* Floating circles */}
      <div className="absolute top-10 left-[10%] w-20 h-20 rounded-full border border-white/5" />
      <div className="absolute bottom-10 right-[15%] w-32 h-32 rounded-full border border-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 text-accent-warm group-hover:bg-white/15 transition-colors">
                {stat.icon}
              </div>

              <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 whitespace-nowrap">
                <span ref={(el) => { countRefs.current[i] = el; }}>
                  {stat.prefix}0
                </span>
                <span className="text-accent-warm">{stat.suffix}</span>
              </div>
              <p className="text-white/60 text-sm md:text-base font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
