import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AdiuTask - Tu asistente universitario en Telegram",
  description:
    "Consulta horarios, tareas, notas, archivos y anuncios de tu universidad directamente desde Telegram. El asistente inteligente para estudiantes universitarios.",
  keywords: [
    "asistente universitario",
    "telegram bot",
    "horarios universidad",
    "tareas universidad",
    "notas universidad",
    "estudiantes",
    "España",
    "AdiuTask",
  ],
  authors: [{ name: "AdiuTask" }],
  creator: "AdiuTask",
  metadataBase: new URL("https://adiutask.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://adiutask.com",
    siteName: "AdiuTask",
    title: "AdiuTask - Tu asistente universitario en Telegram",
    description:
      "Consulta horarios, tareas, notas, archivos y anuncios de tu universidad directamente desde Telegram.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AdiuTask - Asistente universitario en Telegram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdiuTask - Tu asistente universitario en Telegram",
    description:
      "Consulta horarios, tareas, notas, archivos y anuncios de tu universidad directamente desde Telegram.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icon-192.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AdiuTask",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Telegram",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              description:
                "Consulta horarios, tareas, notas, archivos y anuncios de tu universidad directamente desde Telegram.",
              url: "https://adiutask.com",
              author: {
                "@type": "Organization",
                name: "AdiuTask",
                url: "https://adiutask.com",
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased font-sans">{children}</body>
    </html>
  );
}
