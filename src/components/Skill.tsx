import { motion } from 'framer-motion'

import { SkillType } from '@/lib/types/types'
import Image from 'next/image'
import React from 'react'

export default function Skill({ skill }: { skill: SkillType }) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{ x: skill.directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className='relative '
      >
        {/* Skill Image */}
        <Image
          src={`/skills/${skill.image}`}
          alt={skill.name}
          width={20}
          height={20}
          className=' w-20 h-20 md:w-28 md:h-28 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        {/* Hover Overlay */}
        <div className='absolute top-0 left-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 rounded-full  z-10'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-xl font-bold text-black opacity-100'>
              {skill.name}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
