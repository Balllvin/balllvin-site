"use client";

import { useEffect, useRef } from "react";
import styles from "./CloseParticles.module.css";

type Particle = {
  bx: number;
  by: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  tint: number;
  phase: number;
  swaySpeed: number;
  swayAmp: number;
  riseSpeed: number;
  depth: number;
};

const MAX_PARTICLES = 11000;
const MIN_PARTICLES = 3000;
const RADIUS = 150;
const DPR_CAP = 1.75;

// CloseParticles: canvas dust confined to the `.close` section.
// Dense even grid + jitter (~area/180, clamp 3000–11000); ambient rise + sway.
// Prefer many smaller/dimmer dots over fewer large ones. Pointer nearby
// lifts/scatters with velocity + soft spring home. rAF + refs only, no setState.
// Static single frame for prefers-reduced-motion; ambient-only on touch.
export default function CloseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const section = canvas.parentElement;
    if (!section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let visible = true;
    let disposed = false;

    const pointer = { x: -9999, y: -9999, active: false, sx: -9999, sy: -9999 };

    const seed = () => {
      const area = Math.max(1, w * h);
      const count = Math.max(
        MIN_PARTICLES,
        Math.min(MAX_PARTICLES, Math.round(area / 180))
      );
      // Even coverage: grid sized to count, then jitter inside each cell.
      const cols = Math.max(1, Math.round(Math.sqrt((count * w) / Math.max(1, h))));
      const rows = Math.max(1, Math.ceil(count / cols));
      const list: Particle[] = [];
      let i = 0;
      for (let gy = 0; gy < rows && i < count; gy += 1) {
        for (let gx = 0; gx < cols && i < count; gx += 1, i += 1) {
          const cx = ((gx + 0.5) / cols) * w;
          const cy = ((gy + 0.5) / rows) * h;
          const jx = (Math.random() - 0.5) * (w / cols) * 0.9;
          const jy = (Math.random() - 0.5) * (h / rows) * 0.9;
          list.push({
            bx: cx + jx,
            by: cy + jy,
            ox: 0,
            oy: 0,
            vx: 0,
            vy: 0,
            r: 0.25 + Math.random() * 0.55,
            a: 0.14 + Math.random() * 0.34,
            tint: Math.random(),
            phase: Math.random() * Math.PI * 2,
            swaySpeed: 0.2 + Math.random() * 0.5,
            swayAmp: 6 + Math.random() * 14,
            riseSpeed: 4 + Math.random() * 12,
            depth: 0.4 + Math.random() * 0.6,
          });
        }
      }
      particles = list;
    };

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        const x = p.bx;
        const y = p.by;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          p.tint > 0.72
            ? `rgba(236, 238, 233, ${p.a.toFixed(3)})`
            : `rgba(127, 209, 185, ${p.a.toFixed(3)})`;
        ctx.fill();
      }
    };

    let last = performance.now();
    let t = 0;

    const frame = (now: number) => {
      if (!running || !visible || disposed) return;
      // Throttle to ~60fps max; skip long-gap jumps (tab switch).
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt;

      // Ease the reactive center toward the real pointer — cinematic, not snappy.
      pointer.sx += (pointer.x - pointer.sx) * 0.08;
      pointer.sy += (pointer.y - pointer.sy) * 0.08;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // Ambient cinematic rise + sway, scaled by depth.
        const sway = Math.sin(t * p.swaySpeed + p.phase) * p.swayAmp;
        const rise = (t * p.riseSpeed * p.depth) % (h + 80);

        if (pointer.active) {
          const px = p.bx + p.ox;
          const py = p.by + p.oy;
          const dx = px - pointer.sx;
          const dy = py - pointer.sy;
          const dist = Math.hypot(dx, dy);
          if (dist < RADIUS && dist > 0.001) {
            const fall = 1 - dist / RADIUS;
            const push = fall * fall * 2.6 * p.depth;
            const inv = 1 / dist;
            // Scatter away from cursor + free upward lift.
            p.vx += dx * inv * push;
            p.vy += dy * inv * push - fall * 1.4 * p.depth;
          }
        }

        // Soft spring home + friction so disturbed particles settle gently.
        p.vx += -p.ox * 1.6 * dt;
        p.vy += -p.oy * 1.6 * dt;
        const friction = Math.exp(-2.4 * dt);
        p.vx *= friction;
        p.vy *= friction;
        p.ox += p.vx;
        p.oy += p.vy;

        let y = p.by + p.oy - rise;
        // Wrap rising anchors so density stays even top to bottom.
        y = ((y % (h + 80)) + (h + 80)) % (h + 80) - 40;
        const x = p.bx + p.ox + sway * 0.35;

        // Fade near wrap edges so pop-in is invisible.
        let edge = 1;
        if (y < 0) edge = Math.max(0, 1 + y / 40);
        else if (y > h) edge = Math.max(0, 1 - (y - h) / 40);

        const twinkle = 0.75 + 0.25 * Math.sin(t * 0.9 + p.phase * 2);
        const alpha = p.a * twinkle * edge;
        if (alpha <= 0.01) continue;

        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          p.tint > 0.72
            ? `rgba(236, 238, 233, ${alpha.toFixed(3)})`
            : `rgba(127, 209, 185, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || disposed || !visible) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (!pointer.active) {
        pointer.sx = pointer.x;
        pointer.sy = pointer.y;
        pointer.active = true;
      }
    };

    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const onVis = () => {
      visible = document.visibilityState === "visible";
      if (visible) {
        if (!reduced) start();
      } else {
        stop();
      }
    };

    resize();

    if (reduced) {
      drawStatic();
      window.addEventListener("resize", resize);
      const ro = new ResizeObserver(() => {
        resize();
        drawStatic();
      });
      ro.observe(section);
      return () => {
        disposed = true;
        window.removeEventListener("resize", resize);
        ro.disconnect();
      };
    }

    // Touch / coarse pointers: gentle ambient drift only, no reactive field.
    if (!coarse) {
      section.addEventListener("pointermove", onMove, { passive: true });
      section.addEventListener("pointerleave", onLeave);
    }

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible) start();
        else stop();
      },
      { threshold: 0.05 }
    );
    io.observe(section);

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(section);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);

    start();

    return () => {
      disposed = true;
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      if (!coarse) {
        section.removeEventListener("pointermove", onMove);
        section.removeEventListener("pointerleave", onLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
