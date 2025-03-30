"use client";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetContent,
} from "../ui/sheet";

import { MenuIcon } from "lucide-react";
import { SelectedPage } from "@/lib/types/types";
import NavLink from "./NavLink";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Button } from "../ui/button";
import LogoImage from "../LogoImage";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const MobileNavbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className=' md:hidden'>
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button
            aria-label='menu Button'
            variant='ghost'
            size='icon'
            className='cursor-pointer'
          >
            <MenuIcon className='size-7 text-brown dark:text-cyan ' />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='w-[300px] backdrop-blur-sm bg-background/90 flex items-center'
        >
          <SheetHeader className='mt-20'>
            <SheetTitle>
              <AnchorLink href='#home' onClick={() => setSelectedPage('home')}>
                <LogoImage />
              </AnchorLink>
            </SheetTitle>
          </SheetHeader>
          <nav className=' flex flex-col justify-center gap-5 text-lg font-semibold mt-20'>
            <NavLink
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page='Resume'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <NavLink
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
};

export default MobileNavbar;
