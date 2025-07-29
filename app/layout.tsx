import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Temi Michael - Personal Portfolio",
  description: "A personal portfolio website for Temi Michael, showcasing projects, skills, and contact information.",
  keywords: "Temi Michael, portfolio, web developer, software engineer, React, Next.js, JavaScript",
  openGraph: {
    title: "Temi Michael - Personal Portfolio",
    description: "A personal portfolio website for Temi Michael, showcasing projects, skills, and contact information.",
    url: "https://your-portfolio-url.com", // Replace with your actual URL
    siteName: "Temi Michael's Portfolio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Temi Michael's Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temi Michael - Personal Portfolio",
    description: "A personal portfolio website for Temi Michael, showcasing projects, skills, and contact information.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["/placeholder.svg?height=630&width=1200"], // Replace with your actual image
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
