'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data'
import Skill from '../Skill'

export default function SkillPage() {
  return (
    <motion.div className=' flex flex-col relative max-w-[2000px] xl:p-10 min-h-screen justify-evenly items-center mx-auto'>
      <h3 className='commonTitle'>skills</h3>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7'>
        {skillsData.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}
