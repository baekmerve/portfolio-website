import { SelectedPage } from "@/lib/types/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const NavLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  // Convert the page to lowercase and remove spaces
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const commonButtonStyle = `text-center hover:scale-110 transition-all duration-100 rounded-full px-4 py-2  w-full h-full shadow-lg border bg-background/90 border border-brown/30 backdrop-blur-md`;

  return (
    <div
      className={`${
        selectedPage === lowerCasePage
          ? "text-cyan font-bold scale-115 rounded-full border-2 border-cyan shadow-xl"
          : " "
      } ${commonButtonStyle}`}
    >
      <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </div>
  );
};

export default NavLink;
