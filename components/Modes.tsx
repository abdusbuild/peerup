"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { modes } from "@/lib/site";
import Phone from "./Phone";
import Split from "./Split";

gsap.registerPlugin(ScrollTrigger);

/** Pinned scroll story: four ways to practice, phone screen swaps as you scroll. */
export default function Modes() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]", root.current!);
      const screens = gsap.utils.toArray<HTMLElement>("[data-screen]", root.current!);
      const dots = gsap.utils.toArray<HTMLElement>("[data-dot]", root.current!);
      const stats = gsap.utils.toArray<HTMLElement>("[data-stat]", root.current!);
      gsap.set([...steps.slice(1), ...stats.slice(1)], { autoAlpha: 0, y: 60 });
      gsap.set(screens.slice(1), { yPercent: 105 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: "[data-pin]",
          start: "top top",
          end: () => "+=" + window.innerHeight * (modes.length - 0.3),
          pin: true,
          scrub: 0.8,
          snap: { snapTo: 1 / (modes.length - 1), duration: 0.6, ease: "power2.inOut" },
        },
      });
      for (let i = 1; i < modes.length; i++) {
        tl.to(steps[i - 1], { autoAlpha: 0, y: -60, duration: 0.5 }, i)
          .to(steps[i], { autoAlpha: 1, y: 0, duration: 0.5 }, i + 0.2)
          .to(stats[i - 1], { autoAlpha: 0, y: -60, duration: 0.5 }, i + 0.05)
          .to(stats[i], { autoAlpha: 1, y: 0, duration: 0.5 }, i + 0.3)
          .to(screens[i], { yPercent: 0, duration: 0.8 }, i)
          .to(screens[i - 1], { scale: 0.9, opacity: 0.4, duration: 0.8 }, i)
          .to(dots[i], { backgroundColor: "#6266bc", scaleY: 1.6, duration: 0.3 }, i)
          .to(dots[i - 1], { backgroundColor: "rgba(255,255,255,0.15)", scaleY: 1, duration: 0.3 }, i);
      }
      tl.to({}, { duration: 0.3 });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="practice" ref={root} className="relative mx-3 overflow-hidden rounded-[28px] bg-ink-2 text-white md:mx-5">
      <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-40">
        <Split
          accent="text-brand-300"
          text={"Every kind of conversation,\n*one* app."}
          className="display max-w-5xl text-[12vw] md:text-[88px]"
        />
      </div>

      {/* Desktop: pinned story */}
      <div data-pin className="hidden h-screen items-center lg:flex">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-16 px-6">
          <div className="relative h-[340px]">
            {modes.map((m, i) => (
              <div key={m.key} data-step className="absolute inset-0 flex flex-col justify-center">
                <h3 className="display text-6xl">
                  <span className="text-brand-300">{i + 1}.</span> {m.title}
                </h3>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="relative flex items-center gap-8">
            <Phone className="w-[300px] xl:w-[330px]">
              {modes.map((m, i) => (
                <div key={m.key} data-screen className="absolute inset-0" style={{ zIndex: i }}>
                  <Image src={m.screen} alt={`PeerUp app: ${m.title}`} fill sizes="340px" className="object-cover object-top" />
                </div>
              ))}
            </Phone>
            <div className="absolute -right-10 flex flex-col gap-3">
              {modes.map((m, i) => (
                <span key={m.key} data-dot className={"h-6 w-1.5 rounded-full " + (i === 0 ? "bg-brand-500" : "bg-white/15")} />
              ))}
            </div>
          </div>

          <div className="relative h-[340px]">
            {modes.map((m) => (
              <div key={m.key} data-stat className="absolute inset-0 flex items-center justify-end">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-sm text-white/45">Live in the app</p>
                  <p className="mt-2 display text-4xl text-brand-300">{m.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: stacked cards */}
      <div className="mx-auto grid max-w-3xl gap-20 px-6 py-20 lg:hidden">
        {modes.map((m, i) => (
          <div key={m.key} className="grid gap-8" data-reveal>
            <Phone src={m.screen} alt={`PeerUp app: ${m.title}`} className="mx-auto w-[68%] max-w-[300px]" />
            <div>
              <h3 className="display text-5xl">
                <span className="text-brand-300">{i + 1}.</span> {m.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-white/60">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
