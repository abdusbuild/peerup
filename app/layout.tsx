import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PeerUp — Speak English with confidence",
  description:
    "Practice English speaking with real people and an AI teacher, get instant feedback on grammar, vocabulary and pronunciation, and track your progress.",
  openGraph: {
    title: "PeerUp — Speak English with confidence",
    description:
      "Practice with real people and AI. Get instant feedback. Become fluent.",
    type: "website",
  },
};

// Note: no user-scalable=no — learners must be able to zoom.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#787BCB",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
