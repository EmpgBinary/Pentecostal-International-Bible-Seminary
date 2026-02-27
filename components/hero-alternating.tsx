
'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

export function HeroAlternating() {
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLIFrameElement | null>(null)

  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center min-h-96">

          {/* ================= TEXT SECTION ================= */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
              showVideo ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                <span className="block">Pentecostal International</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bible Seminary
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Equipping spiritual leaders for transformative ministry across the globe
              </p>

              <div className="flex justify-center gap-4">
                <Link
                  href="/admissions"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Apply Now
                </Link>

                <button
                  onClick={() => setShowVideo(true)}
                  className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"
                >
                  Watch Video
                </button>
              </div>
            </div>
          </div>

          {/* ================= VIDEO SECTION ================= */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
              showVideo ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <div className="w-full max-w-3xl">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">

                <iframe
                  ref={videoRef}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/YT_dLgWFI3o?autoplay=1&mute=1&controls=1&rel=0`}
                  title="Bible Seminary Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={() => setShowVideo(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}