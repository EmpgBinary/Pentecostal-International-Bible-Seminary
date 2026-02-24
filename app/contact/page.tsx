'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    senderName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          data: formData,
        }),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({ senderName: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Main Campus',
      details: ['123 Seminary Lane', 'Faith City, FC 12345', 'Africa'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Toll-free: 1-800-PIBS-001'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@pibs.edu', 'admissions@pibs.edu', 'academics@pibs.edu'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 12:00 PM', 'Sunday: Closed'],
    },
  ]

  const departments = [
    {
      name: 'Admissions Office',
      email: 'admissions@pibs.edu',
      phone: '+1 (555) 123-4567',
    },
    {
      name: 'Academic Affairs',
      email: 'academics@pibs.edu',
      phone: '+1 (555) 123-4568',
    },
    {
      name: 'Financial Aid',
      email: 'financialaid@pibs.edu',
      phone: '+1 (555) 123-4569',
    },
    {
      name: 'Student Services',
      email: 'students@pibs.edu',
      phone: '+1 (555) 123-4570',
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              We're here to help. Reach out with any questions about our programs or admissions process.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info) => {
                const IconComponent = info.icon
                return (
                  <div key={info.title} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{info.title}</h3>
                    <ul className="space-y-2">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 p-8 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="senderName" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="senderName"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="academics">Academic Programs</option>
                        <option value="financial">Financial Aid</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Departments */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Department Contacts</h2>

                <div className="space-y-6">
                  {departments.map((dept) => (
                    <div key={dept.name} className="bg-white p-6 rounded-lg border-2 border-border">
                      <h3 className="font-bold text-foreground mb-3">{dept.name}</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href={`mailto:${dept.email}`} className="text-primary hover:text-accent transition-colors">
                            {dept.email}
                          </a>
                        </li>
                        <li>
                          <a href={`tel:${dept.phone}`} className="text-primary hover:text-accent transition-colors">
                            {dept.phone}
                          </a>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-foreground mb-2">Connect With Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Follow us on social media for updates, events, and spiritual encouragement.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-primary hover:text-accent transition-colors font-semibold text-sm">
                      Facebook
                    </a>
                    <a href="#" className="text-primary hover:text-accent transition-colors font-semibold text-sm">
                      Twitter
                    </a>
                    <a href="#" className="text-primary hover:text-accent transition-colors font-semibold text-sm">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Locations */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Campuses</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Main Campus',
                  location: 'Faith City, Country',
                  programs: 'All programs available',
                },
                {
                  name: 'Regional Campus',
                  location: 'Central Region, Country',
                  programs: 'Diploma & E-learning',
                },
                {
                  name: 'Online Campus',
                  location: 'Global',
                  programs: 'E-learning & Summer Programs',
                },
              ].map((campus) => (
                <div key={campus.name} className="bg-red-50 p-8 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-bold text-foreground mb-2">{campus.name}</h3>
                  <p className="text-muted-foreground mb-4">{campus.location}</p>
                  <p className="text-sm text-primary font-semibold">
                    <strong>Programs:</strong> {campus.programs}
                  </p>
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
