import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { experience, education, softSkills } from "@/assets/data/data";
import SkillMarquee from "@/components/SkillMarquee";
import TextAnimation from "../TextAnimation";
import { Card } from "../ui/card";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Resume = () => {
  return (
    <motion.section
      id='resume'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={fadeInLeft}
      className=' flex-col items-center justify-center h-full py-40 space-y-20'
    >
      {/* Title */}
      <TextAnimation text='Career Overview' otherStyles='text-4xl font-bold ' />

      {/* Tabs Section */}
      <Tabs
        defaultValue='experience'
        // className="w-full flex flex-col md:flex-row gap-16 justify-center "
        className='flex flex-col lg:grid lg:grid-cols-12 gap-16 justify-center'
      >
        {/* Tabs List */}
        <div className='col-span-3 '>
          <TabsList className='flex flex-col w-full h-fit gap-6 bg-transparent'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>
        </div>

        {/* Tabs Content */}
        <div className='col-span-9'>
          {/* Experience Tab */}
          <TabsContent value='experience'>
            <div className='flex flex-col gap-6 text-center md:text-left '>
              <p className='max-w-[600px]'>{experience.description}</p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {experience.items.map((item, index) => (
                  <Card
                    key={index}
                    className=' bg-brown text-paper shadow-md h-[184px] px-5 rounded-xl flex flex-col justify-center items-center md:items-start gap-3'
                  >
                    <span className='text-cyan font-medium'>
                      {item.duration}
                    </span>
                    <h3 className='text-lg font-semibold max-w-[260px] text-center md:text-left'>
                      {item.position}
                    </h3>
                    <div className='flex items-center gap-3'>
                      <span className='size-1.5 rounded-full bg-cyan' />
                      <p className='text-muted-foreground'>{item.company}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value='education'>
            <div className='flex flex-col gap-6 text-center md:text-left '>
              <p className='max-w-[600px] mx-auto md:mx-0'>
                {education.description}
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {education.items.map((item, index) => (
                  <Card
                    key={index}
                    className=' bg-brown text-paper shadow-md h-[184px] px-5 rounded-xl flex flex-col justify-center items-center md:items-start gap-3'
                  >
                    <span className='text-cyan font-medium'>
                      {item.duration}
                    </span>
                    <h3 className='text-lg font-semibold max-w-[260px] text-center md:text-left'>
                      {item.degree}
                    </h3>
                    <div className='flex items-center gap-3'>
                      <span className='size-1.5 rounded-full bg-cyan' />
                      <p className='text-muted-foreground'>
                        {item.institution}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value='skills' className='md:max-w-[1000px]'>
            <div className='flex flex-col gap-6 w-full md:max-w-[1000px] items-center md:items-start'>
              <div className=' flex gap-3 flex-wrap w-full  '>
                {softSkills.map((skill, index) => (
                  <Card
                    key={index}
                    className=' rounded-xl py-1 px-2 bg-brown/80 hover:scale-105 cursor-pointer text-paper'
                  >
                    {skill}
                  </Card>
                ))}
              </div>

              {/* Skills Marquee */}
              <div className='xs:max-w-[390px] sm:max-w-[600px] md:max-w-[1000px]'>
                <SkillMarquee />
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.section>
  )
};

export default Resume;
