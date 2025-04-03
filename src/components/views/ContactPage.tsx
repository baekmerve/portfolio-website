'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import EmailForm from '../email/EmailForm'

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col justify-evenly items-center '
    >
      <h3 className='commonTitle'>Contact</h3>

      <div className=' flex flex-col items-center md:flex-row md:items-center md:justify-between w-full mt-32 md:mt-0'>
        {/* contact image */}
        <motion.div
          initial='hidden'
          viewport={{ once: true, amount: 0.5 }}
          animate={{
            y: [0, 20, 0], // Moves up and down
            transition: { duration: 2, repeat: Infinity, repeatType: 'loop' }, // Infinite loop
          }}
          className='w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] self-center relative '
        >
          <Image
            src='/images/contact-image.svg'
            alt='contact'
            fill
            className='object-cover'
          />
        </motion.div>
        {/* email form*/}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='w-[300px] md:w-1/2'
        >
          <EmailForm />
        </motion.div>
      </div>
    </motion.div>
  )
}
