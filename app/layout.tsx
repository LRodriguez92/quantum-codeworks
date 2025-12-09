import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import Providers from '@/components/Providers'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import CookieConsent from '@/components/CookieConsent'

// Initialize the fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap", // Optimize font loading
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap", // Optimize font loading
})

export const metadata: Metadata = {
  title: "Quantum Codeworks | Premium Web Development Agency",
  description:
    "Custom-built, high-performance websites designed for brands that demand excellence. Quantum Codeworks delivers elite digital experiences for luxury brands.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  keywords: "web development, premium websites, luxury web design, high-performance websites, custom web development",
  authors: [{ name: "Quantum Codeworks" }],
  openGraph: {
    title: "Quantum Codeworks | Premium Web Development Agency",
    description: "Custom-built, high-performance websites designed for brands that demand excellence.",
    url: "https://quantumcodeworks.com",
    siteName: "Quantum Codeworks",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Quantum Codeworks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Codeworks | Premium Web Development Agency",
    description: "Custom-built, high-performance websites designed for brands that demand excellence.",
    images: [
      "/logo-transparent.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${montserrat.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-obsidian font-poppins text-ivory antialiased overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
        <CookieConsent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hash === '') {
                window.scrollTo(0, 0);
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
              }
            `,
          }}
        />
      </body>
    </html>
  )
}


import './globals.css'