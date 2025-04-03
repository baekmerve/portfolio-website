'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant='ghost'
      aria-label='Toggle Theme'
      className='relative cursor-pointer'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {/* Sun Icon (Light Mode) */}
      <Sun className='size-7 text-yellow transition-transform duration-500 ease-in-out  dark:rotate-180 scale-0 dark:scale-100' />

      {/* Moon Icon (Dark Mode) */}
      <Moon className='absolute size-7 text-brightBlue transition-transform duration-500 ease-in-out scale-100 dark:scale-0 dark:-rotate-180 ' />

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
export default ThemeToggle
