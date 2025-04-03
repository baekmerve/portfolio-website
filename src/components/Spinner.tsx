'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Spinner = () => {
  return (
    <div className='fixed bottom-5 right-5 cursor-pointer z-30   '>
      <Link
        href='#hero'
        aria-label='link for going to top of the page'
        className=' flex items-center justify-center group '
      >
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
          viewBox='0 0 300 300'
          className='w-[120px] h-[120px] md:w-[160px] md:h-[160px] filter grayscale hover:grayscale-0'
        >
          <defs>
            <path
              id='circlePath'
              d='M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
            />
          </defs>
          <text fill='#17C3B2'>
            <textPath
              xlinkHref='#circlePath'
              className='text-lg tracking-widest uppercase  group-hover:text-darkCyan'
            >
              Go to Top - Go to Top - Go to Top -Go to Top
            </textPath>
          </text>
        </motion.svg>

        {/* Fixed Arrow in the Middle */}
        <div className='absolute flex items-center justify-center'>
          <div className='p-2 group-hover:bg-darkCyan bg-silver rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M5 12l7-7 7 7' />
              <path d='M12 19V5' />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Spinner
