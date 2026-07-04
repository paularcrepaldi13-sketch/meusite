"use client";
import { FadeIn, Eyebrow, Rule, Btn, Sec, AnimNum, Wrap } from "@/components/ui";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

const revenue = [
  { m: "Fev", v: 2770.75 }, { m: "Mar", v: 2265.57 }, { m: "Abr", v: 3149.72 },
  { m: "Mai", v: 2923.95 }, { m: "Jun", v: 2923.95 }, { m: "Jul", v: 10525.54 },
  { m: "Ago", v: 6919.01 }, { m: "Set", v: 5058 },   { m: "Out", v: 5236.83 },
  { m: "Nov", v: 10664.73 },
];
const maxRev = Math.max(...revenue.map(d => d.v));

const myths = [
  { num: "01", title: '"Basta postar com consistência que os resultados aparecem."', body: "Consistência sem estratégia é só barulho. O que faz a diferença é o posicionamento por trás de cada conteúdo — e é isso que a maioria ainda não tem." },
  { num: "02", title: '"Preciso de muitos seguidores para gerar clientes."', body: "Errado. Uma audiência pequena e bem posicionada converte muito mais do que uma grande e genérica. Qualidade de alcance supera quantidade sempre." },
  { num: "03", title: '"Viral é a melhor forma de crescer."', body: "Viral traz visibilidade. Posicionamento traz clientes. Conheço marcas com posts de 100k visualizações que não vendem nada — e outras com 500 seguidores com lista de espera." },
];

const services = [
  { tag: "Estratégia", title: "Posicionamento de marca", desc: "Narrativa, voz e sistema de mensagens para a sua marca ser reconhecida antes de qualquer venda." },
  { tag: "Conteúdo", title: "Gestão editorial premium", desc: "Produção de conteúdo estratégico para Instagram e LinkedIn — com calendário, copy e análise mensal." },
  { tag: "Tráfego", title: "Campanhas com inteligência", desc: "Tráfego pago integrado à estratégia orgânica. Amplificação do posicionamento certo, para as pessoas certas." },
];

const results = [
  { value: "R$ 10.664", label: "Maior faturamento registrado", sub: "em um único mês" },
  { value: "79.577", label: "Visualizações orgânicas", sub: "em um único post educativo" },
  { value: "158", label: "Salvamentos", sub: "conteúdo de maior retenção" },
  { value: "+50", label: "Novos seguidores", sub: "em apenas 5 dias" },
];

const process = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos juntos onde sua marca está hoje e o que está travando seu crescimento." },
  { n: "02", title: "Estratégia", desc: "Criamos o posicionamento, a narrativa e o plano editorial personalizado para você." },
  { n: "03", title: "Execução", desc: "Produzimos, publicamos e acompanhamos cada conteúdo com atenção aos dados." },
  { n: "04", title: "Acompanhamento", desc: "Ajustes mensais, relatórios claros e presença constante ao seu lado. Você nunca fica sozinho." },
];

const faq = [
  { q: "Como funciona o acompanhamento mensal?", a: "Cada mês inclui reunião de alinhamento, relatório de performance, calendário editorial aprovado juntos e suporte direto por WhatsApp. Você tem visibilidade de tudo." },
  { q: "Trabalha com quais nichos?", a: "Saúde, psicologia, fisioterapia, bem-estar, serviços premium e educação. Nichos onde autoridade e confiança são fundamentais para a decisão de compra." },
  { q: "Qual é o tempo mínimo de contrato?", a: "Trabalho com ciclos de 3 meses como mínimo, pois resultados reais em posicionamento demandam consistência. A maioria dos clientes renova por 6 a 12 meses." },
  { q: "Atende fora de Londrina?", a: "Sim. O atendimento é 100% remoto — clientes em todo o Brasil. Reuniões pelo Google Meet, entregas por e-mail e WhatsApp." },
  { q: "O que diferencia do trabalho de uma agência?", a: "Atenção direta. Você fala comigo, não com um assistente. Cada estratégia é criada especificamente para a sua marca — sem templates, sem volume, sem copy-paste." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", background: "linear-gradient(160deg,#FAFAF8 60%,#EDF3F6 100%)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0", position: "relative", overflow: "hidden" }}>
        {/* Decorative circle */}
        <div style={{ position: "absolute", right: -200, top: "50%", transform: "translateY(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,#D4E3EA 0%,transparent 70%)", opacity: 0.5, pointerEvents: "none" }} />

        <Wrap style={{ paddingTop: 120, paddingBottom: 80 }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDF3F6", border: "1px solid #C5D9E3", borderRadius: 100, padding: "6px 14px", marginBottom: 28 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#3D6070", animation: "pulse-dot 2s ease infinite" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, color: "#3D6070", letterSpacing: "0.04em" }}>Vagas abertas para Agosto 2025</span>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(42px, 7vw, 88px)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.04em", color: "#1A1A18", margin: "0 0 10px", maxWidth: 820 }}>
              A presença que<br />
              <span style={{ color: "#1C3A4A" }}>antecede</span> a palavra.
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 300, lineHeight: 1.7, color: "#4A4A48", maxWidth: 560, margin: "20px 0 40px" }}>
              Estratégia de conteúdo e acompanhamento contínuo para profissionais de saúde e serviços que querem ser referência — sem precisar viralizar.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Btn href="/contato" variant="solid">Quero uma estratégia <ArrowRight size={16} /></Btn>
              <Btn href="/cases" variant="outline">Ver resultados reais</Btn>
            </div>
          </FadeIn>

          <FadeIn delay={360}>
            <div style={{ display: "flex", gap: 48, marginTop: 64, paddingTop: 40, borderTop: "1px solid #EDE8E1", flexWrap: "wrap" }}>
              {[
                { n: 60, suf: "+", label: "clientes atendidos" },
                { n: 7, suf: " anos", label: "de experiência" },
                { n: 10, suf: "k+ em receita", label: "gerada para clientes" },
              ].map(s => (
                <div key={s.label}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 700, color: "#1A1A18", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
                    <AnimNum target={s.n} suffix={s.suf} />
                  </p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#8C8377", margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Wrap>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", opacity: 0.35, animation: "fadeUp 1s ease 1.2s both" }}>
          <ChevronDown size={18} color="#1A1A18" />
        </div>
      </section>

      {/* ── PROBLEMA ─────────────────────────────────────────── */}
      <Sec bg="#1C3A4A">
        <FadeIn>
          <Eyebrow light>O problema</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0EA", margin: "0 0 20px", maxWidth: 680 }}>
            Você já tentou de tudo. E o cliente ainda não vê valor.
          </h2>
          <Rule light />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 300, color: "#8BAAB8", lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
            Não é falta de esforço. É falta de estratégia. A maioria dos profissionais posta, tenta, ajusta — sem nunca ter um posicionamento claro que faça o trabalho por eles.
          </p>
        </FadeIn>
        <FadeIn delay={120}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 2, marginTop: 56 }}>
            {[
              "Publica todo dia mas não atrai os clientes certos",
              "Não sabe como comunicar o valor do seu trabalho",
              "Perde tempo com conteúdo que não gera resultado",
              "Sente que está sempre recomeçando do zero",
            ].map((txt, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(139,170,184,0.2)", borderRadius: 8, padding: "24px 22px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#C5D9E3", lineHeight: 1.65, margin: 0 }}>{txt}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* ── 3 MITOS ──────────────────────────────────────────── */}
      <Sec bg="#F5F0EA">
        <FadeIn>
          <Eyebrow>Três crenças que travam profissionais incríveis</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(28px, 4.5vw, 54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 8px", maxWidth: 600 }}>
            Essas três ideias são mitos.
          </h2>
          <Rule />
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 48 }}>
          {myths.map((m, i) => (
            <FadeIn key={m.num} delay={i * 80}>
              <div style={{ background: "#FAFAF8", borderRadius: 8, padding: "32px 36px", display: "grid", gridTemplateColumns: "60px 1fr", gap: 24, alignItems: "start" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 36, fontWeight: 700, color: "#D8D3CB", lineHeight: 1 }}>{m.num}</span>
                <div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 18, fontWeight: 600, color: "#1A1A18", lineHeight: 1.4, margin: "0 0 12px" }}>{m.title}</p>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#5A5A57", lineHeight: 1.75, margin: 0 }}>{m.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Sec>

      {/* ── SERVIÇOS ─────────────────────────────────────────── */}
      <Sec>
        <FadeIn>
          <Eyebrow>O que ofereço</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(28px, 4.5vw, 54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 8px", maxWidth: 600 }}>
            Estratégia e acompanhamento. Do início ao resultado.
          </h2>
          <Rule />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, maxWidth: 520, margin: "0 0 56px" }}>
            Não trabalho com pacotes genéricos. Cada cliente recebe atenção direta, estratégia personalizada e presença constante.
          </p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 2 }}>
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
              <div style={{ background: "#F5F0EA", borderRadius: 8, padding: "36px 32px", height: "100%", transition: "transform 300ms ease", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}>
                <span style={{ display: "inline-block", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3D6070", border: "1px solid #3D6070", padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>{s.tag}</span>
                <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 20, fontWeight: 600, color: "#1A1A18", lineHeight: 1.3, margin: "0 0 14px" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 300, color: "#5A5A57", lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={240}>
          <div style={{ marginTop: 36 }}><Btn href="/servicos" variant="ghost">Ver todos os serviços →</Btn></div>
        </FadeIn>
      </Sec>

      {/* ── PROCESSO ─────────────────────────────────────────── */}
      <Sec bg="#F5F0EA">
        <FadeIn>
          <Eyebrow>Como funciona</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(28px, 4.5vw, 54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 8px" }}>
            Do diagnóstico ao acompanhamento contínuo.
          </h2>
          <Rule />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, maxWidth: 480, margin: "0 0 56px" }}>
            Você não recebe uma estratégia e fica sozinho. Eu fico ao lado do seu negócio — mês a mês.
          </p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 2 }}>
          {process.map((p, i) => (
            <FadeIn key={p.n} delay={i * 80}>
              <div style={{ background: "#FAFAF8", borderRadius: 8, padding: "32px 28px" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 42, fontWeight: 800, color: "#EDE8E1", letterSpacing: "-0.04em", lineHeight: 1, display: "block", marginBottom: 16 }}>{p.n}</span>
                <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 600, color: "#1A1A18", margin: "0 0 10px" }}>{p.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300, color: "#5A5A57", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Sec>

      {/* ── CASE 001 ─────────────────────────────────────────── */}
      <Sec bg="#1C3A4A" id="case">
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
            <div>
              <Eyebrow light>Case 001 · Escola de Idiomas</Eyebrow>
              <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F5F0EA", margin: "0 0 8px" }}>
                De R$ 2.770 para<br />R$ 10.664 em 9 meses.
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#8BAAB8", margin: 0 }}>Fevereiro — Novembro de 2025</p>
            </div>
          </div>
        </FadeIn>
        <Rule light />

        {/* Bar chart */}
        <FadeIn delay={100}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8BAAB8", margin: "40px 0 20px" }}>Evolução do faturamento mensal</p>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 180, paddingBottom: 32 }}>
            {revenue.map((d, i) => {
              const pct = (d.v / maxRev) * 100;
              const hi = d.v > 8000;
              return (
                <div key={d.m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }}>
                  <div style={{ width: "100%", background: hi ? "#8BAAB8" : "#3D6070", height: `${pct}%`, borderRadius: "3px 3px 0 0", transition: `height 1s ease ${i * 90}ms`, position: "relative" }}>
                    {hi && <div style={{ position: "absolute", top: -22, left: "50%", transform: "translateX(-50%)", fontFamily: "'Inter',sans-serif", fontSize: 8, color: "#8BAAB8", whiteSpace: "nowrap" }}>pico ↑</div>}
                  </div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 9, color: "#5A7A8A", margin: "7px 0 0" }}>{d.m}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Metrics */}
        <FadeIn delay={200}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2, marginTop: 40 }}>
            {results.map(r => (
              <div key={r.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(139,170,184,0.2)", borderRadius: 8, padding: "24px 22px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 32, fontWeight: 700, color: "#F5F0EA", margin: "0 0 4px", letterSpacing: "-0.03em" }}>{r.value}</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 400, color: "#8BAAB8", margin: "0 0 2px" }}>{r.label}</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, fontWeight: 300, color: "#5A7A8A", margin: 0 }}>{r.sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={280}>
          <div style={{ marginTop: 40 }}>
            <Link href="/cases" style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500, color: "#8BAAB8", textDecoration: "none", borderBottom: "1px solid #3D6070", paddingBottom: 2 }}>Ver o case completo →</Link>
          </div>
        </FadeIn>
      </Sec>

      {/* ── DEPOIMENTO ───────────────────────────────────────── */}
      <Sec bg="#F5F0EA" style={{ padding: "80px 0" }}>
        <FadeIn>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 32, height: 2, background: "#3D6070", margin: "0 auto 28px" }} />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(20px, 2.8vw, 28px)", fontWeight: 300, fontStyle: "italic", color: "#1A1A18", lineHeight: 1.55, margin: "0 0 24px" }}>
              &ldquo;Paula não entrega post — ela entrega percepção. Meu consultório nunca teve tanta visibilidade com tanta consistência. E o melhor: eu não precisei estar presente o tempo todo.&rdquo;
            </p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8C8377", margin: 0 }}>Érica B. M. · Psicóloga · Londrina</p>
          </div>
        </FadeIn>
      </Sec>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Sec>
        <FadeIn>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A18", margin: "0 0 8px" }}>
            Perguntas que todo cliente faz antes.
          </h2>
          <Rule />
        </FadeIn>
        <FadeIn delay={100}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 48 }}>
            {faq.map((f, i) => (
              <details key={i} style={{ background: "#F5F0EA", borderRadius: 8, padding: "24px 28px", cursor: "pointer" }}>
                <summary style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 600, color: "#1A1A18", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  {f.q}
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 300, color: "#3D6070", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 15, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, margin: "16px 0 0" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <Sec bg="#1C3A4A" style={{ textAlign: "center" }}>
        <FadeIn>
          <Eyebrow light>Próximo passo</Eyebrow>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#F5F0EA", margin: "0 auto 20px", maxWidth: 600 }}>
            Vamos construir sua presença.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 300, color: "#8BAAB8", maxWidth: 440, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Uma conversa de 30 minutos. Sem pressão, sem pitch. Só para entender se faz sentido trabalharmos juntos.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn href="/contato" style={{ background: "#F5F0EA", color: "#1C3A4A" }}>
              Agendar conversa gratuita <ArrowRight size={16} />
            </Btn>
          </div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}>
            {["Sem contrato de permanência no 1º mês", "Resposta em até 24h", "Atendimento em todo o Brasil"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 size={15} color="#8BAAB8" />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#8BAAB8" }}>{t}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>
    </>
  );
}
