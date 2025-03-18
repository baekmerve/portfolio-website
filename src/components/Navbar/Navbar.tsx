import { SelectedPage } from "@/lib/types/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LogoImage from "../LogoImage";
import DesktopNavbar from "./DesktopNavbar";
import ThemeToggle from "../ThemeToggle";
import MobileNavbar from "./MobileNavbar";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav className="sticky top-0 w-full bg-background/10 backdrop-blur-2xl z-40 pt-7 pb-4">
      <div className="w-[90%] mx-auto px-4 flex items-center justify-between h-16  ">
        <div className="flex items-center">
          <AnchorLink href="#hero" onClick={() => setSelectedPage("hero")}>
            <LogoImage />
          </AnchorLink>
        </div>
        <div className="flex gap-5 items-center">
          <DesktopNavbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <ThemeToggle />
          <MobileNavbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
