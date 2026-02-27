'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NewsItem {
  id: number
  image: string
  title: string
  date: string
  description: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: '/brothers.jpeg',
    title: 'Graduation Ceremony 2024',
    date: 'June 15, 2024',
    description: 'Celebrating the successful graduation of 150 students who have completed their theological studies and are ready to serve in ministry worldwide.',
  },
  {
    id: 2,
    image: '/smile.jpeg',
    title: 'Annual Convocation',
    date: 'May 10, 2024',
    description: 'Our grand annual convocation brought together students, faculty, and distinguished guest speakers to inspire and motivate our seminary community.',
  },
  {
    id: 3,
    image: '/church.jpeg',
    title: 'Special Chapel Service',
    date: 'April 22, 2024',
    description: 'A powerful chapel service featuring worship, prayer, and spiritual renewal for all members of the Pentecostal International Bible Seminary community.',
  },
  {
    id: 4,
    image: '/btb.jpg',
    title: 'Back To Bible Conference',
    date: 'April 22, 2024',
    description: 'A powerful chapel service featuring worship, prayer, and spiritual renewal for all members of the Pentecostal International Bible Seminary community.',
  },
   {
    id: 5,
    image: '/sale.png',
    title: 'Admission In Progress',
    date: 'April 22, 2024',
    description: 'A powerful chapel service featuring worship, prayer, and spiritual renewal for all members of the Pentecostal International Bible Seminary community.',
  },
]

export function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Latest News & Events
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Stay updated with the latest happenings at Pentecostal International Bible Seminary
          </p>
        </div>

        <div className="relative group">
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-semibold mb-2 text-accent uppercase tracking-widest">
                    {item.date}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                    {item.title}
                  </h3>
                  <p className="text-lg max-w-2xl text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/50 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Previous news"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={goToNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/50 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Next news"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-white w-8 h-3'
                    : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
