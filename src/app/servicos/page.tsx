"use client";
import { FadeIn, Eyebrow, Rule, Btn, Sec } from "@/components/ui";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    tag: "Mais popular",
    title: "Gestão Estratégica",
    desc: "O plano completo para profissionais que querem crescer com consistência e previsibilidade.",
    includes: [
      "Diagnóstico e posicionamento de marca",
      "Calendário editorial mensal",
      "Produção de 16 conteúdos/mês",
      "Relatório mensal de performance",
      "Suporte direto por WhatsApp",
      "Reunião mensal de alinhamento",
    ],
    highlight: true,
  },
  {
    tag: "Estratégia",
    title: "Consultoria de Posicionamento",
    desc: "Para quem quer clareza estratégica antes de executar. Ideal para marcas que já produzem mas estão perdidas.",
    includes: [
      "Diagnóstico completo da marca",
      "Narrativa central e voz de marca",
      "Manual de comunicação",
      "1 sessão de consultoria 2h",
      "Plano editorial 90 dias",
    ],
    highlight: false,
  },
  {
    tag: "Tráfego",
    title: "Campanhas Integradas",
    desc: "Tráfego pago conectado à estratégia orgânica. Amplificação inteligente do posicionamento.",
    includes: [
      "Estratégia de funil completo",
      "Gestão de campanhas Meta Ads",
      "Criativos alinhados ao posicionamento",
      "Relatório quinzenal",
      "Testes A/B contínuos",
    ],
    highlight: false,
  },
];

const steps = [
  { n: "01", t: "Diagnóstico", d: "Entendemos juntos onde sua marca está hoje, o que está travando seu crescimento e o que precisa mudar." },
  { n: "02", t: "Estratégia", d: "Criamos o posicionamento, a narrativa central e o plano editorial personalizado para o seu nicho." },
  { n: "03", t: "Execução", d: "Produzimos, agendamos e publicamos cada conteúdo com atenção aos dados e ao posicionamento." },
  { n: "04", t: "Acompanhamento", d: "Relatórios mensais, reuniões de alinhamento e suporte direto. Você nunca fica sozinho." },
];

export default function Servicos() {
  return (
    <>
      <Sec style={{ paddingTop: 140 }}>
        <FadeIn>
          <Eyebrow>Serviços</Eyebrow>
          <h1 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#1A1A18", margin: "0 0 20px", maxWidth: 720 }}>
            Estratégia e acompanhamento para quem quer resultado real.
          </h1>
          <Rule />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, maxWidth: 540, margin: 0 }}>
            Não trabalho com pacotes genéricos. Cada proposta é construída a partir de um diagnóstico real da marca, do mercado e do momento do cliente.
          </p>
        </FadeIn>
      </Sec>

      {/* Plans */}
      <Sec bg="#F5F0EA">
        <FadeIn>
          <Eyebrow>Formatos de trabalho</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 48px" }}>Como posso te ajudar</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 2 }}>
          {plans.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div style={{ background: p.highlight ? "#1C3A4A" : "#FAFAF8", borderRadius: 8, padding: "36px 32px", height: "100%", border: p.highlight ? "none" : "1px solid #EDE8E1" }}>
                <span style={{ display: "inline-block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: p.highlight ? "#8BAAB8" : "#3D6070", border: `1px solid ${p.highlight ? "#3D6070" : "#3D6070"}`, padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>{p.tag}</span>
                <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 700, color: p.highlight ? "#F5F0EA" : "#1A1A18", margin: "0 0 12px", letterSpacing: "-0.02em" }}>{p.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: p.highlight ? "#8BAAB8" : "#5A5A57", lineHeight: 1.75, margin: "0 0 28px" }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {p.includes.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2 size={15} color={p.highlight ? "#8BAAB8" : "#3D6070"} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300, color: p.highlight ? "#C5D9E3" : "#3A3A38", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Btn href="/contato" style={p.highlight ? { background: "#F5F0EA", color: "#1C3A4A" } : {}}>Solicitar proposta <ArrowRight size={14} /></Btn>
              </div>
            </FadeIn>
          ))}
        </div>
      </Sec>

      {/* How it works */}
      <Sec>
        <FadeIn>
          <Eyebrow>Como funciona</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 8px" }}>Do diagnóstico ao resultado.</h2>
          <Rule />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, maxWidth: 480, margin: "0 0 56px" }}>
            Você não recebe uma estratégia e fica sozinho. Fico ao lado do seu negócio — mês a mês.
          </p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 2 }}>
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 80}>
              <div style={{ background: "#F5F0EA", borderRadius: 8, padding: "32px 28px" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 44, fontWeight: 800, color: "#D8D3CB", letterSpacing: "-0.04em", lineHeight: 1, display: "block", marginBottom: 20 }}>{s.n}</span>
                <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 600, color: "#1A1A18", margin: "0 0 10px" }}>{s.t}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300, color: "#5A5A57", lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Sec>

      {/* CTA */}
      <Sec bg="#1C3A4A" style={{ textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0EA", margin: "0 auto 16px", maxWidth: 560 }}>
            Vamos falar sobre o seu projeto.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#8BAAB8", maxWidth: 420, margin: "0 auto 36px", lineHeight: 1.8 }}>
            Sem pitch. Uma conversa para entender se faz sentido trabalharmos juntos.
          </p>
          <Btn href="/contato" style={{ background: "#F5F0EA", color: "#1C3A4A" }}>Agendar conversa gratuita <ArrowRight size={16} /></Btn>
        </FadeIn>
      </Sec>
    </>
  );
}
