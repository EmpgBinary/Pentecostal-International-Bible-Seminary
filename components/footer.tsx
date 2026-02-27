import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">PIBS</span>
              </div>
              <h3 className="font-bold">PIBS</h3>
            </div>
            <p className="text-sm opacity-90">
              Pentecostal International Bible Seminary - Preparing spiritual leaders for global ministry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-75 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-75 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:opacity-75 transition-opacity">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:opacity-75 transition-opacity">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>10/12 lateef salami street</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>08033024655</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@pibs.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm opacity-90 mb-3">Subscribe for updates and events</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-primary-foreground text-primary rounded text-sm placeholder-muted-foreground"
              />
              <button className="px-3 py-2 bg-accent text-accent-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <p className="text-center text-sm opacity-75">
            &copy; {currentYear} Pentecostal International Bible Seminary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
