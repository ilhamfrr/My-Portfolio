import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ilham Faturrahman - Full Stack Developer",
  description: "Professional portfolio of Ilham Faturrahman, a Full Stack Developer specializing in modern web technologies",
  keywords: "Full Stack Developer, Web Developer, React, Next.js, Node.js, TypeScript",
  authors: [{ name: "Ilham Faturrahman" }],
  openGraph: {
    title: "Ilham Faturrahman - Full Stack Developer",
    description: "Professional portfolio showcasing full stack development projects and skills",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
