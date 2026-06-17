import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Design from './components/Design'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] tracking-[-0.02em]">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Design />
      <Footer />
    </div>
  )
}
