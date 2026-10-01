import { useEffect, useRef } from 'react'
import MagneticButton from './MagneticButton'

const BG_IMAGE_1 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85'
const BG_IMAGE_2 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85'

const SKILLS = ['Figma Variables', 'Design Systems', 'Figma MCP', 'React', 'TypeScript', 'Tailwind CSS']

const HEADLINE = (
  <>
    I design it in Figma.<br />
    <span className="font-playfair italic text-accent">Then I ship it in code.</span>
  </>
)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const revealRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const reveal  = revealRef.current
    if (!section || !reveal) return

    const mouse  = { x: -999, y: -999 }
    const smooth = { x: -999, y: -999 }
    let rafId = 0

    // Lerp toward the cursor; stop the loop once settled instead of running every frame forever
    const tick = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1
      smooth.y += (mouse.y - smooth.y) * 0.1
      reveal.style.setProperty('--mx', `${smooth.x}px`)
      reveal.style.setProperty('--my', `${smooth.y}px`)
      rafId = Math.abs(mouse.x - smooth.x) + Math.abs(mouse.y - smooth.y) > 0.5 ? requestAnimationFrame(tick) : 0
    }

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      if (smooth.x === -999) { smooth.x = mouse.x; smooth.y = mouse.y }
      if (!rafId) rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100dvh' }}
    >
      {/* Base image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat hero-zoom"
        style={{ backgroundImage: `url(${BG_IMAGE_1})`, zIndex: 10 }}
      />

      {/* Reveal layer — second image, masked by the cursor spotlight */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none hero-spotlight"
        style={{ backgroundImage: `url(${BG_IMAGE_2})`, zIndex: 30 }}
      />

      {/* Vignette for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 40,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      {/* Heading — top 14% */}
      <div
        className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none"
        style={{ zIndex: 50 }}
      >
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
          >
            Aida Sofiah
          </span>
          <span
            className="block font-normal text-4xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
            style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
          >
            Binti Ahmad Fikri
          </span>
        </h1>
        <p
          className="mt-5 text-[11px] sm:text-xs text-white/60 tracking-[0.2em] uppercase font-medium hero-anim hero-fade"
          style={{ animationDelay: '0.58s' }}
        >
          UI/UX Designer · Front-End Developer<span className="hidden sm:inline"> · CS Class of 2026</span>
        </p>
      </div>

      {/* Bottom-left — headline + skill pills */}
      <div
        className="hidden lg:block absolute bottom-14 left-14 max-w-sm hero-anim hero-fade"
        style={{ zIndex: 50, animationDelay: '0.7s' }}
      >
        <p className="text-3xl md:text-4xl font-semibold text-white leading-[1.05] tracking-tight">{HEADLINE}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Core skills">
          {SKILLS.map((s) => (
            <li
              key={s}
              className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/75 border border-white/15 backdrop-blur-sm"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom-right — value proposition + CTAs */}
      <div
        className="absolute bottom-10 sm:bottom-14 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-sm flex flex-col items-start gap-4 sm:gap-5 hero-anim hero-fade"
        style={{ zIndex: 50, animationDelay: '0.85s' }}
      >
        <p className="lg:hidden text-2xl sm:text-3xl font-semibold text-white leading-[1.1] tracking-tight">{HEADLINE}</p>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          I'm a UI/UX designer who builds what I draw, from Figma design systems to typed React components.
          At Pandai I rebuild the student app straight from its Figma design system via MCP, and turned the
          AskPBot panel into a real, streaming AI study buddy on Claude.
        </p>

        <div className="flex flex-wrap gap-3">
          <MagneticButton
            href="#case-study"
            className="bg-accent hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-colors hover:shadow-lg hover:shadow-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Try the AskPBot Prototype
          </MagneticButton>
          <a
            href="mailto:aidaasofiah@gmail.com"
            className="border border-white/30 text-white/90 text-sm font-medium px-6 py-3 rounded-full transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
