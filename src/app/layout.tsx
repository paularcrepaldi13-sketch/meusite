import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paula Crepaldi — Estratégia de Conteúdo",
  description: "Consultoria boutique especializada em posicionamento de marca, conteúdo estratégico e comunicação premium para profissionais de saúde e serviços.",
  keywords: "estratégia de conteúdo, marketing digital, posicionamento de marca, consultoria comunicação",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
