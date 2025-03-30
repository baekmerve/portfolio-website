"use client";
import { projectList } from "@/assets/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";
import { useState } from "react";
import TextAnimation from "../TextAnimation";
import SocialMediaIcons from "../SocialMediaIcons";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id='projects'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={fadeInLeft}
      className='flex-col items-center justify-center h-full py-40 space-y-20'
    >
      <TextAnimation text='Showcasing My Works..' otherStyles='p-3' />

      <div className='flex flex-col gap-10 lg:flex-row '>
        {/* Left Content Section (Project Details) */}
        <div className='w-full lg:1/2 flex flex-col lg:justify-between order-2 lg:order-none'>
          <div className='flex flex-col gap-8 h-[50%]'>
            {/* Project Number */}
            <div className='text-6xl md:text-8xl text-center lg:text-start font-extrabold text-transparent text-outline mt-3'>
              {projectList[activeIndex].num}
            </div>

            {/* Project Title */}
            <p className='text-2xl md:text-4xl text-center lg:text-start'>
              {projectList[activeIndex].title}
            </p>
            {/* Project Description */}
            <p className='dark:text-white/60 text-center lg:text-start lg:text-xl'>
              {projectList[activeIndex].description}
            </p>
            {/* GitHub & Notion Buttons */}
            <div className='flex justify-center lg:justify-start'>
              <SocialMediaIcons
                github={projectList[activeIndex].github}
                notion={projectList[activeIndex].notion}
                demo={projectList[activeIndex].demo}
              />
            </div>
            {/* Border */}
            <hr className='border border-brown/50 dark:border-white/40 ' />
            {/* Project Stack */}
            <ul className='flex gap-4 justify-center lg:justify-start flex-wrap'>
              {projectList[activeIndex].stack.map((item, index) => (
                <li
                  key={index}
                  className='text-sm lg:text-lg text-brown dark:text-muted-foreground rounded-full p-3 bg-brown/30 dark:bg-white/5 flex justify-center items-center'
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section (Swiper for Images) */}
        <div className='lg:w-1/2 flex items-center'>
          <Swiper
            centeredSlides={true}
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay, EffectCards]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {projectList.map((project, index) => (
              <SwiperSlide key={index}>
                {/* Image */}
                <div className='flex items-center justify-center'>
                  <Image
                    src={`/images/${project.image}`}
                    //layout="responsive"
                    width={800} // Default width (not strictly applied with `layout="responsive"`)
                    height={600} // Default height
                    alt='project image'
                    className='object-cover max-w-[300px] md:max-w-[400px] lg:max-w-[500px] rounded-2xl'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  )
}
