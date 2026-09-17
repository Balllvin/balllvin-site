"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollFilm: real GSAP ScrollTrigger entrances, play-once on enter.
// Progressive enhancement: CSS default is fully visible; gsap.from()
// hides targets only on the client when motion is allowed.
// Honors prefers-reduced-motion: reduce by doing nothing.
export default function ScrollFilm() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Single reveals: fade + rise, play once when entering viewport.
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 36,
          scale: 0.98,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      // Group reveals: stagger children for film pacing.
      // Timeline onComplete (not per-tween) so siblings (Shipped Work cards)
      // always clear to identical final transforms — no leftover stagger y.
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach(
        (group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
          if (items.length === 0) return;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
            onComplete: () => {
              // Drop inline transforms together so CSS grid top-edges match
              // and .card:hover translateY can apply without fighting GSAP.
              gsap.set(items, { clearProps: "transform" });
            },
          });
          tl.fromTo(
            items,
            { opacity: 0, y: 36, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              stagger: 0.12,
            }
          );
        }
      );
    }, "#main");

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, []);

  return null;
}
