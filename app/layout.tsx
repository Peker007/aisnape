import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aisnape.com"),
  title: "AISNAPE – KI-Automatisierung für Handwerk & Immobilien",
  description:
    "Geplante KI-Automatisierung für Handwerk, Immobilien und Gebäudeservice: Anfragen strukturieren, Dokumente verarbeiten und Wissen finden.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "AISNAPE – KI-Automatisierung für Handwerk & Immobilien",
    description:
      "Anfragen und internes Wissen mit klaren Freigaben organisieren. AISNAPE befindet sich in Vorbereitung.",
    type: "website",
    locale: "de_DE",
    siteName: "AISNAPE",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
