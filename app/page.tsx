import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroAlternating } from '@/components/hero-alternating'
import { NewsCarousel } from '@/components/news-carousel'
import { FacultyShowcase } from '@/components/faculty-showcase'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Users, Globe, Laptop } from 'lucide-react'

export default function Home() {
  const boardMembers = [
    {
      name: 'Rev. Dr. M.Ezekiel',
      title: 'President PIBS',
      image: '/mummy.jpg',
    },
    {
      name: 'Rev. John Eze',
      title: 'Cpm, Imo Co-ordinator',
      image: '/eze.jpeg',
    },
    {
      name: 'Rev. Marius O. Alugwe',
      title: 'Cpm, Akwa Ibom',
      image: '/aligwe.jpeg',
    },
    {
      name: 'Rev. Donatus Emmanuel',
      title: 'Rector',
      image: '/donatus.jpg',
    },
  ]

  const programs = [
    {
      icon: BookOpen,
      title: 'Postgraduate Programs',
      description: 'Advanced biblical studies, theological research, and specialized ministry training for experienced leaders.',
      color: 'bg-blue-50',
      iconColor: 'text-primary',
    },
    {
      icon: Users,
      title: 'Degree Courses',
      description: 'Comprehensive bachelor and associate degree programs in theology, biblical studies, and ministry.',
      color: 'bg-red-50',
      iconColor: 'text-accent',
    },
    {
      icon: Globe,
      title: 'Summer Ministerial Program',
      description: 'Intensive seasonal programs designed for active ministry workers seeking professional development.',
      color: 'bg-blue-50',
      iconColor: 'text-primary',
    },
    {
      icon: Laptop,
      title: 'E-Learning',
      description: 'Flexible online courses and degree programs for students worldwide.',
      color: 'bg-red-50',
      iconColor: 'text-accent',
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Alternating Video */}
        <HeroAlternating />

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Mission */}
              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The mission of Pentecostal International Bible Seminary(PIBS) is to equip individuals for christian ministry, through holistic education,
                  emphasizing the pentecostal experience and practice of faith.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-red-50 p-8 rounded-lg border-l-4 border-accent">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Vison of Pentecostal Bible Seminary (PIBS) is to train and equip ministers to serve in holiness and righteousness,
                  both within their local context and on a global scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* President Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Meet Our Leadership</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* President */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-64 h-64 mb-6 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/mummy.jpg"
                    alt="President"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Rev Mercy Ezekiel</h3>
                <p className="text-lg font-semibold text-primary mb-4">President</p>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  She is a woman of integrity whose hard work has yielded great fruits in Christian Pentecostal Mission Intl.
                  She is the General Overseer of C.P.M, Int'l. She is the President of Pentecostal International BIble Seminary(PIBS) and the President of MEEZ Outreach
                  which has a far reaching deliverance effect all over NIgeria and abroad. She has a Ph.D in theology and Christian Education. She is an Executive 
                  member of Christian Association of Nigeria(CAN).
                </p>
              </div>

              {/* Rector */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-64 h-64 mb-6 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/donatus.jpg"
                    alt="Rector"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">PROF. Donatus Emmanuel, U.N</h3>
                <p className="text-lg font-semibold text-accent mb-4">Rector</p>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  He holds a Diploma in Theology from Derek Prince Theological Corres. COl, USA. Diploma in Theology from PIBS, As well as a Ph.D in Divinity from GMF Christian
                  University. Donatus Emmanuel is Also a Professor and Apostle of Divinity, a Defender of the Faith(Divine Order), A teacher, a man with doctrine and divine principles.
                  A man with leadership distinction called into the teaching ministry, a man of integrity and a preacher of righteousness. He is the seminary const and teaches christian
                  ethics, soteriology, and advanced pastoral theology among other courses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Board Members</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our board comprises visionary leaders committed to advancing biblical education and institutional excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground text-center">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Carousel Section */}
        <NewsCarousel />

        {/* Faculty Showcase Section */}
        <FacultyShowcase />

        {/* Programs Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Programs</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We offer flexible, world-class theological education designed to meet the needs of modern ministry leaders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => {
                const IconComponent = program.icon
                return (
                  <div
                    key={program.title}
                    className={`${program.color} p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${program.iconColor} flex-shrink-0`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                        <p className="text-muted-foreground">{program.description}</p>
                        <Link
                          href="/academics"
                          className="inline-block mt-4 text-primary font-semibold hover:text-accent transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of students transforming their lives and communities through biblical education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
