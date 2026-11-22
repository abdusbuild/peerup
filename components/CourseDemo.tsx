"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arrow from "@/components/Arrow";

gsap.registerPlugin(ScrollTrigger);

const prompt = "Create a course for a sales associate at an ed-tech startup";
const modules = [
  { n: "01", t: "Opening a discovery call", d: "Roleplay · 8 min" },
  { n: "02", t: "Explaining the product simply", d: "Speaking drill · 6 min" },
  { n: "03", t: "Handling price objections", d: "Roleplay · 10 min" },
  { n: "04", t: "Following up with parents", d: "AI feedback · 7 min" },
];

/** Types the prompt, then "generates" a course outline. Plays once on scroll. */
export default function CourseDemo() {
  const root = useRef<HTMLDivElement>(null);
  const out = useRef<HTMLSpanElement>(null);
  const setTyped = (t: string) => { if (out.current) out.current.textContent = t; };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = root.current!.querySelectorAll("[data-mod]");
    if (reduce) {
      setTyped(prompt);
      return;
    }
    gsap.set(items, { opacity: 0, y: 20 });
    const obj = { i: 0 };
    const tl = gsap.timeline({
      paused: true,
    });
    tl.to(obj, {
      i: prompt.length,
      duration: 2.2,
      ease: "none",
      onUpdate: () => setTyped(prompt.slice(0, Math.round(obj.i))),
    })
      .to("[data-gen]", { scale: 0.94, duration: 0.12, yoyo: true, repeat: 1 }, "+=0.2")
      .to("[data-shimmer]", { opacity: 1, duration: 0.2 })
      .to("[data-shimmer]", { opacity: 0, duration: 0.3 }, "+=0.7")
      .to(items, { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "expo.out" });

    const st = ScrollTrigger.create({
      trigger: root.current,
      start: "top 70%",
      once: true,
      onEnter: () => tl.play(),
    });
    return () => {
      st.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={root}>
      <div className="flex flex-col gap-3 rounded-2xl bg-white/[0.07] p-4 sm:flex-row sm:items-center">
        <p className="min-h-[3rem] flex-1 text-[15px] leading-relaxed text-white/90">
          <span ref={out} />
          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-brand-300" />
        </p>
        <button data-gen className="brand-gradient shrink-0 rounded-full px-5 py-3 text-sm font-semibold text-white">
          Generate course
        </button>
      </div>
      <div className="relative mt-8 border-t border-white/10">
        <div data-shimmer className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-400/20 to-transparent opacity-0" />
        {modules.map((m) => (
          <div key={m.n} data-mod className="flex items-center gap-5 border-b border-white/10 py-5">
            <span className="font-display text-2xl text-brand-300">{m.n}</span>
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-white">{m.t}</p>
              <p className="text-xs text-white/45">{m.d}</p>
            </div>
            <Arrow className="text-white/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
