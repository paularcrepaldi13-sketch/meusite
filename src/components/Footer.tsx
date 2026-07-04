import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#1A1A18", padding: "48px 0 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, paddingBottom: 28, borderBottom: "0.5px solid #2A2A28" }}>
          <div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 17, fontWeight: 600, color: "#F5F0EA", margin: "0 0 4px", letterSpacing: "-0.01em" }}>Paula Crepaldi</p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#5A5A57", margin: 0 }}>Estratégia de Conteúdo · Londrina, PR</p>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { href: "https://instagram.com", label: "Instagram" },
              { href: "https://linkedin.com", label: "LinkedIn" },
              { href: "mailto:paula@paulacrepaldi.com.br", label: "E-mail" },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 400, color: "#8BAAB8", textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingTop: 20 }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#3A3A38", margin: 0 }}>© 2025 Paula Crepaldi. Todos os direitos reservados.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["/servicos","/cases","/portfolio","/sobre","/contato"].map(h => (
              <Link key={h} href={h} style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#3A3A38", textDecoration: "none" }}>{h.slice(1)}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
