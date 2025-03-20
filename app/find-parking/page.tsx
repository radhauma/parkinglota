import type { Metadata } from "next"
import { EnhancedParkingMap } from "@/components/map/enhanced-parking-map"
import { LazyLoad } from "@/components/ui/lazy-load"

export const metadata: Metadata = {
  title: "Find Parking - ParkEase",
  description: "Find and book parking spots near you",
}

export default function FindParkingPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Find Parking</h1>
        <p className="text-muted-foreground">Discover available parking spots near you</p>
      </div>

      <div className="h-[calc(100vh-12rem)] rounded-lg overflow-hidden border">
        <LazyLoad height="100%">
          <EnhancedParkingMap />
        </LazyLoad>
      </div>
    </div>
  )
}

