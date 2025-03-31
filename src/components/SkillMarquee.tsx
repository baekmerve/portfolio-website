import Marquee from 'react-fast-marquee'
import React from 'react'

import { skillsData } from '@/assets/data/data'
import Image from 'next/image'

const SkillMarquee = () => {
  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover
      pauseOnClick
      delay={0}
      loop={0}
      play
      direction='left'
      className='w-full'
    >
      {skillsData.map((item, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-between gap-2 transition-all duration-500 m-5 hover:scale-105 cursor-pointer '
        >
          {/* skill icon img */}
          <Image
            src={`/skills/${item.image}`}
            alt={item.name}
            width={40}
            height={40}
          />

          {/* skill name */}
          <p className='text-sm '>{item.name}</p>
        </div>
      ))}
    </Marquee>
  )
}

export default SkillMarquee
