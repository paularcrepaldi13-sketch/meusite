"use client";
import { useEffect, useRef, useState, CSSProperties, ReactNode } from "react";

export function FadeIn({ children, delay = 0, style, className }: { children: ReactNode; delay?: number; style?: CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`, ...style }}>{children}</div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: light ? "#8BAAB8" : "#3D6070", margin: "0 0 14px" }}>{children}</p>;
}

export function Rule({ light = false }: { light?: boolean }) {
  return <div style={{ width: 36, height: 1.5, backgroundColor: light ? "#8BAAB8" : "#3D6070", margin: "18px 0" }} />;
}

export function Btn({ children, href, variant = "solid", style }: { children: ReactNode; href?: string; variant?: "solid" | "outline" | "ghost"; style?: CSSProperties }) {
  const base: CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer",
    fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
    textDecoration: "none", borderRadius: 4, transition: "all 220ms ease", border: "none",
    ...(variant === "solid" ? { background: "#1C3A4A", color: "#FAFAF8", padding: "14px 28px" } :
        variant === "outline" ? { background: "transparent", color: "#1C3A4A", border: "1.5px solid #1C3A4A", padding: "13px 27px" } :
        { background: "transparent", color: "#3D6070", padding: "0", borderBottom: "1px solid #3D6070", borderRadius: 0, paddingBottom: 2 }),
    ...style,
  };
  const hover = variant === "solid" ? { background: "#2A4D5E" } : variant === "outline" ? { background: "#1C3A4A", color: "#FAFAF8" } : { color: "#1C3A4A" };
  if (href) return (
    <a href={href} style={base}
      onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, hover)}
      onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, base)}
    >{children}</a>
  );
  return (
    <button style={base}
      onMouseEnter={e => Object.assign((e.currentTarget as HTMLElement).style, hover)}
      onMouseLeave={e => Object.assign((e.currentTarget as HTMLElement).style, base)}
    >{children}</button>
  );
}

export function Wrap({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", ...style }}>{children}</div>;
}

export function Sec({ children, bg = "#FAFAF8", id, style }: { children: ReactNode; bg?: string; id?: string; style?: CSSProperties }) {
  return <section id={id} style={{ background: bg, padding: "100px 0", ...style }}><Wrap>{children}</Wrap></section>;
}

export function AnimNum({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1600; const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{val.toLocaleString("pt-BR")}{suffix}</span>;
}
