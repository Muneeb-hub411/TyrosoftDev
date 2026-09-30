import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07050B",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tyrosoftdev.com"),
  title: {
    default: "Tyrosoft Dev | Custom Software & AI Automation for Business",
    template: "%s | Tyrosoft Dev",
  },
  description:
    "Engineering high-impact web apps, mobile solutions, AI automations, and modern digital experiences. Cut operational costs by up to 60%.",
  keywords: [
    "Software Development Agency",
    "AI Automation for Business",
    "Next.js Engineers",
    "App Development",
    "Graphic Design",
    "Video Editing",
    "Marketing Strategy",
    "IT Consulting",
    "Tyrosoft Dev",
    "Islamabad Pakistan Software Company",
  ],
  authors: [{ name: "Tyrosoft Dev Team", url: "https://tyrosoftdev.com" }],
  creator: "Tyrosoft Dev",
  publisher: "Tyrosoft Dev",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tyrosoft Dev | Custom Software & AI Automation",
    description:
      "Precision software engineering and AI workflow automations that scale businesses.",
    url: "https://tyrosoftdev.com",
    siteName: "Tyrosoft Dev",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Tyrosoft Dev Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyrosoft Dev | Custom Software & AI Automation",
    description:
      "Engineering high-impact web apps, mobile solutions, and AI automations.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tyrosoft Dev",
    url: "https://tyrosoftdev.com",
    logo: "https://tyrosoftdev.com/logo.png",
    description:
      "Custom Software Engineering, Web & App Development, Graphic Design, Video Editing, Marketing, IT Consulting & AI Business Automation.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "Pakistan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92 307 5357545",
      email: "contact@tyrosoftdev.com",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
    servicesOffered: [
      "Web Development",
      "App Development",
      "Graphic Design",
      "Video Editing",
      "Digital Marketing",
      "IT Consulting",
      "Free Business Consultation",
      "AI Business Automation",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07050B] text-[#EDEAF5] selection:bg-[#6D28D9] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
