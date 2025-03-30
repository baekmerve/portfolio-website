import { SelectedPage } from '@/lib/types/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import SocialMediaIcons from '../SocialMediaIcons'

interface Props {
  setSelectedPage: (value: SelectedPage) => void
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

const Hero = ({ setSelectedPage }: Props) => {
  return (
    <section
      id='home'
      className='flex flex-col lg:flex-row lg:justify-between h-full py-40 gap-20'
    >
      {/* MAIN TEXT SECTION */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={fadeInLeft}
        className='lg:text-start text-center w-full h-fit space-y-10'
      >
        <p className='text-5xl lg:text-8xl font-caveat text-transparent bg-clip-text bg-gradient-to-r from-red to-cyan-400'>
          MERVE BAEK
        </p>
        <p className='text-2xl lg:text-4xl text-cyan font-semibold mt-2'>
          Jr. Frontend Developer
        </p>
        <p className='mt-6 lg:mt-8 text-lg lg:text-xl text-gray-600 dark:text-gray-300'>
          Focused on building clean, responsive, and user-friendly websites.
          Passionate about creating solutions that deliver results.
        </p>

        {/* CONNECT BUTTON */}
        <div className='mt-8 flex justify-center lg:justify-start gap-5'>
          <AnchorLink
            className='bg-cyan hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 text-md'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Let’s Connect
          </AnchorLink>
          <SocialMediaIcons
            github={'https://github.com/baekmerve'}
            notion={'https://www.notion.so/3fc2723651e6407fb971b8fdfd8fe2d6'}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
