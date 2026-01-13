import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/common/header"
import GradualBlur from "@/components/common/gradual-blur"
import { FooterCTA } from "@/components/sections/footer-cta"

/* Body / UI font */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

/* instrument serif italic */
const instrumentSerifItalic = localFont({
  src: "../public/fonts/InstrumentSerif-Italic.ttf",
  variable: "--font-instrument-italic",
  style: 'italic',
})

/* Inter local variable font */
const interLocal = localFont({
  src: "../public/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-local",
})

export const metadata: Metadata = {
  title: 'Shark Edge Media - Branding for Founders & Coaches',
  description: 'Stop being the "Invisible Expert." We build profitable personal brands for busy founders, coaches, and CEOs in just 2 hours a month. Strategy, Video, & Growth.',
  keywords: [
    'personal branding agency',
    'content marketing for founders',
    'video editing for coaches',
    'authority positioning',
    'personal branding for ceos',
    'social media management',
    'done for you content creation',
    'thought leadership marketing',
    'Shark Edge Media'
  ],
  metadataBase: new URL('https://sharkedge.media'),
  openGraph: {
    title: 'Shark Edge Media - Level Up Your Personal Brand',
    description: 'The "Anti-Hustle" branding agency. We help entrepreneurs and coaches turn their expertise into an authoritative brand with zero time wasted.',
    siteName: 'Shark Edge Media',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logos/favicon.svg',
        width: 96,
        height: 96,
        alt: 'Shark Edge Media Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logos/favicon.svg",
    shortcut: "/logos/favicon.svg",
    apple: "/logos/favicon.svg",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name: 'Shark Edge Media',
    url: 'https://sharkedge.media',
    logo: 'https://sharkedge.media/logos/favicon.svg', // Using your favicon as logo
    description: 'Stop being the "Invisible Expert." We build profitable personal brands for busy founders, coaches, and CEOs.',
    sameAs: [
      'https://www.instagram.com/sharkedge.media', // CHANGE THIS to your real link
      'https://www.linkedin.com/in/sharkedge-media-104a2734b/' // CHANGE THIS to your real link
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'mani@sharkedge.media' // Add your email
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${instrumentSerifItalic.variable}
          ${interLocal.variable}
          ${manrope.variable}
          antialiased
          bg-black
          text-white
          overflow-x-hidden
        `}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <FooterCTA />
        <GradualBlur direction="bottom" blurLayers={1} maxBlur={1} height="20px" />
      </body>
    </html>
  )
}
