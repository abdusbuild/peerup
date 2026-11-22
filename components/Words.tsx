"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["Hesitant", "Curious", "Practising", "Confident", "Fluent", "Unstoppable"];

/** Intrici-style pinned word sequence: the learner's journey, one word at a time. */
export default function Words() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-word]", root.current!);
      const track = root.current!.querySelector("[data-track]")!;
      const step = items[0].offsetHeight;
      gsap.set(items, { opacity: 0.12 });
      gsap.set(items[0], { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2.5,
          pin: true,
          scrub: 0.6,
        },
      });
      items.forEach((el, i) => {
        if (i === 0) return;
        tl.to(track, { y: -step * i, ease: "power2.inOut", duration: 1 }, i - 1)
          .to(items[i - 1], { opacity: 0.12, duration: 0.5 }, i - 1)
          .to(el, { opacity: 1, duration: 0.5 }, i - 0.6);
      });
      tl.to("[data-words-bg]", { scale: 1.6, opacity: 1, ease: "none", duration: items.length - 1 }, 0);
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="relative mx-3 flex h-screen items-center overflow-hidden rounded-[28px] bg-ink-2 text-white md:mx-5">
      <div
        data-words-bg
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[90px]"
        style={{ background: "radial-gradient(circle, #6266bc 0%, #363b8c 40%, transparent 70%)" }}
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-6 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 text-xl text-white/55 md:text-3xl">With PeerUp you go from</p>
        <div className="relative h-[1.4em] overflow-hidden text-[13vw] md:h-[1.1em] md:overflow-visible display md:text-[9vw]">
          <div data-track>
            {words.map((w, i) => (
              <div key={w} data-word className={"max-md:leading-[1.4] " + (i === words.length - 1 ? "text-brand-300" : "")}>
                {w}
                {i === words.length - 1 ? "." : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
