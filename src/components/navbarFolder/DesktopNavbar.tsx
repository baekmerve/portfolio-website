import React from 'react'
import NavLink from './NavLink'
import { NavLinkType } from '@/lib/types/types'

function DesktopNavbar({ navLinks }: NavLinkType) {
  return (
    <nav className='hidden menu md:flex md:w-auto items-center'>
      <div className='flex gap-6 text-lg font-semibold '>
        <ul className='flex p-4 md:p-0 md:flex-row gap-2 mt-0'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink title={link.title} path={link.path} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default DesktopNavbar
