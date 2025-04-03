'use client'
import { useState } from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetContent,
} from '../ui/sheet'

import { MenuIcon } from 'lucide-react'
import NavLink from './NavLink'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NavLinkType } from '@/lib/types/types'

const MobileNavbar = ({ navLinks }: NavLinkType) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <div className=' md:hidden flex items-center'>
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button
            aria-label='menu Button'
            variant='ghost'
            size='icon'
            className='cursor-pointer '
          >
            <MenuIcon className='size-10 text-brown dark:text-cyan ' />
          </Button>
        </SheetTrigger>

        <SheetContent
          side='right'
          className='w-[300px] backdrop-blur-sm  items-center bg-background/80'
        >
          <SheetHeader className='mt-20'>
            <SheetTitle>
              <Link href='#home' className='focus:outline-none'>
                <h4 className='text-2xl lg:text-3xl text-darkCyan dark:text-cyan font-semibold font-caveat uppercase'>
                  Merve Baek
                  <span className='text-5xl'>.</span>
                </h4>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className=' flex flex-col justify-center gap-5 text-lg font-semibold mt-20'>
            <ul className='p-4 space-y-5 mt-0'>
              {navLinks.map((link, index) => (
                <li key={index} onClick={() => setShowMobileMenu(false)}>
                  <NavLink title={link.title} path={link.path} />
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavbar
