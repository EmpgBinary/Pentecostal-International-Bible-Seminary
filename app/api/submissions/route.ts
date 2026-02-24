import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

const DATA_DIR = join(process.cwd(), 'data')
const SUBMISSIONS_FILE = join(DATA_DIR, 'submissions.json')

interface Submission {
  id: string
  type: 'application' | 'contact'
  timestamp: string
  data: Record<string, unknown>
}

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
}

function getSubmissions(): Submission[] {
  ensureDataDir()
  try {
    if (existsSync(SUBMISSIONS_FILE)) {
      const data = readFileSync(SUBMISSIONS_FILE, 'utf-8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error reading submissions:', error)
  }
  return []
}

function saveSubmissions(submissions: Submission[]) {
  ensureDataDir()
  try {
    writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2))
  } catch (error) {
    console.error('Error saving submissions:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, data } = body

    const submission: Submission = {
      id: `${type}-${Date.now()}`,
      type: type as 'application' | 'contact',
      timestamp: new Date().toISOString(),
      data,
    }

    const submissions = getSubmissions()
    submissions.push(submission)
    saveSubmissions(submissions)

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save submission' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type')

    let submissions = getSubmissions()

    if (type) {
      submissions = submissions.filter((s) => s.type === type)
    }

    return NextResponse.json(submissions)
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}
