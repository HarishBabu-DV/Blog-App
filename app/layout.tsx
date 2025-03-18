import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit= Outfit({
  subsets:['latin'],
  weight:['400','500','600','700']
})
export const metadata: Metadata = {
  title: 'Blog App - Next js 14',
  description: 'Learning purpose',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
