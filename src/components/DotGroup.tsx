import { SelectedPage } from "@/lib/types/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const DotGroup = ({ selectedPage, setSelectedPage }:Props) => {


  const selectedStyles = `relative bg-cyan before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-cyan before:left-[-50%] before:top-[-50%] `;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7 z-10 ">
      <AnchorLink
        className={`${
          selectedPage === "hero" ? selectedStyles : " bg-darkGrey"
        } w-3 h-3 rounded-full`}
        href="#hero"
        onClick={() => setSelectedPage("hero")}
      />

      <AnchorLink
        className={`${
          selectedPage === "resume" ? selectedStyles : " bg-darkGrey"
        } w-3 h-3 rounded-full`}
        href="#resume"
        onClick={() => setSelectedPage("resume")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : " bg-darkGrey"
        } w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : " bg-darkGrey"
        } w-3 h-3 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
