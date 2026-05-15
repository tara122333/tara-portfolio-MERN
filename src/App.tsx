import { AnimatedBackground } from '@/components/AnimatedBackground'
import { LoadingScreen } from '@/components/LoadingScreen'
import { Navbar } from '@/layouts/Navbar'
import { Footer } from '@/layouts/Footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Achievements } from '@/sections/Achievements'
import { Services } from '@/sections/Services'
import { Certificates } from '@/sections/Certificates'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-primary/40">
      <LoadingScreen />
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Services />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
