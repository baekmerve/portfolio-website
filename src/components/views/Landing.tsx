import { SelectedPage } from "@/lib/types/types";
import React from "react";
import Hero from "./Hero";

import Resume from "./Resume";
import Section from "../Section";
import ContactPage from "./ContactPage";
import Projects from "./Projects";
import DotGroup from "../DotGroup";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
const Landing = ({ setSelectedPage, selectedPage }: Props) => {
  return (
    <div className='w-5/6 mx-auto '>
      <Section id='home' setSelectedPage={setSelectedPage}>
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Hero setSelectedPage={setSelectedPage} />
      </Section>

      <Section id='resume' setSelectedPage={setSelectedPage}>
        <Resume />
      </Section>

      <Section id='projects' setSelectedPage={setSelectedPage}>
        <Projects />
      </Section>

      <Section id='contact' setSelectedPage={setSelectedPage}>
        <ContactPage />
      </Section>
    </div>
  )
};

export default Landing;
