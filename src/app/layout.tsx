import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import DarkModeToggleBtn from '@/layouts/main/navbar/DarkModeToggleBtn'
import { ThemeProvider } from '@/context/ThemeProvider'
import MainNavbar from '@/layouts/main/navbar'
import LoadingScreen from '@/layouts/main/LoadingScreen'

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
  icons: {
    icon: "/icon.jpg",
  },
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
        <LoadingScreen />
        <MainNavbar/>
        <DarkModeToggleBtn/>
        {children}
      </ThemeProvider>
      </body>
      </html>
  )
}