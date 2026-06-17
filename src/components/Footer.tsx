const NAV_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#work'       },
  { label: 'Design',     href: '#design'     },
]

const EMAIL_ICON = (
  <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884Z"/>
    <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118Z"/>
  </svg>
)

const PHONE_ICON = (
  <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd"/>
  </svg>
)

const LI_ICON = (
  <svg className="w-4 h-4 shrink-0 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white/50" aria-labelledby="footer-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 mb-4 focus-visible:outline-none"
              aria-label="Back to top"
            >
              <svg width="22" height="22" viewBox="0 0 256 256" fill="none" aria-hidden="true">
                <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="#ffffff" />
              </svg>
              <span className="text-white text-xl font-playfair italic">Aida</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              UI/UX Designer &amp; Computer Science student, passionate about
              building experiences that are both beautiful and accessible.
            </p>
            <a
              href="https://linkedin.com/in/aidasofiah/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] px-5 py-2.5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Connect on LinkedIn"
            >
              {LI_ICON}
              Connect on LinkedIn
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h2 id="footer-heading" className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5">Navigate</h2>
            <ul className="space-y-3 text-sm" role="list">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors duration-200">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5">Contact</h2>
            <ul className="space-y-3 text-sm" role="list">
              <li>
                <a href="mailto:aidaasofiah@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200 break-all">
                  {EMAIL_ICON}
                  aidaasofiah@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                {PHONE_ICON}
                011-2357 9237
              </li>
              <li>
                <a href="https://linkedin.com/in/aidasofiah/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
                  {LI_ICON}
                  linkedin.com/in/aidasofiah
                </a>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5">Availability</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" aria-hidden="true" />
              <span className="text-sm text-emerald-400 font-semibold">Open to opportunities</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Based in Kuala Lumpur, Malaysia.<br />
              Graduating <span className="text-white/70 font-medium">July 2026</span>.
            </p>
          </div>

        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© 2026 Aida Sofiah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
