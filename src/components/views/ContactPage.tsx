'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import EmailForm from '../email/EmailForm'

const fadeInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}
export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col justify-evenly items-center '
    >
      <h3 className='commonTitle'>Contact</h3>

      <div className='flex flex-col gap-10 lg:flex-row lg:justify-between w-full justify-center '>
        {/* contact image */}
        <motion.div
          initial='hidden'
          viewport={{ once: true, amount: 0.5 }}
          animate={{
            y: [0, 20, 0], // Moves up and down
            transition: { duration: 2, repeat: Infinity, repeatType: 'loop' }, // Infinite loop
          }}
          className='basis-1/2 self-center relative  mt-10 lg:mt-0'
        >
          <Image
            src='/images/contact-image.svg'
            alt='contact'
            width={500}
            height={500}
            className='object-cover'
          />
        </motion.div>
        {/* email form*/}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={fadeInBottom}
          className='basis-1/2'
        >
          <EmailForm />
        </motion.div>
      </div>
    </motion.div>
  )
}
