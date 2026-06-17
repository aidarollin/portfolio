const FRAMES = [
  {
    title: 'Klynn Project',
    badge: 'Prototype',
    badgeClass: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0oRHFLorp8OkZMchWYv9k5%2FKlynn-Project%3Fnode-id%3D782-20749%26p%3Df%26viewport%3D498%252C382%252C0.09%26t%3Db5EHskc39BmQkzqJ-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26starting-point-node-id%3D782%253A20749%26page-id%3D415%253A21121',
  },
  {
    title: 'Pandai — User Flow',
    badge: 'Wireframes',
    badgeClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FTVrvylo8OHzaJ73PKlNuqc%2FPandai-Teacher---Class-Insight--Copy-%3Fnode-id%3D4004-785%26t%3DMdLOOeMwWayfSyYf-1',
  },
  {
    title: 'Car Rental — Original Wireframe',
    badge: 'Wireframe',
    badgeClass: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F6EE977WnKvXHjUaNQVdtfR%2FWEB-BASED-ASSIGNMENT-WIREFRAMES%3Fnode-id%3D2300-102%26t%3DeoW7Yuw8IMaNhTCs-1',
  },
  {
    title: 'Car Rental — Improved Version',
    badge: 'W.I.P.',
    badgeClass: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FwE6LCnt89hEMJGtcL1A0mI%2FLoop-%25E2%2580%2593-Car-Rental-WebApp%3Fnode-id%3D35-7674%26t%3D3VYDwtSLADkj1HZc-1',
  },
]

export default function Design() {
  return (
    <section id="design" className="py-28 bg-[#0a0a0a]" aria-labelledby="design-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent">Design</span>
          </div>
          <h2 id="design-heading" className="font-playfair italic font-normal text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Design Portfolio
          </h2>
          <p className="mt-3 text-white/45 text-lg font-light">Figma prototypes and wireframes — explore the work directly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FRAMES.map((f, i) => (
            <div
              key={f.title}
              className="reveal bg-[#111111] rounded-2xl border border-[#272727] overflow-hidden hover:border-accent/20 hover:shadow-xl hover:shadow-black/50 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative bg-[#0d0d0d]" style={{ paddingBottom: '62.5%' }}>
                <iframe
                  src={f.src}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                  title={f.title}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white font-bold text-base leading-snug">{f.title}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full shrink-0 ${f.badgeClass}`}>
                    {f.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
