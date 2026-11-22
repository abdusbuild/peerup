"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Apple-style curves: a long, soft deceleration for reveals and a gentle in-out for transitions.
CustomEase.create("reveal", "0.16,1,0.3,1");
CustomEase.create("glide", "0.65,0,0.35,1");

/**
 * Global motion layer: smooth scroll, preloader → hero intro,
 * masked word reveals, fades, card zooms, media rises, parallax, counters, magnetic buttons, cursor.
 */
export default function Motion() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // ---- smooth scroll
    let lenis: Lenis | null = null;
    const tick = (t: number) => lenis?.raf(t * 1000);
    if (!reduce) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      lenis.stop();
    }

    // anchor links through Lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!;
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -20 });
      else el.scrollIntoView();
    };
    document.addEventListener("click", onClick);

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-preloader]", { display: "none" });
        return;
      }

      // ---- preloader → hero
      const intro = gsap.timeline({
        defaults: { ease: "reveal" },
        onComplete: () => lenis?.start(),
      });
      intro
        .from("[data-pre-letter]", { yPercent: 110, duration: 1.1, stagger: 0.045 })
        .to("[data-pre-bar]", { scaleX: 1, duration: 0.9, ease: "glide" }, "-=0.6")
        .to("[data-pre-letter]", { yPercent: -110, duration: 0.6, stagger: 0.025, ease: "power3.in" })
        .to("[data-preloader]", { yPercent: -100, duration: 1.1, ease: "glide" }, "-=0.25")
        .set("[data-preloader]", { display: "none" })
        // hero card settles in from slightly smaller, like a product shot coming to rest
        .from("[data-hero-card]", { scale: 0.92, y: 40, borderRadius: 56, duration: 1.8 }, "-=0.8")
        .from("[data-hero-split] .split-i", { yPercent: 110, duration: 1.4, stagger: 0.07 }, "-=1.45")
        .from("[data-hero-fade]", { y: 24, opacity: 0, duration: 1.4, stagger: 0.12 }, "-=1.1")
        .from("[data-hero-phone]", { y: 120, opacity: 0, scale: 0.94, duration: 2 }, "-=1.7")
        .from("[data-hero-chip]", { y: 24, scale: 0.92, opacity: 0, duration: 1.2, stagger: 0.14 }, "-=1.3");

      // ---- split headings: words rise out of their masks
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".split-i"), {
          yPercent: 110,
          duration: 1.3,
          ease: "reveal",
          stagger: 0.06,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // ---- scroll-scrubbed statements: letters go faint → solid
      gsap.utils.toArray<HTMLElement>("[data-scrub]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll(".split-c"),
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.02,
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
          }
        );
      });

      // ---- fades: a short, soft rise. No blur, just opacity + distance on a long ease.
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 56,
          opacity: 0,
          duration: 1.4,
          ease: "reveal",
          delay: Number(el.dataset.delay || 0) * 1.2,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // ---- zoom: large cards grow to full size as they scroll in (scrubbed, so it follows your hand)
      gsap.utils.toArray<HTMLElement>("[data-zoom]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "top 30%", scrub: 1 },
          }
        );
      });

      // ---- media rise: phones and images drift up and settle into place
      gsap.utils.toArray<HTMLElement>("[data-rise]").forEach((el) => {
        gsap.from(el, {
          y: 100,
          opacity: 0,
          scale: 0.96,
          duration: 1.8,
          ease: "reveal",
          delay: Number(el.dataset.delay || 0),
          scrollTrigger: { trigger: el, start: "top 95%" },
        });
      });

      // ---- parallax
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amt = Number(el.dataset.parallax || 0.2);
        gsap.fromTo(
          el,
          { yPercent: amt * 50 },
          {
            yPercent: -amt * 50,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      // ---- clip reveals (image / card wipes)
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(18% 12% 18% 12% round 2.5rem)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 2.5rem)",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 90%", end: "top 30%", scrub: 1 },
          }
        );
      });

      // ---- counters
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const dec = Number(el.dataset.decimals || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2.2,
          ease: "reveal",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => (el.textContent = obj.v.toFixed(dec)),
        });
      });

      // ---- bars
      gsap.utils.toArray<HTMLElement>("[data-bar]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.8,
          ease: "reveal",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });
    });

    // ---- magnetic buttons
    const magnets = fine && !reduce ? Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]")) : [];
    const magMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - r.left - r.width / 2) * 0.3,
        y: (e.clientY - r.top - r.height / 2) * 0.4,
        duration: 0.6,
        ease: "power3.out",
      });
    };
    const magLeave = (e: MouseEvent) =>
      gsap.to(e.currentTarget as HTMLElement, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1,0.35)" });
    magnets.forEach((m) => {
      m.addEventListener("mousemove", magMove);
      m.addEventListener("mouseleave", magLeave);
    });

    // ---- tilt cards
    const tilts = fine && !reduce ? Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]")) : [];
    const tiltMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, { rotateY: px * 8, rotateX: -py * 8, transformPerspective: 900, duration: 0.6, ease: "power3.out" });
    };
    const tiltLeave = (e: MouseEvent) =>
      gsap.to(e.currentTarget as HTMLElement, { rotateX: 0, rotateY: 0, duration: 0.9, ease: "power3.out" });
    tilts.forEach((t) => {
      t.addEventListener("mousemove", tiltMove);
      t.addEventListener("mouseleave", tiltLeave);
    });

    // ---- cursor
    let onMove: ((e: MouseEvent) => void) | null = null;
    let onOver: ((e: MouseEvent) => void) | null = null;
    if (fine && !reduce && dot.current && ring.current) {
      document.documentElement.classList.add("has-cursor");
      const dx = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" });
      const dy = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" });
      const rx = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
      const ry = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
      gsap.set([dot.current, ring.current], { opacity: 1 });
      onMove = (e) => {
        dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
      };
      onOver = (e) => {
        const t = (e.target as HTMLElement).closest<HTMLElement>("a, button, [data-cursor]");
        const text = t?.dataset.cursor || "";
        gsap.to(ring.current, { scale: t ? (text ? 2.6 : 1.7) : 1, duration: 0.4, ease: "power3.out" });
        gsap.to(ring.current, { backgroundColor: text ? "rgba(98,102,188,0.95)" : "rgba(98,102,188,0)", duration: 0.3 });
        if (label.current) label.current.textContent = text;
        gsap.to(dot.current, { scale: t ? 0 : 1, duration: 0.3 });
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseover", onOver);
    }

    // refresh once fonts/images settle
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      ctx.revert();
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      magnets.forEach((m) => {
        m.removeEventListener("mousemove", magMove);
        m.removeEventListener("mouseleave", magLeave);
      });
      tilts.forEach((t) => {
        t.removeEventListener("mousemove", tiltMove);
        t.removeEventListener("mouseleave", tiltLeave);
      });
      if (onMove) window.removeEventListener("mousemove", onMove);
      if (onOver) window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-cursor");
      gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-brand-500 opacity-0"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[99] -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/60 opacity-0"
      >
        <span ref={label} className="text-[5px] font-bold uppercase tracking-wider text-white" />
      </div>
    </>
  );
}
