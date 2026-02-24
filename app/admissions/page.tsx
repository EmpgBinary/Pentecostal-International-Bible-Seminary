import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Calendar, DollarSign, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Admissions - PIBS',
  description: 'Learn how to apply to Pentecostal International Bible Seminary.',
}

export default function Admissions() {
  const steps = [
    {
      number: '1',
      title: 'Submit Application',
      description: 'Complete our online application form with personal and educational information.',
      icon: FileText,
    },
    {
      number: '2',
      title: 'Provide Documentation',
      description: 'Submit required documents including transcripts, essays, and letters of recommendation.',
      icon: CheckCircle,
    },
    {
      number: '3',
      title: 'Attend Interview',
      description: 'Meet with our admissions team for a personal interview (in-person or virtual).',
      icon: Calendar,
    },
    {
      number: '4',
      title: 'Receive Decision',
      description: 'Get notified of your admission status and begin your studies with us.',
      icon: CheckCircle,
    },
  ]

  const tuitionInfo = [
    {
      program: 'Bachelor of Arts in Theology',
      perYear: '$3,500 - $4,500',
      perMonth: '$290 - $375',
      note: 'Full-time program',
    },
    {
      program: 'Associate Diploma',
      perYear: '$2,000 - $2,800',
      perMonth: '$165 - $235',
      note: 'Full-time program',
    },
    {
      program: 'Master of Arts',
      perYear: '$4,000 - $5,500',
      perMonth: '$330 - $460',
      note: 'Full-time program',
    },
    {
      program: 'E-Learning Courses',
      perCourse: '$400 - $800',
      perMonth: 'Flexible',
      note: 'Per course basis',
    },
  ]

  const financialOptions = [
    {
      title: 'Scholarships',
      description: 'Merit-based and need-based scholarships available for qualified students. Apply separately after admission.',
    },
    {
      title: 'Payment Plans',
      description: 'Flexible monthly payment options available. Speak with our financial aid office for customized plans.',
    },
    {
      title: 'Work-Study Program',
      description: 'On-campus employment opportunities to help offset educational costs while gaining work experience.',
    },
    {
      title: 'Church Sponsorship',
      description: 'Many churches sponsor their pastoral candidates. Contact your local church leadership for options.',
    },
    {
      title: 'Student Loans',
      description: 'Information about government and private education loan options available to qualifying students.',
    },
    {
      title: 'Full-Time Discounts',
      description: '10% discount for full-time students enrolled in regular degree programs.',
    },
  ]

  const faq = [
    {
      question: 'What is the application deadline?',
      answer: 'Applications are reviewed on a rolling basis. Early applications are encouraged. Specific program deadlines are listed on the application portal.',
    },
    {
      question: 'Do I need previous ministry experience?',
      answer: 'No prior experience is required for undergraduate programs. Postgraduate programs typically require 3+ years of ministry experience.',
    },
    {
      question: 'Can I study part-time?',
      answer: 'Yes, we offer part-time options for undergraduate programs and flexible e-learning formats for working professionals.',
    },
    {
      question: 'Are scholarships available?',
      answer: 'Yes, we offer merit-based, need-based, and ministerial scholarships. The application and scholarship requests are submitted together.',
    },
    {
      question: 'What if I need financial assistance?',
      answer: 'Contact our financial aid office at financialaid@pibs.edu to discuss payment plans, scholarships, and other funding options.',
    },
    {
      question: 'Can international students apply?',
      answer: 'Yes, we welcome international students. International applicants should check visa and residence permit requirements for their country.',
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Admissions</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Start your journey toward spiritual leadership and theological excellence.
            </p>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Application Process</h2>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {steps.map((step) => {
                const IconComponent = step.icon
                return (
                  <div key={step.number} className="relative">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mb-4 flex-shrink-0">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 text-center">{step.title}</h3>
                      <p className="text-muted-foreground text-sm text-center">{step.description}</p>
                    </div>
                    {Number(step.number) < 4 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-1 bg-primary/30" />
                    )}
                  </div>
                )
              })}
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <p className="text-muted-foreground mb-6">
                Ready to apply? Submit your application today and join our community of spiritual leaders.
              </p>
              <Link
                href="/admissions/apply"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Start Application
              </Link>
            </div>
          </div>
        </section>

        {/* Tuition & Fees */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Tuition & Fees</h2>
            <p className="text-center text-muted-foreground mb-12">
              We are committed to providing quality education at affordable rates.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tuitionInfo.map((info) => (
                <div key={info.program} className="bg-white p-6 rounded-lg border-2 border-border hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-foreground mb-4">{info.program}</h3>
                  <div className="space-y-2 mb-4">
                    {info.perYear && (
                      <div>
                        <p className="text-sm text-muted-foreground">Per Year:</p>
                        <p className="text-xl font-bold text-primary">{info.perYear}</p>
                      </div>
                    )}
                    {info.perCourse && (
                      <div>
                        <p className="text-sm text-muted-foreground">Per Course:</p>
                        <p className="text-xl font-bold text-primary">{info.perCourse}</p>
                      </div>
                    )}
                    {info.perMonth && (
                      <div>
                        <p className="text-sm text-muted-foreground">Monthly:</p>
                        <p className="text-lg text-accent font-semibold">{info.perMonth}</p>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{info.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Assistance */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Financial Assistance Options</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financialOptions.map((option) => (
                <div key={option.title} className="bg-red-50 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-foreground mb-3">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Required Documents</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">For All Applicants</h3>
                <ul className="space-y-3">
                  {[
                    'Completed application form',
                    'High school/secondary school transcript',
                    'Personal statement (500-750 words)',
                    'Two letters of recommendation',
                    'Copy of national ID or passport',
                    'Birth certificate',
                    'Recent passport-sized photograph',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">For Postgraduate Applicants</h3>
                <ul className="space-y-3">
                  {[
                    'Bachelor degree transcript',
                    'Diploma or certificate of ministry experience',
                    'Detailed CV or resume',
                    'Three academic/professional references',
                    'Statement of ministry goals',
                    'Evidence of church affiliation/sponsorship',
                    'Proof of ministry experience (3+ years)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.question} className="bg-white p-6 rounded-lg border-2 border-border">
                  <h3 className="font-bold text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact our admissions team for more information about our programs and application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Start Application
              </Link>
              <a
                href="mailto:admissions@pibs.edu"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Email Admissions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
