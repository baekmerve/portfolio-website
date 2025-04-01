import { projectList } from '@/lib/data'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SocialMediaIcons from '../SocialMediaIcons'

export default function Projects() {
  return (
    <>
      {/* Title */}
      <h1 className='text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red to-cyan-400'>
        My Recent Works
      </h1>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {projectList.map((project, index) => (
          <div
            key={index}
            className='relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg'
          >
            {/* Project Image */}
            <Image
              src={`/images/${project.image}`}
              width={400}
              height={250}
              alt={project.title}
              className='object-cover w-full h-full'
            />

            {/* Overlay */}
            <div
              className='absolute inset-0 bg-black/60 flex flex-col items-center justify-center
              text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5'
            >
              <h3 className='text-lg font-bold'>{project.title}</h3>
              <p className='text-sm text-center mt-2'>{project.description}</p>

              {/* Links */}
              <div className='mt-4 flex gap-3'>
                <SocialMediaIcons
                  github={project.github}
                  notion={project.notion}
                  demo={project.demo}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
