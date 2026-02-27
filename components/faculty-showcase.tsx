'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface FacultyMember {
  id: number
  name: string
  // title: string
  // credentials: string
  // specialization: string
  image: string
}

const facultyMembers: FacultyMember[] = [
 
 
  {
    id: 1,
    name: 'Dr. Mbatuojuo Patrick Olisa',
    // title: 'Director of Pastoral Care',
    // credentials: 'M.Div., Pastoral Counseling Certificate',
    // specialization: 'Pastoral Ministry, Counseling',
    image: '/patrick.jpeg',
  },
  {
    id: 2,
    name: 'Dr. Ezeakolam O. Ukabi',
    // title: 'Director of Christian Education',
    // credentials: 'Ph.D. in Religious Education',
    // specialization: 'Church Education, Youth Ministry',
    image: '/ukpabi.jpeg',
  },
  {
    id: 3,
    name: 'Dr. Godwin Ola Owa',
    // title: 'New Testament Scholar',
    // credentials: 'Ph.D. in New Testament Studies',
    // specialization: 'Gospels, Pauline Epistles',
    image: '/owa.jpeg',
  },
  {
    id: 4,
    name: 'Pst Godson Uzoma Hez',
    // title: 'Professor of Old Testament',
    // credentials: 'Ph.D. in Old Testament Interpretation',
    // specialization: 'Pentateuch, Wisdom Literature',
    image: '/hez.jpeg',
  },
  {
    id: 5,
    name: 'Dr. Charles Onyeukwu',
    // title: 'Homiletics & Preaching Coach',
    // credentials: 'M.Div., Preaching Excellence Certificate',
    // specialization: 'Preaching, Worship Leadership',
    image: '/charles.jpg',
  },
  {
    id: 6,
    name: 'Pst. Kingsley Ibeh',
    // title: 'Professor of Missiology',
    // credentials: 'Ph.D. in Missiology',
    // specialization: 'Global Missions, Cultural Studies',
    image: '/kingsley.jpg',
  },
  {
    id: 7,
    name: 'Pst. Courage U. O. Ngabnwa',
    // title: 'Church History Lecturer',
    // credentials: 'Ph.D. in Church History',
    // specialization: 'Reformation History, Pentecostal Roots',
    image: '/courage.jpg',
  },
  {
    id: 8,
    name: 'Pst. Susan Daniels',
    // title: 'Spiritual Formation Counselor',
    // credentials: 'Ph.D. in Spiritual Development',
    // specialization: 'Spiritual Maturity, Discipleship',
    image: '/susan.jpeg',
  },
  {
    id: 9,
    name: 'Mrs Justina Enwezor',
    // title: 'Spiritual Formation Counselor',
    // credentials: 'Ph.D. in Spiritual Development',
    // specialization: 'Spiritual Maturity, Discipleship',
    image: '/justina.jpeg',
  },
]

export function FacultyShowcase() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0')
            setVisibleCards((prev) => new Set(prev).add(id))
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Meet Our Faculty
          </h2>
          <p className="text-xl text-muted-foreground mb-2 text-balance">
            Dedicated Scholars and Mentors Committed to Your Spiritual Growth
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div
              key={faculty.id}
              ref={(el) => {
                if (el) cardRefs.current.set(faculty.id, el)
              }}
              data-id={faculty.id}
              className={`group relative transition-all duration-700 transform ${
                visibleCards.has(faculty.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
                    {faculty.name}
                  </h3>
                  {/* <p className="text-sm font-semibold text-primary mb-2">
                    {faculty.title}
                  </p>  */}
                  {/* <p className="text-xs text-muted-foreground mb-3">
                    {faculty.credentials}
                  </p> */}
                  <div className="pt-3 border-t border-gray-200">
                    {/* <p className="text-xs text-gray-600 italic">
                      Specialization: {faculty.specialization}
                    </p> */}
                  </div>
                </div>

                {/* Accent Bar */}
                <div className="h-1 bg-gradient-to-r from-primary to-accent group-hover:h-2 transition-all duration-300" />
              </div>
            </div>
          ))}
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
