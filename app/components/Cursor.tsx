"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

// Custom cursor: spring-lag ring following the pointer.
// Progressive enhancement only: disabled on touch devices and when
// prefers-reduced-motion is set. rAF loop, ref writes, no state per move.
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      dot.style.transform = `translate(${x}px, ${y}px)`;
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    document.documentElement.classList.add(styles.hasCursor);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove(styles.hasCursor);
    };
  }, []);

  return (
    <>
      <div className={styles.dot} ref={dotRef} aria-hidden="true" />
      <div className={styles.ring} ref={ringRef} aria-hidden="true" />
    </>
  );
}
