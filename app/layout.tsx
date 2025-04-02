import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Email Builder',
  description: 'Email Builder: Velt Demo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
