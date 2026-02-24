'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, FileText, LogOut, Filter, Download, Loader } from 'lucide-react'

interface Submission {
  id: string
  type: 'application' | 'contact'
  timestamp: string
  data: Record<string, unknown>
}

export default function AdminDashboard() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [filterType, setFilterType] = useState<'all' | 'application' | 'contact'>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      try {
        console.log('[v0] Checking authentication...')
        const response = await fetch('/api/admin/auth')
        console.log('[v0] Auth check response status:', response.status)
        
        if (response.status === 200) {
          const data = await response.json()
          console.log('[v0] Auth check data:', data)
          if (data.authenticated) {
            console.log('[v0] User authenticated, loading submissions...')
            setAuthenticated(true)
            fetchSubmissions()
          } else {
            console.log('[v0] User not authenticated, redirecting to login')
            router.push('/admin/login')
          }
        } else {
          console.log('[v0] Auth check failed, redirecting to login')
          router.push('/admin/login')
        }
      } catch (error) {
        console.error('[v0] Auth check error:', error)
        router.push('/admin/login')
      }
    }

    checkAuth()
  }, [router])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/submissions')
      const data = await response.json()
      setSubmissions(data || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'logout' }),
      })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleRefresh = () => {
    fetchSubmissions()
  }

  const handleDownloadCSV = () => {
    const filteredData = filterType === 'all' 
      ? submissions 
      : submissions.filter(s => s.type === filterType)

    const csvContent = [
      ['ID', 'Type', 'Timestamp', 'Data'],
      ...filteredData.map(item => [
        item.id,
        item.type,
        new Date(item.timestamp).toLocaleString(),
        JSON.stringify(item.data).slice(0, 100) + '...'
      ])
    ]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `pibs-submissions-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const filteredSubmissions = filterType === 'all' 
    ? submissions 
    : submissions.filter(s => s.type === filterType)

  const applicationCount = submissions.filter(s => s.type === 'application').length
  const contactCount = submissions.filter(s => s.type === 'contact').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-primary-foreground/80 text-sm mt-1">
              Pentecostal International Bible Seminary
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Total Submissions</p>
                <p className="text-3xl font-bold text-foreground mt-2">{submissions.length}</p>
              </div>
              <FileText className="w-12 h-12 text-primary/20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Applications</p>
                <p className="text-3xl font-bold text-accent mt-2">{applicationCount}</p>
              </div>
              <FileText className="w-12 h-12 text-accent/20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Contact Messages</p>
                <p className="text-3xl font-bold text-primary mt-2">{contactCount}</p>
              </div>
              <Mail className="w-12 h-12 text-primary/20" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilterType('all')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  filterType === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-100 text-foreground hover:bg-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                All ({submissions.length})
              </button>
              <button
                onClick={() => setFilterType('application')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filterType === 'application'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-gray-100 text-foreground hover:bg-gray-200'
                }`}
              >
                Applications ({applicationCount})
              </button>
              <button
                onClick={() => setFilterType('contact')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filterType === 'contact'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-100 text-foreground hover:bg-gray-200'
                }`}
              >
                Messages ({contactCount})
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-foreground rounded-lg font-medium transition-all"
              >
                Refresh
              </button>
              <button
                onClick={handleDownloadCSV}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 rounded-lg font-medium transition-all"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Submissions List */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-muted-foreground text-lg">No submissions yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions.map((submission, index) => (
              <div
                key={submission.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Summary */}
                <button
                  onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        submission.type === 'application' ? 'bg-accent' : 'bg-primary'
                      }`} />
                      <div>
                        <p className="font-semibold text-foreground capitalize">
                          {submission.type === 'application' 
                            ? `Application from ${submission.data.firstName} ${submission.data.lastName}`
                            : `Message from ${submission.data.senderName}`
                          }
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(submission.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="text-muted-foreground">
                    {expandedId === submission.id ? '▼' : '▶'}
                  </span>
                </button>

                {/* Details */}
                {expandedId === submission.id && (
                  <div className="border-t border-border bg-gray-50 p-6 animate-fade-in">
                    <div className="space-y-4">
                      {Object.entries(submission.data).map(([key, value]) => (
                        <div key={key} className="break-words">
                          <p className="text-sm font-semibold text-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">
                            {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

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
