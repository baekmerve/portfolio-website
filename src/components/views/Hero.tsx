'use client'

import { motion } from 'framer-motion'
import BackgroundCircle from '../BackgroundCircle'

import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />

      <div className='z-10'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-darkCyan dark:text-cyan mb-6'>
          Hello, I&apos;m Merve
        </h1>
        <h2 className='uppercase py-5 tracking-widest text-darkGrey text-xl md:text-2xl text-center font-semibold'>
          jr. frontend developer
        </h2>
        <TypeAnimation
          sequence={[
            'who-loves-Coffee.tsx',
            1000,
            '<butLovesToCodeMore />',
            1000,
          ]}
          wrapper='span'
          speed={20}
          repeat={Infinity}
          className='text-darkGrey text-xl md:text-2xl font-semibold'
        />

        <div className='mt-10 z-20 flex justify-center gap-5'>
          <motion.div
            initial={{ opacity: 0, y: -500 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.1,
              damping: 30,
            }}
          >
            <Link href='#contact'>
              <button className='bg-darkCyan dark:bg-cyan  hover:bg-gradient-to-r from-darkCyan to-lime-200 dark:from-cyan text-brown font-medium py-3 px-7 rounded-lg shadow-md transform hover:scale-105 text-md cursor-pointer transition-all duration-300'>
                Click Me
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
