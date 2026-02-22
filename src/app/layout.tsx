import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clawsistent — KI-Assistent für den deutschsprachigen Mittelstand",
  description:
    "Clawsistent automatisiert Ihre Büroarbeit mit künstlicher Intelligenz. Branchenspezifisch, DSGVO-konform und sofort einsatzbereit. E-Mails, Termine und Kundenverwaltung in einem.",
  keywords: [
    "KI-Assistent",
    "Büroautomatisierung",
    "Mittelstand",
    "DSGVO",
    "Künstliche Intelligenz",
    "Backoffice",
    "Österreich",
    "Deutschland",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://www.clawsistent.com"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Clawsistent" }],
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://www.clawsistent.com",
    siteName: "Clawsistent",
    title: "Clawsistent — KI-Assistent für den deutschsprachigen Mittelstand",
    description:
      "Automatisieren Sie Ihre Büroarbeit mit KI. Branchenspezifisch, DSGVO-konform, sofort einsatzbereit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawsistent — KI-Assistent für den Mittelstand",
    description:
      "Automatisieren Sie Ihre Büroarbeit mit KI. Branchenspezifisch & DSGVO-konform.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Clawsistent",
  applicationCategory: "BusinessApplication",
  description:
    "KI-Assistent für den deutschsprachigen Mittelstand. Automatisiert Büroarbeit branchenspezifisch und DSGVO-konform.",
  url: "https://www.clawsistent.com",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "49",
    highPrice: "99",
    priceCurrency: "EUR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2042690603259802&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2042690603259802');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
