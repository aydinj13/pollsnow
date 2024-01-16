import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner' 
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pollsnow',
  description: 'Get the REAL picture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
    </ClerkProvider>
  )
}
