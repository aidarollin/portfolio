import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'

const DEMO_URL = `${import.meta.env.BASE_URL}askpbot.html`

const META = [
  { k: 'Role',     v: 'UI/UX & front-end, solo build' },
  { k: 'Company',  v: 'Pandai Education' },
  { k: 'Timeline', v: 'Jul – Oct 2026' },
  { k: 'Stack',    v: 'Figma DS + MCP · Next.js 16 · React 19 · TypeScript · Claude API · Cloudflare Workers' },
]

const REQUEST_PATH = ['Composer', 'usePBot', 'POST /api/chat', 'Rate limit', 'Validation', 'Pre-screen', 'runTurn()', 'Claude', 'NDJSON stream']

const OUTCOMES = [
  { n: '88',      l: "commits on Pandai's student-UI rebuild: AskPBot, Battle Royale, Rewards and onboarding" },
  { n: '18 / 19', l: 'model evals passing. The one failure documents a real gateway gap and is left failing on purpose' },
  { n: '17',      l: 'icons shipped, cut from a 424 KB design-system sprite by the sync pipeline' },
  { n: '2',       l: 'shells, web page and docked panel, sharing one state machine, chat screen and stylesheet' },
]

function Step({ n, eyebrow, title, children }: { n: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-14"
    >
      <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-accent/30 bg-accent/10 font-mono text-xs font-bold text-accent">
        {n}
      </span>
      <p className="text-xs font-bold uppercase tracking-widest text-white/35">{eyebrow}</p>
      <h3 className="mt-1.5 text-2xl font-bold leading-snug text-white">{title}</h3>
      <div className="mt-4 space-y-4 leading-relaxed text-white/60">{children}</div>
    </motion.article>
  )
}

function Point({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
      <p className="text-sm font-semibold text-white">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-white/55">{children}</p>
    </li>
  )
}

const Hl = ({ children }: { children: ReactNode }) => <strong className="font-semibold text-white">{children}</strong>
const Code = ({ children }: { children: ReactNode }) => (
  <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-[0.85em] text-accent">{children}</code>
)

/* The real AskPBot UI, in a browser frame. Mounted only when scrolled near,
   so the Rive runtime and art never load for visitors who don't get this far. */
function LiveDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect() } }, { rootMargin: '600px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-2xl shadow-black/60 ring-1 ring-white/5">
        <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </span>
          <span className="mx-auto hidden min-w-0 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-white/45 sm:block">
            askpbot · live UI, scripted replies
          </span>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/60 transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:ml-0"
          >
            Open full screen ↗
          </a>
        </div>
        <div className="relative h-[680px] bg-white sm:h-[720px] lg:h-[780px]">
          {near ? (
            <iframe
              src={DEMO_URL}
              title="AskPBot interactive demo"
              className="absolute inset-0 h-full w-full"
              allow="microphone; clipboard-write"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-sm text-black/40">Loading AskPBot…</div>
          )}
        </div>
      </div>
      <figcaption className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-white/40">
        The real AskPBot UI, running the same components and stylesheet as the app, with the Claude call swapped for scripted
        replies. Try a suggestion, ask <em>what time it is</em> to see the tool phase, then rename or delete the chat in the sidebar.
      </figcaption>
    </motion.figure>
  )
}

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-[#0a0a0a] py-28" aria-labelledby="case-study-heading">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        <div className="reveal mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Case Study · Pandai</span>
          </div>
          <h2 id="case-study-heading" className="font-playfair text-4xl font-normal italic leading-tight tracking-tight text-white sm:text-5xl">
            AskPBot, from design system to streaming AI
          </h2>
          <p className="mt-4 text-lg font-light leading-relaxed text-white/50">
            PBot is the panda mascot of Pandai's student app. His "Ask PBot" panel existed as a design with canned replies.
            I built it from Pandai's Figma design system, then turned it into a real AI study buddy running on Claude.
          </p>
        </div>

        <dl className="reveal mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 lg:grid-cols-4">
          {META.map((m) => (
            <div key={m.k} className="bg-[#0f0f0f] p-5">
              <dt className="text-[11px] font-bold uppercase tracking-widest text-white/35">{m.k}</dt>
              <dd className="mt-1.5 text-sm font-medium text-white/85">{m.v}</dd>
            </div>
          ))}
        </dl>

        <LiveDemo />

        <div className="mx-auto max-w-3xl space-y-20">
          <Step n="01" eyebrow="Product Strategy" title="The design existed. The product didn't.">
            <p>
              In Pandai's student UI, Ask PBot's reply was a <Code>setTimeout</Code> returning canned text, and its chat history
              was a hard-coded array. The goal: keep the <Hl>same panel, interaction model and visual language</Hl>, and put a real
              language model behind <Code>send()</Code> and real persistence behind the history.
            </p>
            <ul className="grid gap-3 sm:grid-cols-3" role="list">
              <Point label="For students">A fast, warm, honest answer, with past conversations one click away.</Point>
              <Point label="For host-app developers">Mount one component, fire one <Code>pbot-open</Code> event, touch nothing else.</Point>
              <Point label="Deliberately not">A retrieval bot. No vector store: the edge is the persona and the engineering around it.</Point>
            </ul>
          </Step>

          <Step n="02" eyebrow="UI/UX Execution" title="Built from the design system, frame by frame">
            <ul className="space-y-3" role="list">
              <Point label="Figma → code through MCP">
                At Pandai I rebuild the student app on Laravel, Livewire, Alpine and Tailwind CSS v4 straight from Pandai Design
                System 1.5, reading frames, components and variables through Figma's MCP server. AskPBot's panel, web view and Math
                Drill scene were each rebuilt from specific design-system frames.
              </Point>
              <Point label="Every state covered">
                The idle hero with an animated Rive PBot and a typed-in question; streaming with a phase label (thinking, checking the
                time, writing); in-band errors; empty history; voice notes with a live waveform; an image viewer; and an in-row
                Back / Rename / Delete menu.
              </Point>
              <Point label="Two shells, one feature">
                A two-pane web page and a docked slide-in panel that share the state machine, chat screen, history and CSS, the same
                split the Pandai source makes with its partials.
              </Point>
            </ul>
          </Step>

          <Step n="03" eyebrow="Front-End & Tech Stack" title="Design synced, not redrawn">
            <p>
              Rather than re-typing the CSS, I wrote a <Hl>design-sync pipeline</Hl>. A collector drives the running Pandai app
              through every shipped state and records the classes the DOM actually renders. <Code>npm run design:sync</Code> keeps
              only the source rules those classes use, plus their tokens and keyframes, and copies the art, a cut-down icon sprite
              and the Rive file. The React components emit the source markup class for class, so the design system's styles apply
              unchanged.
            </p>

            <div className="rounded-xl border border-white/8 bg-[#0f0f0f] p-4">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/35">Request path</p>
              <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-xs" role="list">
                {REQUEST_PATH.map((s, i) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className={`rounded-md border px-2 py-1 ${i === 6 ? 'border-accent/40 bg-accent/10 text-accent' : 'border-white/10 text-white/70'}`}>{s}</span>
                    {i < REQUEST_PATH.length - 1 && <span className="text-white/25" aria-hidden="true">→</span>}
                  </li>
                ))}
              </ol>
            </div>

            <ul className="space-y-3" role="list">
              <Point label="State & streaming">
                One <Code>usePBot</Code> state machine serves both shells. Replies stream as typed NDJSON events from the official
                Anthropic SDK, with adaptive thinking and a <Code>get_current_time</Code> tool. History is a localStorage external
                store read through <Code>useSyncExternalStore</Code>, so the sidebar updates mid-chat and across tabs.
              </Point>
              <Point label="Safety by construction">
                Markdown renders as React elements, never HTML: the source's regex renderer let a <Code>"</Code> break out of an{' '}
                <Code>href</Code>. Layered guardrails, a narrow content pre-screen, an output leak check and per-IP rate limiting
                sit in front of the model.
              </Point>
              <Point label="Deploy target">
                Next.js 16 on Cloudflare Workers via OpenNext, verified locally on the <Code>workerd</Code> runtime with streaming.
              </Point>
            </ul>
          </Step>

          <Step n="04" eyebrow="Impact" title="Outcomes">
            <ul className="grid gap-3 sm:grid-cols-2" role="list">
              {OUTCOMES.map((s) => (
                <li key={s.l} className="rounded-xl border border-accent/15 bg-accent/[0.04] p-5">
                  <p className="text-3xl font-black text-accent">{s.n}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{s.l}</p>
                </li>
              ))}
            </ul>
          </Step>
        </div>

      </div>
    </section>
  )
}
