import { SelectedPage } from "@/lib/types/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

import SocialMediaIcons from "../SocialMediaIcons";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};



const Hero = ({ setSelectedPage }: Props) => {
  //lg:iems-center
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row lg:justify-between lg:h-[100vh] pt-20 lg:pt-40 gap-20"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 mt-20 lg:mt-32 flex justify-center basis-2/5 z-10 ">
        <Image
          alt="Profile image of Merve Baek, a frontend developer"
          src="/images/profile-image.jpeg"
          width={300}
          height={300}
          className="hover:filter hover:saturate-150 w-[300px] lg:w-[450px] transition rounded-full animate-colorChange h-fit p-1"
        />
      </div>

      {/* MAIN TEXT SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={fadeInLeft}
        className="lg:text-start text-center w-full lg:basis-3/5 order-2 h-fit lg:order-1 space-y-10"
      >
        <p className="text-5xl lg:text-8xl font-caveat text-transparent bg-clip-text bg-gradient-to-r from-red to-cyan-400">
          MERVE BAEK
        </p>
        <p className="text-2xl lg:text-4xl text-cyan font-semibold mt-2">
          Jr. Frontend Developer
        </p>
        <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          Focused on building clean, responsive, and user-friendly websites.
          Passionate about creating solutions that deliver results.
        </p>

        {/* CONNECT BUTTON */}
        <div className="mt-8 flex justify-center lg:justify-start gap-5">
          <AnchorLink
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 text-md"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Let’s Connect
          </AnchorLink>
          <SocialMediaIcons
            github={"https://github.com/baekmerve"}
            notion={"https://www.notion.so/3fc2723651e6407fb971b8fdfd8fe2d6"}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
