import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TMT - Tofas Fen Lisesi Teknoloji Kulubu",
  description:
    "TEKNOFEST yarışmaları ve VEX Robotics'te uzmanlaşmış öğrenci liderliğinde mühendislik ve robotik kulübü",
  generator: "v0.app",
  icons: {
    icon: "/images/tmt-logo.png",
    apple: "/images/tmt-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
