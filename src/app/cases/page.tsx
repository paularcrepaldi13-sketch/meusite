"use client";
import { FadeIn, Eyebrow, Rule, Btn, Sec } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const revenue = [
  { m: "Fev", v: 2770.75, note: "" }, { m: "Mar", v: 2265.57, note: "" },
  { m: "Abr", v: 3149.72, note: "" }, { m: "Mai", v: 2923.95, note: "Reposicionamento" },
  { m: "Jun", v: 2923.95, note: "" }, { m: "Jul", v: 10525.54, note: "Consolidado" },
  { m: "Ago", v: 6919.01, note: "" }, { m: "Set", v: 5058, note: "" },
  { m: "Out", v: 5236.83, note: "" }, { m: "Nov", v: 10664.73, note: "" },
];
const max = Math.max(...revenue.map(d => d.v));

const strategy = [
  "Definição de um novo posicionamento de conteúdo.",
  "Produção de conteúdos educativos com alto potencial de compartilhamento.",
  "Uso de memes e situações de identificação para aumentar o alcance.",
  "Criação de séries de conteúdo para retenção da audiência.",
  "Integração entre conteúdo orgânico e campanhas de tráfego pago.",
  "Otimização da jornada entre descoberta, relacionamento e venda dos infoprodutos.",
];

export default function Cases() {
  return (
    <>
      <Sec style={{ paddingTop: 140 }}>
        <FadeIn>
          <Eyebrow>Cases</Eyebrow>
          <h1 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#1A1A18", margin: "0 0 20px", maxWidth: 720 }}>
            Resultados que falam por si.
          </h1>
          <Rule />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, maxWidth: 520, margin: 0 }}>
            Cada caso representa um processo completo: diagnóstico, estratégia, execução e resultado mensurável.
          </p>
        </FadeIn>
      </Sec>

      {/* Case header */}
      <Sec bg="#F5F0EA" style={{ padding: "80px 0 60px" }}>
        <FadeIn>
          <div style={{ display: "inline-block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3D6070", border: "1px solid #3D6070", padding: "5px 14px", borderRadius: 100, marginBottom: 20 }}>Case 001</div>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(26px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 8px" }}>Escola de Ensino de Idiomas</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#8C8377", margin: "0 0 36px" }}>Fevereiro de 2025 — Novembro de 2025</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C8377", margin: "0 0 10px" }}>Objetivo</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#3A3A38", lineHeight: 1.8, margin: 0 }}>Reposicionar a comunicação da marca para aumentar o alcance orgânico, fortalecer a autoridade e transformar as redes sociais em canal de aquisição de clientes para os infoprodutos.</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C8377", margin: "0 0 10px" }}>O desafio</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#3A3A38", lineHeight: 1.8, margin: 0 }}>A estratégia de conteúdo não explorava o potencial da marca para atrair novos alunos organicamente. Era preciso criar conteúdos mais compartilháveis, educativos e identificáveis.</p>
            </div>
          </div>
        </FadeIn>
      </Sec>

      {/* Strategy */}
      <Sec>
        <FadeIn>
          <Eyebrow>A estratégia</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 8px" }}>Reposicionamento entre Maio e Julho de 2025.</h2>
          <Rule />
        </FadeIn>
        <FadeIn delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 2, marginTop: 48 }}>
            {strategy.map((s, i) => (
              <div key={i} style={{ background: "#F5F0EA", borderRadius: 8, padding: "24px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 28, fontWeight: 800, color: "#D8D3CB", letterSpacing: "-0.03em", lineHeight: 1, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "#3A3A38", lineHeight: 1.7, margin: 0 }}>{s}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Revenue dark */}
      <Sec bg="#1C3A4A">
        <FadeIn>
          <Eyebrow light>Evolução do faturamento</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(26px, 4vw, 50px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0EA", margin: "0 0 8px" }}>
            De R$ 2.770 a R$ 10.664 em 9 meses.
          </h2>
          <Rule light />
        </FadeIn>
        <FadeIn delay={100}>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 200, paddingBottom: 36, marginTop: 48 }}>
            {revenue.map((d, i) => {
              const pct = (d.v / max) * 100;
              const hi = d.v > 8000;
              return (
                <div key={d.m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", position: "relative" }}>
                  {d.note && <p style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", fontFamily: "'Inter',sans-serif", fontSize: 8, color: "#8BAAB8" }}>{d.note}</p>}
                  <div style={{ width: "100%", background: hi ? "#8BAAB8" : "#3D6070", height: `${pct}%`, borderRadius: "3px 3px 0 0", transition: `height 1s ease ${i * 90}ms` }} title={`R$ ${d.v.toLocaleString("pt-BR")}`} />
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, color: "#5A7A8A", margin: "8px 0 0" }}>{d.m}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
        <FadeIn delay={160}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 40 }}>
            {revenue.map(d => (
              <div key={d.m} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(61,96,112,0.3)" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#8BAAB8", fontWeight: 300 }}>
                  {d.m}{d.note ? ` — ${d.note}` : ""}
                </span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, color: d.v > 8000 ? "#F5F0EA" : "#8BAAB8", fontWeight: d.v > 8000 ? 700 : 300 }}>
                  {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(d.v)}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Content results */}
      <Sec bg="#F5F0EA">
        <FadeIn>
          <Eyebrow>Resultados orgânicos</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 48px" }}>Conteúdo que gera resultado real.</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 2 }}>
            <div style={{ background: "#FAFAF8", borderRadius: 8, padding: "36px 32px" }}>
              <span style={{ display: "inline-block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3D6070", border: "1px solid #3D6070", padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>Meme · Carrossel</span>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 52, fontWeight: 800, color: "#1A1A18", margin: "0 0 4px", letterSpacing: "-0.04em", lineHeight: 1 }}>3.744</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#8C8377", margin: "0 0 20px" }}>visualizações · 19 salvamentos</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#3D6070", background: "#EDF3F6", padding: "5px 12px", borderRadius: 100 }}>75% seguidores</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#3D6070", background: "#EDF3F6", padding: "5px 12px", borderRadius: 100 }}>25% novos</span>
              </div>
            </div>
            <div style={{ background: "#FAFAF8", borderRadius: 8, padding: "36px 32px" }}>
              <span style={{ display: "inline-block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3D6070", border: "1px solid #3D6070", padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>Educativo · Vocabulário</span>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 52, fontWeight: 800, color: "#1A1A18", margin: "0 0 4px", letterSpacing: "-0.04em", lineHeight: 1 }}>79.577</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#8C8377", margin: "0 0 20px" }}>visualizações · 389 curtidas</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#3D6070", background: "#EDF3F6", padding: "5px 12px", borderRadius: 100 }}>158 salvamentos</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#3D6070", background: "#EDF3F6", padding: "5px 12px", borderRadius: 100 }}>Alto alcance orgânico</span>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={180}>
          <div style={{ background: "#FAFAF8", borderRadius: 8, padding: "36px 32px", marginTop: 2 }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C8377", margin: "0 0 16px" }}>Conclusão</p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 300, color: "#1A1A18", lineHeight: 1.8, margin: "0 0 12px" }}>
              Mais do que aumentar números isolados, o projeto reposicionou a comunicação da marca, criando uma estratégia integrada entre conteúdo orgânico e tráfego pago.
            </p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, margin: 0 }}>
              A mudança implementada entre maio e julho resultou em crescimento consistente do alcance, maior engajamento e meses com faturamento superior a R$ 10 mil, mantendo investimento baixo em mídia.
            </p>
          </div>
        </FadeIn>
      </Sec>

      <Sec bg="#1C3A4A" style={{ textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0EA", margin: "0 auto 16px", maxWidth: 520 }}>Quer resultados como esse?</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#8BAAB8", maxWidth: 400, margin: "0 auto 36px", lineHeight: 1.8 }}>Vamos conversar sobre o seu projeto.</p>
          <Btn href="/contato" style={{ background: "#F5F0EA", color: "#1C3A4A" }}>Agendar conversa <ArrowRight size={16} /></Btn>
        </FadeIn>
      </Sec>
    </>
  );
}
