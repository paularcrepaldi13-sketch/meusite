"use client";
import { FadeIn, Eyebrow, Rule, Btn, Sec } from "@/components/ui";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Sobre() {
  return (
    <>
      {/* Hero split */}
      <section style={{ paddingTop: 62, background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 3fr", minHeight: "72vh" }}>
          <div style={{ background: "linear-gradient(160deg,#2A4D5E,#1C3A4A)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 40 }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8BAAB8", margin: 0 }}>Foto editorial</p>
          </div>
          <div style={{ padding: "80px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FadeIn>
              <Eyebrow>Sobre</Eyebrow>
              <h1 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#1A1A18", margin: "0 0 6px", letterSpacing: "-0.04em", lineHeight: 1.05 }}>Paula Crepaldi</h1>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", color: "#3D6070", margin: "0 0 24px", textTransform: "uppercase" }}>Estrategista de Comunicação · Londrina, PR</p>
              <Rule />
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#3A3A38", lineHeight: 1.8, margin: "0 0 16px" }}>
                Trabalho na interseção entre estratégia, linguagem e percepção de marca. Meu foco é construir sistemas de comunicação que posicionam profissionais como referência — de forma consistente, ética e intencional.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#3A3A38", lineHeight: 1.8, margin: 0 }}>
                Antes de um conteúdo, vem uma narrativa. Antes de uma campanha, vem um posicionamento. E acima de tudo: acompanhamento real, mês a mês.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <Sec bg="#F5F0EA">
        <FadeIn>
          <Eyebrow>Como trabalho</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 48px", maxWidth: 520 }}>Atenção direta. Estratégia personalizada. Presença contínua.</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 2 }}>
            {[
              { t: "Você fala comigo", d: "Não com um assistente, não com uma equipe de social media. Cada estratégia nasce de uma conversa real sobre a sua marca." },
              { t: "Estratégia antes de execução", d: "Não sai um post antes de existir um posicionamento claro. A execução serve à estratégia — não o contrário." },
              { t: "Acompanhamento mês a mês", d: "Você nunca fica sozinho depois da entrega. Relatórios, reuniões e ajustes contínuos fazem parte do processo." },
              { t: "Profundidade, não volume", d: "Prefiro trabalhar com poucos clientes com muita qualidade a ter muitos clientes atendidos superficialmente." },
            ].map((v, i) => (
              <div key={v.t} style={{ background: "#FAFAF8", borderRadius: 8, padding: "32px 28px" }}>
                <CheckCircle2 size={18} color="#3D6070" style={{ marginBottom: 14 }} />
                <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 600, color: "#1A1A18", margin: "0 0 10px" }}>{v.t}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "#5A5A57", lineHeight: 1.75, margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Manifesto dark */}
      <Sec bg="#1C3A4A">
        <FadeIn>
          <Eyebrow light>O que acredito</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(26px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0EA", margin: "0 0 20px", maxWidth: 620 }}>
            Comunicação de verdade não grita. Ela posiciona, persiste e constrói ao longo do tempo.
          </h2>
          <Rule light />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#8BAAB8", lineHeight: 1.8, maxWidth: 520, margin: 0 }}>
            Acredito que profissionais excepcionais merecem uma presença à altura do trabalho que entregam. E que isso exige estratégia — não sorte, não viralização, não fórmulas prontas.
          </p>
        </FadeIn>
      </Sec>

      {/* Nichos */}
      <Sec bg="#F5F0EA">
        <FadeIn>
          <Eyebrow>Nichos de atuação</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 40px" }}>Onde atuo com profundidade.</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Psicologia", "Fisioterapia", "Bem-estar corporativo", "Saúde e estética", "Educação", "Serviços premium", "Terapia", "Nutrição"].map(n => (
              <span key={n} style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, color: "#1C3A4A", background: "#EDF3F6", border: "1px solid #C5D9E3", padding: "8px 16px", borderRadius: 100 }}>{n}</span>
            ))}
          </div>
        </FadeIn>
      </Sec>

      <Sec style={{ textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 auto 16px", maxWidth: 480 }}>Quer saber como posso te ajudar?</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#5A5A57", maxWidth: 360, margin: "0 auto 36px", lineHeight: 1.8 }}>Uma conversa de 30 minutos, sem pressão.</p>
          <Btn href="/contato">Agendar conversa <ArrowRight size={16} /></Btn>
        </FadeIn>
      </Sec>
    </>
  );
}
