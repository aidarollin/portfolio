import { useState, type ReactNode } from 'react'
import { motion } from 'motion/react'

const img = (name: string) => `${import.meta.env.BASE_URL}reskin/${name}`

const STATS = [
  { n: '126', l: 'hard-coded colours in the legacy iOS app, which the DS 1.5 semantic tokens replace' },
  { n: '242', l: 'raw hex literals across the legacy iOS source, mapped to tokens instead' },
  { n: '3 × 2', l: 'products (Student, Teacher, Parent) × light and dark, from one token set' },
]

const WEB_CHANGES = [
  'Brand green moves from a soft gradient to the DS 1.5 primary token, with a patterned brand field behind the card',
  'Inputs and social buttons become pill-shaped; required fields are marked',
  'The flat primary button becomes the DS 3D push-button, with a chevron disc and press motion',
  'The illustrated panel is animated in Rive, with a typewriter subtitle',
]

const IOS_PAIRS = [
  {
    title: 'Home header → PDSHeaderCard',
    before: { src: 'ios-home-before.webp', w: 765, h: 264 },
    after: { src: 'ios-header-after.webp', w: 740, h: 300 },
    note: 'A plain greeting on white becomes a branded header card with the notification count and an avatar ring, in one component that themes per product and per mode.',
  },
  {
    title: 'Stat pills → PDSPillBadge family',
    before: { src: 'ios-pills-before.webp', w: 765, h: 122 },
    after: { src: 'ios-pills-after.webp', w: 768, h: 1004 },
    note: 'One-off coloured pills become a badge family: seven semantic variants in three sizes, each with a matching border, snapshot-tested in light, dark and Teacher/Parent themes.',
  },
]

/* Drag (or arrow-key) to wipe between the two screenshots. A native range input
   sits over the image, so touch, mouse and keyboard all work and it's announced. */
function CompareSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative aspect-[16/10] select-none overflow-hidden rounded-xl bg-[#f7f7f7]">
      <img src={img(after)} alt={`After: ${alt}, Pandai Design System 1.5`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" draggable={false} />
      <img
        src={img(before)}
        alt={`Before: ${alt}, legacy design system`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        loading="lazy"
        draggable={false}
      />

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">Before · DS 1.0</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">After · DS 1.5</span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-sm font-bold text-gray-800 shadow-lg ring-1 ring-black/10">
          ⇆
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before and after"
        aria-valuetext={`${Math.round(pos)}% before`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}

function Shot({ label, tone, src, w, h, alt }: { label: string; tone: 'before' | 'after'; src: string; w: number; h: number; alt: string }) {
  return (
    <figure className="flex flex-col">
      <figcaption className={`mb-2 text-[11px] font-semibold uppercase tracking-wider ${tone === 'after' ? 'text-accent' : 'text-white/40'}`}>{label}</figcaption>
      <div className="grid flex-1 place-items-center rounded-xl bg-white p-3 sm:p-4">
        <img src={img(src)} width={w} height={h} alt={alt} loading="lazy" className="max-h-[340px] w-auto max-w-full object-contain" />
      </div>
    </figure>
  )
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Reskin() {
  const [tab, setTab] = useState<'web' | 'ios'>('web')

  return (
    <section id="reskin" className="bg-[#0d0d0d] py-28" aria-labelledby="reskin-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        <div className="reveal mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Reskin · Pandai</span>
          </div>
          <h2 id="reskin-heading" className="font-playfair text-4xl font-normal italic leading-tight tracking-tight text-white sm:text-5xl">
            Design System 1.0 → 1.5
          </h2>
          <p className="mt-4 text-lg font-light leading-relaxed text-white/50">
            Pandai is moving its student web app and its iOS app from the legacy design system to Pandai Design System 1.5.
            On web I rebuild screens straight from the DS in Figma; on iOS I add DS 1.5 components to the shared UIKit library
            the production app adopts module by module.
          </p>
        </div>

        <ul className="reveal mb-12 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-3" role="list">
          {STATS.map((s) => (
            <li key={s.n} className="bg-[#111] p-5">
              <p className="text-2xl font-black text-accent">{s.n}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/50">{s.l}</p>
            </li>
          ))}
        </ul>

        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1" role="tablist" aria-label="Platform">
          {(['web', 'ios'] as const).map((t) => (
            <button
              key={t}
              role="tab"
              id={`reskin-tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`reskin-panel-${t}`}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${tab === t ? 'text-gray-900' : 'text-white/60 hover:text-white'}`}
            >
              {tab === t && (
                <motion.span layoutId="reskin-tab" className="absolute inset-0 rounded-full bg-white" transition={{ type: 'spring', stiffness: 400, damping: 32 }} aria-hidden="true" />
              )}
              <span className="relative">{t === 'web' ? 'Web' : 'iOS'}</span>
            </button>
          ))}
        </div>

        {tab === 'web' ? (
          <div role="tabpanel" id="reskin-panel-web" aria-labelledby="reskin-tab-web">
            <Panel>
              <div className="rounded-2xl border border-white/10 bg-[#141414] p-3 sm:p-4">
                <CompareSlider before="web-signin-before.webp" after="web-signin-after.webp" alt="Pandai student sign-in page" />
              </div>
              <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <h3 className="text-xl font-bold text-white">Sign in, rebuilt from the DS</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    Drag to compare the live production page with the DS 1.5 rebuild. Built on Laravel, Livewire, Alpine.js and
                    Tailwind CSS v4, from design-system frames and variables read through Figma's MCP server.
                  </p>
                </div>
                <ul className="space-y-2.5" role="list">
                  {WEB_CHANGES.map((c) => (
                    <li key={c} className="flex gap-3 text-sm leading-relaxed text-white/65">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          </div>
        ) : (
          <div role="tabpanel" id="reskin-panel-ios" aria-labelledby="reskin-tab-ios">
            <Panel>
              <div className="space-y-6">
                {IOS_PAIRS.map((p) => (
                  <article key={p.title} className="rounded-2xl border border-white/10 bg-[#141414] p-4 sm:p-6">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-1 max-w-3xl text-sm leading-relaxed text-white/50">{p.note}</p>
                    <div className="mt-5 grid items-stretch gap-4 md:grid-cols-2">
                      <Shot label="Before · DS 1.0 (shipping app)" tone="before" {...p.before} alt={`Before: ${p.title.split(' → ')[0]} in the shipping Pandai iOS app`} />
                      <Shot label="After · DS 1.5 component" tone="after" {...p.after} alt={`After: ${p.title.split(' → ')[1]} from the DS 1.5 iOS library`} />
                    </div>
                  </article>
                ))}
                <p className="text-xs leading-relaxed text-white/35">
                  Before: App Store screenshots of the shipping Pandai iOS app (v1.64). After: snapshot-test images from the DS 1.5
                  iOS library (Student theme, light), the same images CI checks every change against.
                </p>
              </div>
            </Panel>
          </div>
        )}

      </div>
    </section>
  )
}
