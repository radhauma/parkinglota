"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WifiOff } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="bg-amber-100 p-4 rounded-full inline-flex mb-6">
          <WifiOff className="h-12 w-12 text-amber-600" />
        </div>

        <h1 className="text-3xl font-bold mb-4">You're Offline</h1>

        <p className="text-muted-foreground mb-6">
          Don't worry! ParkEase works offline. You can still access your saved parking spots and bookings.
        </p>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>

          <Button variant="outline" className="w-full" onClick={() => window.location.reload()}>
            Try Reconnecting
          </Button>
        </div>
      </div>
    </div>
  )
}

