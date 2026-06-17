import type { ReactNode } from 'react'

const FIGMA_ICON = (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 38 57" aria-hidden="true">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" fill="#1ABCFE"/>
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="#0ACF83"/>
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="#FF7262"/>
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF"/>
  </svg>
)

const EXTERNAL_ICON = (
  <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd"/>
    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd"/>
  </svg>
)

const CAL_ICON = (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/>
  </svg>
)

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="mt-[7px] w-2 h-2 rounded-sm bg-accent shrink-0" aria-hidden="true" />
      <span className="text-white/65 leading-relaxed">{children}</span>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#111111]" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="mb-16 reveal" style={{ transitionDelay: '0s' }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent">Experience</span>
          </div>
          <h2 id="experience-heading" className="font-playfair italic font-normal text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-white/45 text-lg font-light">Where design meets real-world impact.</p>
        </div>

        {/* Pandai */}
        <article
          className="reveal bg-[#1a1a1a] rounded-2xl border border-[#272727] p-8 sm:p-10 mb-6 hover:border-[#e8702a]/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
          style={{ transitionDelay: '0.08s' }}
          aria-label="Pandai Education internship"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wide uppercase bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full">EdTech</span>
                <span className="text-[11px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">Internship</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">UI/UX Design Intern</h3>
              <p className="mt-1 text-lg font-semibold text-accent">Pandai Education Sdn. Bhd.</p>
            </div>
            <div className="shrink-0 text-right">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-sm font-semibold px-4 py-2.5 rounded-full">
                {CAL_ICON}
                Mar — Sep 2025
              </div>
              <p className="mt-1.5 text-xs text-white/40 font-medium">7 months · Kuala Lumpur</p>
            </div>
          </div>

          <div className="border-t border-white/8 mb-7" />

          <ul className="space-y-4 mb-8" role="list">
            <Bullet>Assisted in designing mobile and web interfaces using Figma for an EdTech platform serving over <strong className="text-white font-semibold">1 million students</strong>.</Bullet>
            <Bullet>Revamped key user flows including <strong className="text-white font-semibold">quiz-taking</strong>, <strong className="text-white font-semibold">progress tracking</strong>, and <strong className="text-white font-semibold">onboarding experiences</strong>.</Bullet>
            <Bullet>Created wireframes, prototypes, and <strong className="text-white font-semibold">high-fidelity UI mockups</strong> across multiple product surfaces.</Bullet>
            <Bullet>Contributed to maintaining and expanding Pandai's <strong className="text-white font-semibold">design system</strong> — colour tokens, typography, and reusable components.</Bullet>
            <Bullet>Supported UX research through <strong className="text-white font-semibold">user interviews</strong> and <strong className="text-white font-semibold">competitor analysis</strong> to inform design decisions.</Bullet>
          </ul>

          <div className="flex flex-wrap items-center gap-6 p-5 bg-accent/5 rounded-xl border border-accent/10 mb-8">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-accent">1M+</span>
              <span className="text-sm text-white/45 font-medium">students reached</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" aria-hidden="true" />
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-accent">3+</span>
              <span className="text-sm text-white/45 font-medium">core flows redesigned</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2 sm:ml-auto">
              {FIGMA_ICON}
              <span className="text-xs text-white/45 font-medium">Primary tool: Figma</span>
            </div>
          </div>

          <a
            href="https://www.figma.com/design/TVrvylo8OHzaJ73PKlNuqc/Pandai-Teacher---Class-Insight--Copy-?node-id=4004-785&t=MdLOOeMwWayfSyYf-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-[#d2611f] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
          >
            {FIGMA_ICON}
            View Pandai User Flow Wireframe
            {EXTERNAL_ICON}
          </a>
        </article>

        {/* Klynn */}
        <article
          className="reveal bg-[#1a1a1a] rounded-2xl border border-[#272727] p-8 sm:p-10 hover:border-[#e8702a]/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
          style={{ transitionDelay: '0.18s' }}
          aria-label="Klynn Global freelance"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-wide uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full">Freelance</span>
                <span className="text-[11px] font-bold tracking-wide uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full">Remote</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">Freelance UI Designer</h3>
              <p className="mt-1 text-lg font-semibold text-accent">Klynn Global</p>
            </div>
            <div className="shrink-0 text-right">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-sm font-semibold px-4 py-2.5 rounded-full">
                {CAL_ICON}
                Apr — Jun 2025
              </div>
              <p className="mt-1.5 text-xs text-white/40 font-medium">3 months · KL, Remote</p>
            </div>
          </div>

          <div className="border-t border-white/8 mb-7" />

          <ul className="space-y-4 mb-8" role="list">
            <Bullet>Designed high-fidelity mobile screens using Figma, focusing on <strong className="text-white font-semibold">layout</strong>, <strong className="text-white font-semibold">typography</strong>, and <strong className="text-white font-semibold">visual hierarchy</strong>.</Bullet>
            <Bullet>Developed UI components tailored for <strong className="text-white font-semibold">iOS and Android</strong> platforms with responsiveness and scalability in mind.</Bullet>
            <Bullet>Collaborated with clients to translate ideas and wireframes into clean, <strong className="text-white font-semibold">production-ready visuals</strong>.</Bullet>
            <Bullet>Ensured consistency in <strong className="text-white font-semibold">colour, spacing, and branding</strong> across all screens and user flows.</Bullet>
            <Bullet>Delivered structured design assets and specs, supporting smooth <strong className="text-white font-semibold">developer handoffs</strong> and accurate implementation.</Bullet>
          </ul>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-xs text-white/40 self-center font-medium mr-1">Platforms</span>
            <span className="skill-pill">iOS</span>
            <span className="skill-pill">Android</span>
            <span className="skill-pill">Figma</span>
            <span className="skill-pill">Design Handoff</span>
          </div>

          <a
            href="https://www.figma.com/design/0oRHFLorp8OkZMchWYv9k5/Klynn-Project?node-id=2-17313&t=67cWsJ4OuTSWsast-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-[#d2611f] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
          >
            {FIGMA_ICON}
            View Klynn Wireframe &amp; Prototype
            {EXTERNAL_ICON}
          </a>
        </article>

      </div>
    </section>
  )
}
