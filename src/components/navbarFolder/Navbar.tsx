'use client'
import DesktopNavbar from './DesktopNavbar'
import ThemeToggle from '../ThemeToggle'
import MobileNavbar from './MobileNavbar'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  {
    title: 'Home',
    path: '#hero',
  },
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
]

const Navbar = () => {
  return (
    <nav className='sticky top-0 bg-background z-40 mt-3 py-3 mx-auto w-full px-4 flex items-center justify-between '>
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex items-center '
      >
        <Link href='#home' className='focus:outline-none'>
          <h4 className='text-2xl lg:text-3xl text-darkCyan dark:text-cyan font-semibold font-caveat uppercase'>
            Merve Baek
            <span className='text-5xl'>.</span>
          </h4>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex items-center'
      >
        <DesktopNavbar navLinks={navLinks} />
        <ThemeToggle />
        <MobileNavbar navLinks={navLinks} />
      </motion.div>
    </nav>
  )
}
export default Navbar
