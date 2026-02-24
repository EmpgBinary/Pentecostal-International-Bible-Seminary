// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { label: 'Home', href: '/' },
//     { label: 'About Us', href: '/about' },
//     { label: 'Academics', href: '/academics' },
//     { label: 'Admissions', href: '/admissions' },
//     { label: 'Contact', href: '/contact' },
//   ]

//   return (
//     <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">PIBS</span>
//               </div>
//               <div className="hidden sm:block">
//                 <h1 className="text-sm font-bold text-primary">Pentecostal International</h1>
//                 <p className="text-xs text-muted-foreground">Bible Seminary</p>
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link
//               href="/admin/login"
//               className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
//             >
//               Admin
//             </Link>
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
//           >
//             {isOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <nav className="md:hidden pb-4 space-y-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              
              {/* Logo Image */}
              <Image
                src="/logo.jpeg"
                alt="PIBS Logo"
                width={50}
                height={50}
                className="object-contain"
                priority
              />

              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-primary">
                  Pentecostal International
                </h1>
                <p className="text-xs text-muted-foreground">
                  Bible Seminary
                </p>
              </div>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}