import React from "react";

import { SelectedPage } from "@/lib/types/types";
import NavLink from "./NavLink";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
function DesktopNavbar({ selectedPage, setSelectedPage }: Props) {
  return (
    <nav className="hidden md:flex items-center">
      <div className="flex gap-6 font-jost text-lg font-semibold">
        <NavLink
          page="Hero"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <NavLink
          page="Resume"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <NavLink
          page="Projects"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <NavLink
          page="Contact"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </nav>
  );
}

export default DesktopNavbar;
