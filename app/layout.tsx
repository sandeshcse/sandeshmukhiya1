import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sandesh Mukhiya',
  description: 'Full-Stack Developer & Software Engineer',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
