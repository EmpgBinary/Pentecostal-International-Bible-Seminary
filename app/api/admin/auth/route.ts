import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Simple hardcoded credentials for demo - in production use proper authentication
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'pibs2024secure',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password, action } = body

    // Logout
    if (action === 'logout') {
      const cookieStore = await cookies()
      cookieStore.delete('admin_token')
      return NextResponse.json({ success: true, message: 'Logged out successfully' })
    }

    // Login
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const cookieStore = await cookies()
      // Create a simple token (in production use JWT)
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64')
      cookieStore.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hours
      })

      return NextResponse.json({
        success: true,
        message: 'Login successful',
        token,
      })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value

    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      )
    }

    return NextResponse.json({ authenticated: true }, { status: 200 })
  } catch (error) {
    console.error('Token check error:', error)
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    )
  }
}
