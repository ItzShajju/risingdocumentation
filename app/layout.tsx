import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rising Documentation - Registration Solutions | Documentation Consultancy in Tirunelveli",
  description: "Rising Documentation - Registration Solutions is a private consultancy service providing documentation assistance for property registration, marriage certificates, EC, and legal documents in Tirunelveli. We help you navigate government procedures - we are NOT a government portal. Professional, transparent, paid consultancy in Tamil and English.",
  keywords: [
    "documentation consultancy Tirunelveli",
    "private documentation service",
    "property registration assistance",
    "marriage registration help",
    "encumbrance certificate assistance",
    "legal documentation consultant",
    "document preparation service",
    "பத்திர பதிவு உதவி",
    "திருமண பதிவு உதவி",
    "ஆவண ஆலோசனை",
    "S. Jameela consultant",
    "private consultancy service",
    "not government portal",
  ],
  authors: [{ name: "S. Jameela - Private Consultant" }],
  creator: "Rising Documentation Private Consultancy",
  publisher: "Rising Documentation",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: "Rising Documentation - Registration Solutions | Private Consultancy",
    description: "Private consultancy helping you with documentation procedures in Tirunelveli. We assist - NOT a government service. Paid professional guidance.",
    url: "https://risingdocumentation.com",
    siteName: "Rising Documentation - Registration Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rising Documentation - Private Documentation Consultancy",
    description: "Woman-led private consultancy for documentation assistance in Tirunelveli",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "business-type": "Private Consultancy Service",
    "service-area": "Tirunelveli, Tamil Nadu, India",
    "disclaimer": "Not affiliated with any government department or agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="classification" content="Private Business Service" />
        <meta name="service-type" content="Consultancy and Documentation Assistance" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
