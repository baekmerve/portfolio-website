import AboutPage from '@/components/views/AboutPage'
import ContactPage from '@/components/views/ContactPage'

import Hero from '@/components/views/Hero'

import SkillSection from '@/components/views/SkillPage'
import TestProjects from '@/components/views/ProjectsPage'

export default function Home() {
  return (
    <div className='snap-y snap-mandatory z-0'>
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <AboutPage />
      </section>

      <section id='skills' className='snap-start'>
        <SkillSection />
      </section>

      <section id='projects' className='snap-start'>
        <TestProjects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactPage />
      </section>
    </div>
  )
}
