import { useEffect, useRef } from 'react'

const BG_IMAGE_1 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85'
const BG_IMAGE_2 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85'

const SPOTLIGHT_R = 260

const SKILLS = ['Figma', 'User Research', 'Prototyping', 'HTML & CSS', 'JavaScript', 'Accessibility']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const reveal = revealRef.current
    if (!canvas || !reveal) return

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const mouse  = { x: -999, y: -999 }
    const smooth = { x: -999, y: -999 }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    let rafId: number

    const tick = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1
      smooth.y += (mouse.y - smooth.y) * 0.1

      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const g = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, SPOTLIGHT_R)
        g.addColorStop(0,    'rgba(255,255,255,1)')
        g.addColorStop(0.4,  'rgba(255,255,255,1)')
        g.addColorStop(0.6,  'rgba(255,255,255,0.75)')
        g.addColorStop(0.75, 'rgba(255,255,255,0.4)')
        g.addColorStop(0.88, 'rgba(255,255,255,0.12)')
        g.addColorStop(1,    'rgba(255,255,255,0)')

        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(smooth.x, smooth.y, SPOTLIGHT_R, 0, Math.PI * 2)
        ctx.fill()

        const url = canvas.toDataURL()
        const s = reveal.style as CSSStyleDeclaration & Record<string, string>
        s.maskImage        = `url(${url})`
        s.webkitMaskImage  = `url(${url})`
        s.maskSize         = '100% 100%'
        s.webkitMaskSize   = '100% 100%'
      }

      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100dvh' }}
    >
      {/* Base image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat hero-zoom"
        style={{ backgroundImage: `url(${BG_IMAGE_1})`, zIndex: 10 }}
      />

      {/* Canvas — hidden, used to draw the spotlight mask */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: 'none', zIndex: 20 }}
      />

      {/* Reveal layer — second image, masked by canvas spotlight */}
      <div
        ref={revealRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${BG_IMAGE_2})`, zIndex: 30 }}
      />

      {/* Vignette for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 40,
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%, rgba(0,0,0,0.2) 100%)',
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
          UI/UX Designer · CS Student · Graduating July 2026
        </p>
      </div>

      {/* Bottom-left — description + skill pills */}
      <div
        className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] hero-anim hero-fade"
        style={{ zIndex: 50, animationDelay: '0.7s' }}
      >
        <p className="text-sm text-white/80 leading-relaxed">
          I bring a unique blend of core design theory and technical development skills —
          bridging the gap between design and development.
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/15"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom-right — tagline + CTAs */}
      <div
        className="absolute bottom-10 sm:bottom-14 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] flex flex-col items-start gap-4 sm:gap-5 hero-anim hero-fade"
        style={{ zIndex: 50, animationDelay: '0.85s' }}
      >
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          Our interactive portfolio lets you explore the design thinking and technical craft
          behind every project, from wireframes to working code.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="bg-accent hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-accent/30"
          >
            View My Work
          </a>
          <a
            href="mailto:aidaasofiah@gmail.com"
            className="border border-white/30 text-white/90 text-sm font-medium px-6 py-3 rounded-full transition-all hover:bg-white/10 hover:scale-[1.03] active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
