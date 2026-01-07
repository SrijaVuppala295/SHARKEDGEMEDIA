import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/header"

/* Body / UI font */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

/* Display / Premium heading font */
const instrumentSerif = localFont({
  src: "../public/fonts/InstrumentSerif-Regular.woff2",
  variable: "--font-instrument",
  style: 'normal',
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
          ${instrumentSerif.variable}
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
      </body>
    </html>
  )
}
