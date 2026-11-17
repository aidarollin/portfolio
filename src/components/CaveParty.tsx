const APP_URL = 'https://caveparty-7e27e.web.app/'
// ?demo keeps everything in the visitor's own browser, so the portfolio never touches the live party database.
const PLAYER_URL = `${APP_URL}?demo`

const STEPS = [
  { t: 'Pick a name and avatar', d: 'Choose one of twelve meme doodles or upload your own photo. The device remembers you next time.' },
  { t: 'Start a party', d: 'The device you start on becomes the player, so use a laptop, tablet or TV. It plays the music from YouTube.' },
  { t: 'Invite your friends', d: 'Share the link, the QR code, or the five-letter party code. Guests open it on their own phones.' },
  { t: 'Add songs', d: 'Search by title, artist or lyrics, or paste a YouTube link. Every song shows who queued it.' },
  { t: 'Run the queue together', d: 'Drag to reorder, play next, shuffle, skip, pause or remove. Anyone in the party can do it, in real time.' },
]

const TAGS = ['JavaScript', 'Firebase Realtime DB', 'YouTube Data API', 'PWA', 'Theming']

export default function CaveParty() {
  return (
    <section id="caveparty" className="py-28 bg-[#0a0a0a]" aria-labelledby="caveparty-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="mb-14 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent">Featured Project</span>
          </div>
          <h2 id="caveparty-heading" className="font-playfair italic font-normal text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Cave Party
          </h2>
          <p className="mt-3 text-white/45 text-lg font-light">Share the aux.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Purpose + how to use */}
          <div className="lg:col-span-2 reveal">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-3">Purpose</h3>
            <p className="text-white/65 leading-relaxed mb-4">
              At most parties one person owns the speaker and everyone else begs them to play a song. Cave Party
              fixes that. It is a shared song queue: one device plays the music, and everyone else adds songs from
              their own phone with no app to install and no account to create.
            </p>
            <p className="text-white/65 leading-relaxed mb-8">
              I built it end to end: the interface, the real-time sync, the search and the theming. The room even
              takes its colours from the artwork of the song that is playing.
            </p>

            <h3 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-4">How to use it</h3>
            <ol className="space-y-4 mb-8">
              {STEPS.map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent text-xs font-bold grid place-items-center mt-0.5" aria-hidden="true">{i + 1}</span>
                  <p className="text-sm leading-relaxed text-white/55">
                    <strong className="text-white font-semibold">{s.t}.</strong> {s.d}
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap gap-2 mb-8">
              {TAGS.map((t) => <span key={t} className="skill-pill">{t}</span>)}
            </div>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#d2611f] text-white text-sm font-semibold py-2.5 px-6 rounded-full shadow-sm shadow-accent/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              Open the full app
            </a>
          </div>

          {/* The player */}
          <div className="lg:col-span-3 reveal">
            <div className="rounded-2xl border border-[#272727] bg-[#1a1a1a] overflow-hidden shadow-xl shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#272727]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" aria-hidden="true" />
                <span className="ml-2 text-xs text-white/40 truncate">Live demo · runs in your browser only</span>
              </div>
              <iframe
                title="Cave Party live demo"
                src={PLAYER_URL}
                loading="lazy"
                allow="autoplay; clipboard-write; fullscreen; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                className="block w-full h-[640px] sm:h-[720px] bg-[#0a0a0a]"
              />
            </div>
            <p className="mt-3 text-xs text-white/35 leading-relaxed">
              This is demo mode, so nothing you do is shared or saved online. Open the full app in another tab to
              act as a second guest. Paste a YouTube link to add a song.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
