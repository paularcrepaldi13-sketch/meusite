"use client";
import { FadeIn, Eyebrow, Rule, Sec } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

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
              { label: "E-mail", value: "contato@paulacrepaldi.com.br" },
              { label: "Instagram", value: "@paularcrp" },
              { label: "Londrina · PR", value: "Atendimento remoto em todo o Brasil" },
            ].map(c => (
              <div key={c.label} style={{ marginBottom: 18 }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C8377", margin: "0 0 3px" }}>{c.label}</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 400, color: "#1C3A4A", margin: 0 }}>{c.value}</p>
              </div>
            ))}
          </FadeIn>
        </div>

        {/* Right — form */}
        <div style={{ background: "#F5F0EA", padding: "80px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <FadeIn delay={100}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3D6070", marginBottom: 32 }}>Formulário de contato</p>
            <form 
            action="https://formspree.io/f/xykqoyzv"
             method="POST"
              style={{ display: "flex", flexDirection: "column" }}
              >
              {[
                { label: "Seu nome", type: "text", placeholder: "Nome completo" },
                { label: "E-mail", type: "email", placeholder: "seu@email.com.br" },
                { label: "Área de atuação", type: "text", placeholder: "ex: psicóloga, fisioterapeuta, empresa…" },
                { label: "Como me encontrou", type: "text", placeholder: "Instagram, indicação, Google…" },
              ].map(f => (
                <div key={f.label} style={{ marginBottom: 22 }}>
                  <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C8377", marginBottom: 6 }}>{f.label}</label>
                  <input
                   name={f.label}
                   type={f.type}
                   placeholder={f.placeholder}
                   style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",borderBottom: "1.5px solid #C0B9AF",
                    padding: "9px 0",
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 15,
                    fontWeight: 300,
                    color: "#1A1A18",
                    outline: "none",
                    transition: "border-color 200ms"
                    }}
                    />
                    onBlur={e => { (e.target as HTMLInputElement).style.borderBottomColor = "#C0B9AF"; }} />
                </div>
              ))}
              <div style={{ marginBottom: 22 }}>
                <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C8377", marginBottom: 6 }}>O que você precisa</label>
                <textarea name="mensagem"
                 rows={4} placeholder="Conte brevemente sobre seu projeto ou dúvida…" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1.5px solid #C0B9AF", padding: "9px 0", fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#1A1A18", outline: "none", resize: "none", transition: "border-color 200ms" }}
                  onFocus={e => { (e.target as HTMLTextAreaElement).style.borderBottomColor = "#1C3A4A"; }}
                  onBlur={e => { (e.target as HTMLTextAreaElement).style.borderBottomColor = "#C0B9AF"; }} />
              </div>
              <div style={{ marginTop: 8, paddingTop: 20, borderTop: "1px solid #D8D3CB" }}>
                <button type="submit" style={{ width: "100%", background: "#1C3A4A", color: "#F5F0EA", fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.04em", padding: "15px", borderRadius: 6, border: "none", cursor: "pointer", transition: "background 220ms" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#2A4D5E"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#1C3A4A"; }}>
                  Enviar mensagem →
                </button>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#8C8377", textAlign: "center", margin: "12px 0 0", lineHeight: 1.6 }}>Retorno em até 48h úteis. Sem spam.</p>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
