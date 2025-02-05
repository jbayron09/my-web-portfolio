import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import MainNavbar from '@/layouts/main/navbar'
import DarkModeToggleBtn from '@/layouts/main/navbar/DarkModeToggleBtn'
import { ThemeProvider } from '@/context/ThemeProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bairon\'s Portfolio',
  description: 'Modern & Minimalist Portfolio',
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider>
        <MainNavbar/>
        <DarkModeToggleBtn/>
        {children}
      </ThemeProvider>
      </body>
      </html>
  )
}