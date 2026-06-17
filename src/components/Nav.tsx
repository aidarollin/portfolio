import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Experience', href: '#experience', section: 'experience' },
  { label: 'Projects',   href: '#work',       section: 'work'       },
  { label: 'Design',     href: '#design',     section: 'design'     },
  { label: 'Contact',    href: '#contact',    section: 'contact'    },
]

export default function Nav() {
  const [open,    setOpen]    = useState(false)
  const [active,  setActive]  = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/5' : ''
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top">
          <svg width="26" height="26" viewBox="0 0 256 256" fill="none" aria-hidden="true">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="#ffffff" />
          </svg>
          <span className="text-white text-2xl font-playfair italic">Aida</span>
        </a>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-2 py-2 items-center gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === item.section
                  ? 'bg-white text-gray-900'
                  : 'text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:aidaasofiah@gmail.com"
            className="hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
          <button
            className="md:hidden text-white p-1 focus-visible:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[90] bg-black/96 backdrop-blur-md flex flex-col pt-24 px-8">
          <nav aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white text-3xl font-medium py-4 border-b border-white/10 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <a href="mailto:aidaasofiah@gmail.com" className="text-white/60 text-sm">aidaasofiah@gmail.com</a>
            <a href="https://linkedin.com/in/aidasofiah/" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm">linkedin.com/in/aidasofiah</a>
          </div>
          <a
            href="mailto:aidaasofiah@gmail.com"
            className="mt-8 bg-accent text-white text-sm font-medium px-7 py-3.5 rounded-full text-center hover:bg-[#d2611f] transition-colors"
            onClick={() => setOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      )}
    </>
  )
}
