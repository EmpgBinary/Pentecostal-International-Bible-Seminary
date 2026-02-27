// import { Header } from '@/components/header'
// import { Footer } from '@/components/footer'
// import { CheckCircle } from 'lucide-react'
// import Image from 'next/image'

// export const metadata = {
//   title: 'About Us - PIBS',
//   description: 'Learn about Pentecostal International Bible Seminary and our commitment to biblical education.',
// }

// export default function About() {
//   const coreValues = [
//     {
//       title: 'Biblical Authority',
//       description: 'We believe the Bible is the authoritative word of God and the foundation of all theological education.',
//     },
//     {
//       title: 'Spirit Empowerment',
//       description: 'We emphasize the role of the Holy Spirit in personal transformation and effective ministry.',
//     },
//     {
//       title: 'Academic Excellence',
//       description: 'We maintain rigorous academic standards comparable to the finest theological institutions globally.',
//     },
//     {
//       title: 'Practical Ministry',
//       description: 'We equip students with real-world skills and experience applicable to diverse ministry contexts.',
//     },
//     {
//       title: 'Community Impact',
//       description: 'We prepare leaders committed to serving their communities and advancing social transformation.',
//     },
//     {
//       title: 'Global Perspective',
//       description: 'We foster an international community united in Christ and committed to global ministry.',
//     },
//   ]

//   const achievements = [
//     '25+ years of serving the African church',
//     '5,000+ graduates serving globally',
//     'Partnerships with 15+ international seminaries',
//     'Accredited by regional theological associations',
//     '200+ faculty and support staff',
//     'Campus in 3 African countries',
//   ]

//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       <Header />

//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="bg-primary text-primary-foreground py-16 md:py-24">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About PIBS</h1>
//             <p className="text-xl opacity-90 max-w-2xl">
//               Pioneering biblical education and spiritual formation for African and global leadership.
//             </p>
//           </div>
//         </section>

//         {/* History Section */}
//         <section className="py-16 md:py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-foreground mb-8">Aims and Objectives</h2>
//             <div className="grid md:grid-cols-2 gap-12">
//               <div>
//                 <p className="text-muted-foreground leading-relaxed mb-6">
//                   PIBS is a theological instituttion. In understanding its primary academic and professional purposes, the seminary aims.
//                   <li>1. To prepare men and women for Christian ministries so they may perform ministerial functions and be equipped to develop innovative ministries in a changing world</li>
//                   <li>2. To stimulate the growth of the personal Christian spirit among its facility and students and nuture among them, the discpline of Christian life.</li>
//                   <li>3. To foster a distinctive community of those who share common faith and commitment as expressed in corporate worship, mutual care and varieties of exprerience in life lived together</li>
//                   <li>To inquire into all aspects of theological truth using all pertinent discplines, and form basic commitment to christian doctrine, 
//                     to  reappraise and reformulate the christian faith in response to our increasing knowledge.
//                   </li>
//                   <li>To improve study, instruction and ministry and to apply appropriate academic standards to research and practice.</li>
//                   <li>To encourage freedom of intellect and conscience so that, the life of the scholl and the church may be enreiched by diverse and responsible
//                     thoughts and actions.
//                   </li>
//                 </p>
//                 {/* <p className="text-muted-foreground leading-relaxed mb-6">
//                  To stimulate the growth of the personal Christian spirit among its facility and students and nuture among them them discpline of christian life.
//                 </p> */}
//               </div>
//               {/* <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
//                 <h3 className="text-2xl font-bold text-foreground mb-6">Milestones</h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-3">
//                     <span className="text-primary font-bold flex-shrink-0">1999</span>
//                     <span className="text-muted-foreground">Foundation year with inaugural class</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-primary font-bold flex-shrink-0">2005</span>
//                     <span className="text-muted-foreground">First postgraduate program launched</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-primary font-bold flex-shrink-0">2012</span>
//                     <span className="text-muted-foreground">E-learning platform established</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-primary font-bold flex-shrink-0">2018</span>
//                     <span className="text-muted-foreground">Achieved regional accreditation</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-primary font-bold flex-shrink-0">2023</span>
//                     <span className="text-muted-foreground">5,000th graduate milestone</span>
//                   </li>
//                 </ul>
//               </div> */}
//             </div>
//           </div>
//         </section>

//         {/* Campus Gallery */}
//         <section className="py-16 md:py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Campus Activities</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <div className="relative h-80 md:h-96">
//                   <Image
//                     src="/orokpo.jpg"
//                     alt="Main Seminary Building"
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <div className="text-white">
//                       <h3 className="font-bold text-lg">Main Building</h3>
//                       <p className="text-sm text-gray-200">Classical architecture with modern amenities</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <div className="relative h-80 md:h-96">
//                   <Image
//                     src="/seun.jpg"
//                     alt="Seminary Library"
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <div className="text-white">
//                       <h3 className="font-bold text-lg">Library</h3>
//                       <p className="text-sm text-gray-200">Extensive biblical and theological resources</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <div className="relative h-80 md:h-96">
//                   <Image
//                     src="/elias.jpg"
//                     alt="Classroom"
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <div className="text-white">
//                       <h3 className="font-bold text-lg">Classrooms</h3>
//                       <p className="text-sm text-gray-200">Modern teaching facilities and equipment</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <div className="relative h-80 md:h-96">
//                   <Image
//                     src="/woman.jpg"
//                     alt="Student Activities"
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <div className="text-white">
//                       <h3 className="font-bold text-lg">Community Life</h3>
//                       <p className="text-sm text-gray-200">Fellowship and spiritual growth opportunities</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Core Values Section */}
//         <section className="py-16 md:py-20 bg-muted/30">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Values</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {coreValues.map((value) => (
//                 <div key={value.title} className="flex gap-4">
//                   <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
//                     <p className="text-muted-foreground text-sm">{value.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Achievements Section */}
//         <section className="py-16 md:py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Impact</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {achievements.map((achievement) => (
//                 <div key={achievement} className="bg-white p-6 rounded-lg border-2 border-primary/20 hover:border-primary transition-colors">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <CheckCircle className="w-6 h-6 text-primary" />
//                     </div>
//                     <p className="text-foreground font-semibold">{achievement}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Why Choose PIBS */}
//         <section className="py-16 md:py-20 bg-red-50">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose PIBS?</h2>
//             <ul className="space-y-4">
//               <li className="flex gap-4 items-start">
//                 <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
//                 <div>
//                   <h3 className="font-bold text-foreground mb-1">Experienced Faculty</h3>
//                   <p className="text-muted-foreground">World-class scholars and experienced ministry leaders who integrate scholarship with practical wisdom.</p>
//                 </div>
//               </li>
//               <li className="flex gap-4 items-start">
//                 <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
//                 <div>
//                   <h3 className="font-bold text-foreground mb-1">Flexible Learning Options</h3>
//                   <p className="text-muted-foreground">On-campus, online, and hybrid programs designed to fit your lifestyle and ministry context.</p>
//                 </div>
//               </li>
//               <li className="flex gap-4 items-start">
//                 <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
//                 <div>
//                   <h3 className="font-bold text-foreground mb-1">Spiritual Community</h3>
//                   <p className="text-muted-foreground">A vibrant community of believers committed to spiritual growth, prayer, and mutual encouragement.</p>
//                 </div>
//               </li>
//               <li className="flex gap-4 items-start">
//                 <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
//                 <div>
//                   <h3 className="font-bold text-foreground mb-1">Global Network</h3>
//                   <p className="text-muted-foreground">Connect with thousands of alumni serving in ministry across Africa and globally.</p>
//                 </div>
//               </li>
//               <li className="flex gap-4 items-start">
//                 <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
//                 <div>
//                   <h3 className="font-bold text-foreground mb-1">Affordable Education</h3>
//                   <p className="text-muted-foreground">Quality theological education accessible to students from diverse socioeconomic backgrounds.</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'About Us - PIBS',
  description:
    'Learn about Pentecostal International Bible Seminary and our commitment to biblical education.',
}

export default function About() {
  const coreValues = [
    {
      title: 'Biblical Authority',
      description:
        'We believe the Bible is the authoritative word of God and the foundation of all theological education.',
    },
    {
      title: 'Spirit Empowerment',
      description:
        'We emphasize the role of the Holy Spirit in personal transformation and effective ministry.',
    },
    {
      title: 'Academic Excellence',
      description:
        'We maintain rigorous academic standards comparable to the finest theological institutions globally.',
    },
    {
      title: 'Practical Ministry',
      description:
        'We equip students with real-world skills and experience applicable to diverse ministry contexts.',
    },
    {
      title: 'Community Impact',
      description:
        'We prepare leaders committed to serving their communities and advancing social transformation.',
    },
    {
      title: 'Global Perspective',
      description:
        'We foster an international community united in Christ and committed to global ministry.',
    },
  ]

  const achievements = [
    '25+ years of serving the African church',
    '5,000+ graduates serving globally',
    'Partnerships with 15+ international seminaries',
    'Accredited by regional theological associations',
    '200+ faculty and support staff',
    'Campus in 3 African countries',
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About PIBS
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Pioneering biblical education and spiritual formation for African and global leadership.
            </p>
          </div>
        </section>

        {/* Aims and Objectives Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Aims and Objectives
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* TEXT SIDE */}
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  PIBS is a theological institution committed to academic and
                  spiritual excellence. In understanding its primary academic
                  and professional purposes, the seminary aims:
                </p>

                <ul className="space-y-4 text-muted-foreground list-disc pl-5">
                  <li>
                    To prepare men and women for Christian ministries and
                    innovative leadership in a changing world.
                  </li>
                  <li>
                    To stimulate personal Christian growth among faculty and
                    students and nurture disciplined spiritual life.
                  </li>
                  <li>
                    To foster a distinctive faith community expressed in
                    corporate worship, mutual care, and shared life experiences.
                  </li>
                  <li>
                    To inquire into theological truth using relevant disciplines
                    while remaining committed to Christian doctrine.
                  </li>
                  <li>
                    To improve study, instruction, and ministry through strong
                    academic standards.
                  </li>
                  <li>
                    To encourage intellectual freedom and responsible thought
                    for the enrichment of the church and society.
                  </li>
                </ul>
              </div>

              {/* IMAGE SIDE */}
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/orokpo.jpg"   // You can change to any image in your public folder
                  alt="Seminary students in training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="bg-white p-6 rounded-lg border-2 border-primary/20 hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-semibold">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
