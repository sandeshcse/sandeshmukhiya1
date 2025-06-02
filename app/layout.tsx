import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Sandesh Mukhiya - Software Engineer",
  description:
    "Professional portfolio of Sandesh Mukhiya, a passionate software engineer specializing in full-stack development and modern web technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Sandesh Mukhiya" }],
  openGraph: {
    title: "Sandesh Mukhiya - Software Engineer",
    description: "Professional portfolio showcasing skills, projects, and experience",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
