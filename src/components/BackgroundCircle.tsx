'use client'
import { motion } from 'framer-motion'

function BackgroundCircle() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className='relative flex justify-center items-center z-0'
    >
      <div className='absolute border border-brown/15 dark:border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-brown/15 dark:border-[#333333]  rounded-full h-[300px] w-[300px] mt-52 animate-ping ' />

      <div className='absolute mt-52 border-6 border-double border-darkCyan dark:border-cyan rounded-full h-[350px] w-[350px] md:h-[600px] md:w-[600px] animate-pulse' />
    </motion.div>
  )
}

export default BackgroundCircle
