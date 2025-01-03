import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

// Get Google Analytics Measurement ID from environment variable
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export const metadata: Metadata = {
  title: {
    default: "Craft The Future | No-Code Innovation Hub",
    template: "%s | Craft The Future"
  },
  description: "Empowering no-code creators to build innovative solutions through expert guidance, curated tools, and a supportive community.",
  icons: {
    icon: "/ctf-logo.png",
    shortcut: "/ctf-logo.png",
    apple: "/ctf-logo.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Craft The Future",
    description: "Empowering no-code creators to build innovative solutions",
    url: "https://craftthefuture.xyz",
    siteName: "Craft The Future",
    images: [
      {
        url: "/ctf-logo.png",
        width: 800,
        height: 800,
        alt: "Craft The Future Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft The Future",
    description: "Empowering no-code creators to build innovative solutions",
    images: ["/ctf-logo.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
