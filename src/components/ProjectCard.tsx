'use client'
import { motion } from 'framer-motion'
import { Project } from '@/lib/types/types'
import Image from 'next/image'
import SocialMediaIcons from './SocialMediaIcons'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center cursor-pointer overflow-x-hidden h-full p-10'>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='mx-auto relative w-[300px] h-[270px] md:w-[600px] md:h-[510px]'
      >
        {/* Project Title */}
        <h4 className='text-2xl md:text-4xl font-semibold text-center'>
          {project.title}
        </h4>
        {/* Project Image */}
        <Image
          src={`/images/${project.image}`}
          alt={project.title}
          fill
          className=' object-cover'
        />
      </motion.div>
      {/* Project Description */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='mx-auto space-y-5 text-center z-20'
      >
        <p className='text-lg font-medium '>{project.description}</p>
        {/* Links */}
        <div className='mt-4 flex justify-center items-center gap-3'>
          <SocialMediaIcons
            github={project.github}
            notion={project.notion}
            demo={project.demo!}
            otherSyle='border-brown'
          />
        </div>
        <ul className='flex mt-5 gap-2 justify-center flex-wrap'>
          {project.stack.map((item, index) => (
            <li
              key={index}
              className='text-xs text-paper dark:text-muted-foreground rounded-full px-3 py-2 bg-brown flex justify-center items-center'
            >
              {item.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  )
}
