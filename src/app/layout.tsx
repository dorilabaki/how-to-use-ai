import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_MEASUREMENT_ID = "G-DG3E61DGC5";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howdoiuse.ai"),
  title: {
    default: "How Do I Use AI - Learn AI, ChatGPT Tutorials & Prompt Engineering",
    template: "%s | How Do I Use AI",
  },
  description:
    "Learn how to use AI with beginner-friendly tutorials on ChatGPT, prompt engineering, and AI tools. Join 102,000+ learners mastering artificial intelligence.",
  keywords: [
    "how to use AI",
    "ChatGPT tutorial",
    "prompt engineering",
    "AI for beginners",
    "learn artificial intelligence",
    "AI tools",
    "ChatGPT guide",
    "machine learning basics",
    "AI productivity",
    "generative AI",
  ],
  authors: [{ name: "How Do I Use AI" }],
  creator: "How Do I Use AI",
  publisher: "How Do I Use AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://howdoiuse.ai",
    siteName: "How Do I Use AI",
    title: "How Do I Use AI - Learn AI, ChatGPT & Prompt Engineering",
    description:
      "Learn how to use AI with beginner-friendly tutorials on ChatGPT, prompt engineering, and AI tools. Join 102,000+ learners.",
    images: [
      {
        url: "/cover.jpeg",
        width: 1200,
        height: 630,
        alt: "How Do I Use AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Do I Use AI - Learn AI, ChatGPT & Prompt Engineering",
    description:
      "Learn how to use AI with beginner-friendly tutorials on ChatGPT, prompt engineering, and AI tools.",
    images: ["/cover.jpeg"],
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
  alternates: {
    canonical: "https://howdoiuse.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "How Do I Use AI",
    url: "https://howdoiuse.ai",
    logo: "https://howdoiuse.ai/logo.jpeg",
    description:
      "How Do I Use AI helps beginners and professionals unlock the power of artificial intelligence through tutorials, tips, and guides on ChatGPT, AI tools, and prompt engineering.",
    sameAs: ["https://www.linkedin.com/company/how-do-i-use-ai"],
    foundingDate: "2023",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 11,
      maxValue: 50,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "How Do I Use AI",
    url: "https://howdoiuse.ai",
    description:
      "Learn how to use AI with beginner-friendly tutorials on ChatGPT, prompt engineering, and AI tools.",
    publisher: {
      "@type": "Organization",
      name: "How Do I Use AI",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://howdoiuse.ai/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="s2d_iECJBHW5vja8ZCE-lUtSErcGSGeGuTK8PrdyRuE" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-dark-950 text-text-primary`}
      >
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
