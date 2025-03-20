import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import PWASetup from "@/components/pwa-setup"
import { UserProvider } from "@/components/user-provider"
import { Toaster } from "@/components/ui/toaster"
import { OfflineToastProvider } from "@/components/ui/offline-toast"
import { PageTransition } from "@/components/ui/page-transition"
import { EnhancedNav } from "@/components/navigation/enhanced-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ParkEase - Offline Parking Management",
  description: "Find and book parking spots even without internet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <UserProvider>
            <OfflineToastProvider>
              <PWASetup />
              <EnhancedNav>
                <PageTransition>{children}</PageTransition>
              </EnhancedNav>
              <Toaster />
            </OfflineToastProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

