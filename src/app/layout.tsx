import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "Carlos Torres | Consultor en Inteligencia Artificial y Automatización",

  description:
    "Consultoría especializada en inteligencia artificial, automatización y soluciones digitales modernas para empresas que buscan optimizar procesos y crecer.",

  keywords: [
    "inteligencia artificial",
    "automatización",
    "consultoría IA",
    "chatbots",
    "automatización empresarial",
    "desarrollo web",
    "IA para negocios",
    "transformación digital",
  ],

  authors: [
    {
      name: "Carlos Torres",
    },
  ],

  creator: "Carlos Torres",

  metadataBase: new URL("https://consultoriaia.com"),

  openGraph: {
    title:
      "Carlos Torres | Consultor en Inteligencia Artificial",

    description:
      "Automatización inteligente y soluciones digitales modernas para empresas.",

    url: "https://consultoriaia.com",

    siteName: "Carlos Torres IA",

    locale: "es_PE",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Carlos Torres | Consultor en Inteligencia Artificial",

    description:
      "Automatización inteligente y soluciones digitales modernas para empresas.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}