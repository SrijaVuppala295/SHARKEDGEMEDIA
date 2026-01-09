import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/common/header"
import GradualBlur from "@/components/common/gradual-blur"

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
  title: "SharkEdge",
  description:
    "Level up your personal brand with proven authority positioning systems. Book a discovery call today.",
  icons: {
    icon: [], // Explicitly no icon for now to remove default
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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

        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <GradualBlur direction="bottom" blurLayers={1} maxBlur={1} height="20px" />
      </body>
    </html>
  )
}
