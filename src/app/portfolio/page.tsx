"use client";
import { FadeIn, Eyebrow, Rule, Sec } from "@/components/ui";

const works = [
  { tag: "Psicologia · Instagram", title: "Série editorial sobre ACP", desc: "12 carrosseis em tom de autoridade acessível. Engajamento médio 8,4%.", bg: "#1C3A4A" },
  { tag: "Corporativo · LinkedIn", title: "Autoridade em NR-1 e burnout", desc: "Perfil, banner e série de artigos para especialista em saúde mental corporativa.", bg: "#2A4D5E" },
  { tag: "Fisioterapia pélvica", title: "Landing page de captação", desc: "Copy e estrutura com taxa de conversão 14% acima da média do nicho.", bg: "#3D6070" },
  { tag: "Psicanálise · Reels", title: "Série sobre inconsciente", desc: "Roteiros acessíveis para público não especializado. Alto engajamento.", bg: "#8BAAB8" },
  { tag: "E-commerce · Estratégia", title: "Comunicação B2B e B2C", desc: "Narrativa dual para marca premium de cosméticos profissionais.", bg: "#1C3A4A" },
  { tag: "Viagem · Experiência", title: "Conteúdo editorial premium", desc: "Estratégia para experiências transformadoras de viagem para mulheres brasileiras.", bg: "#3D6070" },
];

export default function Portfolio() {
  return (
    <>
      <Sec style={{ paddingTop: 140 }}>
        <FadeIn>
          <Eyebrow>Portfolio</Eyebrow>
          <h1 style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#1A1A18", margin: "0 0 20px", maxWidth: 680 }}>
            Trabalhos selecionados.
          </h1>
          <Rule />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 300, color: "#5A5A57", lineHeight: 1.8, maxWidth: 500, margin: 0 }}>
            Uma amostra da produção recente — estratégia, conteúdo, identidade e comunicação em diferentes nichos e formatos.
          </p>
        </FadeIn>
      </Sec>
      <Sec style={{ padding: "40px 0 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 2 }}>
          {works.map((w, i) => (
            <FadeIn key={w.title} delay={i * 70}>
              <div style={{ borderRadius: 8, overflow: "hidden", cursor: "pointer", transition: "transform 300ms ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}>
                <div style={{ background: w.bg, height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{w.tag}</p>
                </div>
                <div style={{ padding: "24px 24px", background: "#F5F0EA" }}>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3D6070", margin: "0 0 8px" }}>{w.tag}</p>
                  <h3 style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 600, color: "#1A1A18", lineHeight: 1.3, margin: "0 0 8px" }}>{w.title}</h3>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 300, color: "#5A5A57", lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Sec>
    </>
  );
}
