"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/sobre", label: "Sobre" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 62,
        background: scrolled ? "rgba(250,250,248,0.95)" : "transparent",
        borderBottom: scrolled ? "0.5px solid #EDE8E1" : "0.5px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 350ms ease",
        display: "flex", alignItems: "center",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em", color: "#1A1A18", textDecoration: "none" }}>
            Paula Crepaldi
          </Link>
          <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden md:flex">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: path === l.href ? 500 : 400,
                color: path === l.href ? "#1C3A4A" : "#5A5A57", textDecoration: "none",
                borderBottom: path === l.href ? "1.5px solid #1C3A4A" : "none", paddingBottom: path === l.href ? 1 : 0,
                transition: "color 200ms",
              }}>{l.label}</Link>
            ))}
            <Link href="/contato" style={{
              fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500,
              color: "#FAFAF8", background: "#1C3A4A", padding: "9px 20px", borderRadius: 4,
              textDecoration: "none", transition: "background 200ms",
            }}>Conversar</Link>
          </nav>
          <button className="flex md:hidden" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "#1A1A18" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 199, background: "#FAFAF8",
        display: "flex", flexDirection: "column", padding: "88px 32px 40px",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 350ms cubic-bezier(.4,0,.2,1)",
      }} className="md:hidden">
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: "'Inter',sans-serif", fontSize: 26, fontWeight: 300,
            color: path === l.href ? "#1C3A4A" : "#1A1A18", textDecoration: "none",
            padding: "16px 0", borderBottom: "0.5px solid #EDE8E1",
          }}>{l.label}</Link>
        ))}
        <Link href="/contato" style={{
          display: "inline-block", marginTop: 32, fontFamily: "'Inter',sans-serif",
          fontSize: 14, fontWeight: 500, color: "#FAFAF8", background: "#1C3A4A",
          padding: "15px 28px", borderRadius: 4, textDecoration: "none", textAlign: "center",
        }}>Conversar →</Link>
      </div>
    </>
  );
}
