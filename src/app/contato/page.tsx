"use client";
import { FadeIn, Eyebrow, Rule } from "@/components/ui";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <section style={{ paddingTop: 62, background: "#FAFAF8", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "5fr 7fr", minHeight: "calc(100vh - 62px)" }}>
        {/* Left */}
        <div style={{ padding: "80px 48px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid #EDE8E1" }}>
          <FadeIn>
            <Eyebrow>Contato</Eyebrow>
            <h1 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: "#1A1A18", lineHeight: 1.1, letterSpacing: "-0.04em", margin: "0 0 20px" }}>
              Vamos conversar sobre o seu projeto.
            </h1>
            <Rule />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, margin: "0 0 40px" }}>
              Sem pitch. Uma conversa de 30 minutos para entender onde você está, onde quer chegar e se faz sentido trabalharmos juntos.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
              {[
                "Resposta em até 24 horas",
                "Atendimento remoto em todo o Brasil",
                "Sem pressão, sem compromisso",
              ].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={15} color="#3D6070" />
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "#5A5A57" }}>{t}</span>
                </div>
              ))}
            </div>
            {[
              { label: "Instagram", value: "@paulacrepaldi" },
              { label: "Localização", value: "Londrina · PR · Atendimento remoto em todo o Brasil" },
            ].map(c => (
              <div key={c.label} style={{ marginBottom: 18 }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C8377", margin: "0 0 3px" }}>{c.label}</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 400, color: "#1C3A4A", margin: 0 }}>{c.value}</p>
              </div>
            ))}
          </FadeIn>
        </div>

        {/* Right — WhatsApp CTA */}
        <div style={{ background: "#F5F0EA", padding: "80px 56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <FadeIn delay={100}>
            <div style={{ maxWidth: 380 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#1C3A4A", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                <MessageCircle size={32} color="#F5F0EA" />
              </div>

              <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1A1A18", lineHeight: 1.2, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
                Fale direto pelo WhatsApp
              </h2>

              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, margin: "0 0 36px" }}>
                Clique no botão abaixo e me mande uma mensagem. Respondo pessoalmente, sem bots, sem demora.
              </p>

              <a
                href="https://wa.me/5543991650923"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  width: "100%",
                  background: "#1C3A4A",
                  color: "#F5F0EA",
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  padding: "16px 28px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "background 220ms ease",
                  marginBottom: 14,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#2A4D5E"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1C3A4A"; }}
              >
                <MessageCircle size={18} />
                Iniciar conversa no WhatsApp
              </a>

              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#8C8377", margin: 0, lineHeight: 1.6 }}>
                Retorno em até 24h úteis.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
