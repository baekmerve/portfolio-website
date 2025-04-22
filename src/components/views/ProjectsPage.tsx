'use client'
import { motion } from 'framer-motion'
import { projectList } from '@/lib/data'

import ProjectCard from '../ProjectCard'

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-screen relative flex flex-col space-y-10 overflow-hidden justify-evenly items-center max-w-full mx-auto z-0 '
    >
      <h3 className='uppercase tracking-[20px] text-darkGrey text-3xl text-center font-bold md:text-left'>
        projects
      </h3>

      <div className='w-full h-fit relative flex space-x-5 overflow-x-scroll overflow-y-hidden z-20 snap-x snap-mandatory '>
        {projectList.map((project, index) =>
          project ? (
            <div
              key={index}
              className='flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center'
            >
              <ProjectCard key={index} project={project} />
            </div>
          ) : null
        )}
      </div>
      {/* Background Effect */}
      <div className='w-full absolute top-[30%] dark:bg-cyan/5 bg-brown/20 left-0 h-[500px] -skew-y-12 ' />
    </motion.div>
  )
}
