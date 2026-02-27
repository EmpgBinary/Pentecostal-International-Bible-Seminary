import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Award, Clock, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Academics - PIBS',
  description: 'Explore our academic programs and courses at Pentecostal International Bible Seminary.',
}

export default function Academics() {
  const programs = [
    {
      category: 'Degree Courses',
      icon: BookOpen,
      programs: [
        {
          name: 'Bachelor of Arts in Theology',
          duration: '4 Years',
          description: 'Comprehensive theological education covering biblical studies, church history, systematic theology, and practical ministry skills.',
          details: [
            'Old and New Testament studies',
            'Systematic theology and apologetics',
            'Church history and doctrine',
            'Pastoral care and counseling',
            'Preaching and worship leadership',
          ],
        },
        {
          name: 'Associate Diploma in Christian Ministry',
          duration: '2 Years',
          description: 'Practical foundation for immediate ministry service combining biblical knowledge with hands-on training.',
          details: [
            'Bible survey and interpretation',
            'Basic theology',
            'Youth and children ministry',
            'Community outreach',
            'Church administration',
          ],
        },
      ],
    },
    {
      category: 'Postgraduate Programs',
      icon: Award,
      programs: [
        {
          name: 'Master of Arts in Biblical Studies',
          duration: '2 Years',
          description: 'Advanced study of biblical texts, languages, and theological interpretation for scholars and serious ministry leaders.',
          details: [
            'Advanced exegesis and hermeneutics',
            'Biblical languages (Greek and Hebrew)',
            'Theological research and writing',
            'Specialized seminars',
            'Thesis research',
          ],
        },
        {
          name: 'Master of Divinity',
          duration: '3 Years',
          description: 'Rigorous professional training for pastoral and leadership ministry with emphasis on theological education and practical skills.',
          details: [
            'Advanced theological studies',
            'Pastoral theology',
            'Church leadership and administration',
            'Contextual ministry',
            'Supervised ministry internship',
          ],
        },
      ],
    },
    {
      category: 'Flexible Learning Options',
      icon: Clock,
      programs: [
        {
          name: 'Summer Ministerial Program',
          duration: '4-8 Weeks',
          description: 'Intensive seasonal programs perfect for active ministry workers seeking professional development and spiritual renewal.',
          details: [
            'Specialized ministry topics',
            'Leadership development workshops',
            'Spiritual formation retreats',
            'Guest lecturer sessions',
            'Networking opportunities',
          ],
        },
        {
          name: 'E-Learning Courses',
          duration: 'Self-paced',
          description: 'Access world-class theological education from anywhere with flexible online learning options.',
          details: [
            'Full degree programs online',
            'Certificate courses',
            'Single subject enrollment',
            'Interactive discussion forums',
            '24/7 learning access',
          ],
        },
      ],
    },
  ]

  const features = [
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced scholars, pastors, and ministry leaders with advanced degrees and practical expertise.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Our courses integrate biblical scholarship, theological reflection, and practical application.',
    },
    {
      icon: Award,
      title: 'Recognized Credentials',
      description: 'Earn degrees and certificates recognized by church networks and educational institutions globally.',
    },
    {
      icon: Clock,
      title: 'Flexible Schedules',
      description: 'Multiple formats including full-time, part-time, online, and intensive options to fit your needs.',
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Academic Programs</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Discover rigorous, practical, and spiritually transformative theological education.
            </p>
          </div>
        </section>

        {/* Learning Environment Gallery */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Learning Environment</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/inside.jpg"
                    alt="Seminary Library Resources"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">Comprehensive Library</h3>
                      <p className="text-sm text-gray-200">Extensive theological and biblical resources</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/outside.jpg"
                    alt="Interactive Classrooms"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">Modern Facilities</h3>
                      <p className="text-sm text-gray-200">State-of-the-art learning technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.title} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {programs.map((programGroup) => {
              const IconComponent = programGroup.icon
              return (
                <div key={programGroup.category} className="mb-20">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{programGroup.category}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {programGroup.programs.map((program) => (
                      <div key={program.name} className="bg-white p-8 rounded-lg border-2 border-border hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{program.name}</h3>
                            <p className="text-primary font-semibold text-sm mt-1">Duration: {program.duration}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">{program.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Key Courses:</h4>
                          <ul className="space-y-2">
                            {program.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-accent flex-shrink-0 mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href="/admissions"
                          className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                        >
                          Learn More
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Admission Requirements Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Admission Requirements</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">General Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">High school diploma or equivalent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Personal essay on faith journey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Pastor/spiritual leader recommendation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Personal interview</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Additional for Postgraduate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground">Bachelor's degree or equivalent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground">Minimum 3 years ministry experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground">Statement of ministry goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground">Academic references</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Ministry?</h2>
            <p className="text-lg opacity-90 mb-8">
              Take the first step toward theological excellence and transformative ministry leadership.
            </p>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Admissions
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
