// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'

// export function HeroAlternating() {
//   const [showVideo, setShowVideo] = useState(false)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowVideo((prev) => !prev)
//     }, 5000) // Change every 5 seconds

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 md:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-center min-h-96">
//           {/* Text Content - with fade in/out animation */}
//           <div
//             className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
//               showVideo ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
//             }`}
//           >
//             <div className="text-center mb-12">
//               <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance animate-in fade-in zoom-in duration-1000"
//                 style={{
//                   animation: showVideo ? 'none' : 'fadeInZoom 1s ease-out',
//                 }}
//               >
//                 <span className="block">Pentecostal International</span>
//                 <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                   Bible Seminary
//                 </span>
//               </h1>
//               <p className="text-xl text-muted-foreground mb-8 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200"
//                 style={{
//                   animation: showVideo ? 'none' : 'slideUp 0.8s ease-out 0.2s forwards',
//                   opacity: showVideo ? 0 : 1,
//                 }}
//               >
//                 Equipping spiritual leaders for transformative ministry across the globe
//               </p>
//               <Link
//                 href="/admissions"
//                 className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
//                 style={{
//                   animation: showVideo ? 'none' : 'slideUp 0.8s ease-out 0.4s forwards',
//                   opacity: showVideo ? 0 : 1,
//                 }}
//               >
//                 Apply Now
//               </Link>
//             </div>
//           </div>

//           {/* Video Content - with fade in/out animation */}
//           <div
//             className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
//               showVideo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//             }`}
//           >
//             <div className="w-full max-w-2xl">
//               <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src="https://www.youtube.com/embed/YT_dLgWFI3o?autoplay=1&mute=1"
//                   title="Bible Seminary Overview"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full"
//                 ></iframe>
//               </div>
//               <p className="text-center text-sm text-muted-foreground mt-4">
//                 Discover what makes our seminary special
//               </p>
//             </div>
//           </div>

//           {/* Dot indicators */}
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//             <button
//               onClick={() => setShowVideo(false)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 !showVideo ? 'bg-primary w-8' : 'bg-muted-foreground'
//               }`}
//               aria-label="Show text content"
//             />
//             <button
//               onClick={() => setShowVideo(true)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 showVideo ? 'bg-primary w-8' : 'bg-muted-foreground'
//               }`}
//               aria-label="Show video content"
//             />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeInZoom {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function HeroAlternating() {
  const [showVideo, setShowVideo] = useState(false)

  // Switch every 7 seconds (smoother experience)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((prev) => !prev)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center min-h-96">

          {/* ================= TEXT SECTION ================= */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-2000 ease-in-out ${
              showVideo ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            <div className="text-center mb-12">
              <h1
                className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance"
              >
                <span className="block">Pentecostal International</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bible Seminary
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Equipping spiritual leaders for transformative ministry across the globe
              </p>

              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* ================= VIDEO SECTION ================= */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-2000 ease-in-out ${
              showVideo ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <div className="w-full max-w-2xl">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">

                {/* 
                  NOTE:
                  Removed mute=1 so sound is enabled.
                  If autoplay fails in some browsers, add &mute=1 back.
                */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YT_dLgWFI3o?autoplay=1"
                  title="Bible Seminary Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Discover what makes our seminary special
              </p>
            </div>
          </div>

          {/* ================= DOT CONTROLS ================= */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            <button
              onClick={() => setShowVideo(false)}
              className={`h-3 rounded-full transition-all ${
                !showVideo
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground w-3'
              }`}
              aria-label="Show text content"
            />

            <button
              onClick={() => setShowVideo(true)}
              className={`h-3 rounded-full transition-all ${
                showVideo
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground w-3'
              }`}
              aria-label="Show video content"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

