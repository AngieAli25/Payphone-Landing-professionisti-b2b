import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payphone - Trasforma ogni videochiamata in guadagno",
  description:
    "Smetti di regalare il tuo tempo. Trasforma ogni videochiamata in guadagno immediato. Zero commissioni. Totale controllo.",
  keywords:
    "videochiamate, consulenze online, guadagno, professionisti, psicologi, avvocati, coach",
  authors: [{ name: "Payphone Team" }],
  openGraph: {
    title: "Payphone - Trasforma ogni videochiamata in guadagno",
    description:
      "Smetti di regalare il tuo tempo. Trasforma ogni videochiamata in guadagno immediato.",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payphone - Trasforma ogni videochiamata in guadagno",
    description:
      "Smetti di regalare il tuo tempo. Trasforma ogni videochiamata in guadagno immediato.",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
