'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, AlertCircle, Loader } from 'lucide-react'

export default function ApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    
    // Step 2: Educational Background
    highestEducation: '',
    institution: '',
    graduationYear: '',
    major: '',
    gpa: '',
    
    // Step 3: Religious Background
    denominationAffiliation: '',
    yearsInChurch: '',
    ministryExperience: '',
    referringChurch: '',
    
    // Step 4: Program & Motivation
    programInterest: '',
    motivation: '',
    careerGoals: '',
    references: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'application',
          data: formData,
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setSubmitted(true)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 300)
    } catch (err) {
      setError('Failed to submit application. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center py-16">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest in Pentecostal International Bible Seminary. We have received your application and will review it carefully. You will receive a confirmation email shortly.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Check your email for next steps and admission updates.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const steps = [
    { number: 1, title: 'Personal Info', description: 'Tell us about yourself' },
    { number: 2, title: 'Education', description: 'Your academic background' },
    { number: 3, title: 'Religious Background', description: 'Your spiritual journey' },
    { number: 4, title: 'Program & Goals', description: 'Your ministry aspirations' },
  ]

  const isStep1Valid = formData.firstName && formData.lastName && formData.email && formData.phone
  const isStep2Valid = formData.highestEducation && formData.institution && formData.graduationYear
  const isStep3Valid = formData.denominationAffiliation && formData.yearsInChurch
  const isStep4Valid = formData.programInterest && formData.motivation

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-primary/5 to-white">
      <Header />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-accent py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-primary-foreground mb-2 animate-fade-in">
              Application Form
            </h1>
            <p className="text-primary-foreground/90 text-lg">
              Begin your journey to spiritual leadership
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 animate-fade-in">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex gap-2 md:gap-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex-1">
                    <button
                      onClick={() => {
                        if (step.number < currentStep) setCurrentStep(step.number)
                        else if (
                          (step.number === 2 && isStep1Valid) ||
                          (step.number === 3 && isStep1Valid && isStep2Valid) ||
                          (step.number === 4 && isStep1Valid && isStep2Valid && isStep3Valid)
                        ) {
                          setCurrentStep(step.number)
                        }
                      }}
                      className="w-full text-center transition-all duration-300"
                    >
                      <div
                        className={`h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                          step.number <= currentStep
                            ? 'bg-primary text-primary-foreground shadow-lg'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        <span className="font-bold">{step.number}</span>
                      </div>
                      <div className="hidden md:block">
                        <p className={`text-sm font-semibold ${
                          step.number <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {step.title}
                        </p>
                        <p className={`text-xs ${
                          step.number <= currentStep ? 'text-muted-foreground' : 'text-gray-500'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </button>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 mx-1 my-2 rounded-full transition-all duration-300 ${
                          step.number < currentStep ? 'bg-primary' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 md:p-12 animate-fade-in">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-8">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nationality
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Nigerian"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Street address"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Lagos"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Educational Background */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-8">Educational Background</h2>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Highest Level of Education *
                    </label>
                    <select
                      name="highestEducation"
                      value={formData.highestEducation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select Education Level</option>
                      <option value="high_school">High School</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="doctorate">Doctorate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Institution Name *
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="University or College Name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Graduation Year *
                      </label>
                      <input
                        type="number"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        required
                        min="1980"
                        max={new Date().getFullYear()}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="2020"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        GPA/Grade
                      </label>
                      <input
                        type="text"
                        name="gpa"
                        value={formData.gpa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="3.8/4.0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Major/Field of Study
                    </label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="e.g., Business Administration, Computer Science"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Religious Background */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-8">Religious Background</h2>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Church Denomination/Affiliation *
                    </label>
                    <select
                      name="denominationAffiliation"
                      value={formData.denominationAffiliation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select Denomination</option>
                      <option value="pentecostal">Pentecostal</option>
                      <option value="charismatic">Charismatic</option>
                      <option value="apostolic">Apostolic</option>
                      <option value="evangelical">Evangelical</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Years in Church Ministry *
                    </label>
                    <input
                      type="number"
                      name="yearsInChurch"
                      value={formData.yearsInChurch}
                      onChange={handleInputChange}
                      required
                      min="0"
                      max="80"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Number of years"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Ministry Experience & Background
                    </label>
                    <textarea
                      name="ministryExperience"
                      value={formData.ministryExperience}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Describe your involvement in church ministry, leadership roles, and spiritual experiences"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Referring Church
                    </label>
                    <input
                      type="text"
                      name="referringChurch"
                      value={formData.referringChurch}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Name of your church"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Program & Motivation */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-8">Program & Goals</h2>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Program of Interest *
                    </label>
                    <select
                      name="programInterest"
                      value={formData.programInterest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select a Program</option>
                      <option value="postgraduate">Postgraduate Program</option>
                      <option value="degree">Degree Courses</option>
                      <option value="summer">Summer Ministerial Program</option>
                      <option value="elearning">E-Learning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Why do you want to study at PIBS? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your motivation for joining our seminary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Career/Ministry Goals
                    </label>
                    <textarea
                      name="careerGoals"
                      value={formData.careerGoals}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="What are your long-term ministry or career goals?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      References
                    </label>
                    <textarea
                      name="references"
                      value={formData.references}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Provide names and contact information of 2-3 references (pastor, mentor, etc.)"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4 mt-10 pt-8 border-t border-border">
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                  disabled={currentStep === 1}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-foreground hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>

                {currentStep === 4 ? (
                  <button
                    type="submit"
                    disabled={loading || !isStep4Valid}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                      loading || !isStep4Valid
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-accent text-accent-foreground hover:opacity-90'
                    }`}
                  >
                    {loading && <Loader className="w-4 h-4 animate-spin" />}
                    Submit Application
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.min(4, prev + 1))}
                    disabled={
                      (currentStep === 1 && !isStep1Valid) ||
                      (currentStep === 2 && !isStep2Valid) ||
                      (currentStep === 3 && !isStep3Valid)
                    }
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      (currentStep === 1 && !isStep1Valid) ||
                      (currentStep === 2 && !isStep2Valid) ||
                      (currentStep === 3 && !isStep3Valid)
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-primary text-primary-foreground hover:opacity-90'
                    }`}
                  >
                    Next
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />

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
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}
