const ARROW = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
  </svg>
)

const PROJECTS = [
  {
    num: '01',
    title: 'Local Cafe Website',
    desc: 'Designed and developed a responsive web application for a local cafe using VS Code and Claude Code. Managed version control with GitHub, implemented Firebase for the backend, and deployed via Cloudflare.',
    tags: ['HTML/CSS', 'JavaScript', 'Firebase', 'Cloudflare', 'Claude Code'],
    href: 'https://molieskafe.aidaasofiah.workers.dev/',
    gradient: 'from-accent via-orange-400 to-amber-400',
  },
  {
    num: '02',
    title: 'Car Rental Website',
    desc: 'Bridged design and development by prototyping in Figma first, then building the front-end with HTML, CSS, and JavaScript. Integrated a MySQL database for booking and vehicle management.',
    tags: ['Figma', 'HTML/CSS', 'JavaScript', 'MySQL'],
    href: null,
    gradient: 'from-orange-500 via-amber-400 to-yellow-400',
  },
  {
    num: '03',
    title: 'Photobooth',
    desc: 'Developed a functional web-based photobooth application using Python in VS Code. Hosted and version-controlled directly via GitHub.',
    tags: ['Python', 'GitHub Pages', 'VS Code'],
    href: 'https://aidarollin.github.io/photobooth-web-app/',
    gradient: 'from-amber-500 via-orange-400 to-accent',
  },
  {
    num: '04',
    title: 'Business Intelligence System',
    desc: 'Designed an ETL pipeline to extract, transform, and load data, then built an interactive dashboard to monitor and visualise key business performance metrics.',
    tags: ['ETL Pipeline', 'SQL', 'Dashboard', 'Data Viz'],
    href: null,
    gradient: 'from-accent via-orange-500 to-amber-500',
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-28 bg-[#0d0d0d]" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent">Projects</span>
          </div>
          <h2 id="projects-heading" className="font-playfair italic font-normal text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Technical Projects
          </h2>
          <p className="mt-3 text-white/45 text-lg font-light">Designed and built from the ground up.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <article
              key={p.num}
              className="reveal group relative flex flex-col bg-[#1a1a1a] rounded-2xl border border-[#272727] overflow-hidden hover:border-accent/25 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={`h-[3px] bg-gradient-to-r ${p.gradient} shrink-0`} />

              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-6xl font-black text-white/6 leading-none select-none" aria-hidden="true">{p.num}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {p.tags.map((t) => <span key={t} className="skill-pill">{t}</span>)}
                </div>

                <div className="mt-auto">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-accent hover:bg-[#d2611f] text-white text-sm font-semibold py-2.5 px-5 rounded-full shadow-sm shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]"
                    >
                      View Live Project
                      {ARROW}
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2 w-full bg-white/5 text-white/30 text-sm font-semibold py-2.5 px-5 rounded-full border border-white/8 cursor-not-allowed select-none">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
