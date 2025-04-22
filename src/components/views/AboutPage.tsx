'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen w-full flex flex-col text-center justify-evenly items-center relative'
    >
      {/* Title */}
      <h3 className='commonTitle'>About</h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className=' relative w-full max-w-[600px] aspect-[16/9]'
      >
        <Image
          alt='Profile image of Merve Baek, junior frontend developer'
          src='/images/about.webp'
          fill
          className='object-cover rounded-xl'
          priority
        />
      </motion.div>

      {/* Text Content */}
      <div className='w-full max-w-2xl mx-auto space-y-10'>
        <h4 className='text-2xl md:text-4xl font-semibold'>
          인사이트에서
          <span className='text-darkCyan dark:text-cyan underline-offset-4 ml-3'>
            인터페이스
          </span>
          로
        </h4>
        <div className='text-sm md:text-base lg:text-lg space-y-5'>
          <p>
            프론트엔드 개발에서 작은 디테일이 사용자 경험을 더욱 풍부하게
            만들고, 자연스러운 소통을 이끌어낸다고 믿습니다. 저는 사용자가
            서비스를 보다 직관적이고 즐겁게 이용할 수 있도록 고민하며, 세심한
            인터랙션과 디자인을 통해 더욱 편리한 경험을 만들어가고자 합니다.
          </p>
          <p>
            4년 이상 CX 매니저 및 개발 프로젝트 매니저로 근무하며 사용자
            피드백을 분석하고 서비스 개선에 힘써왔습니다. 개발팀과 긴밀히
            협업하며 기술이 사용자 경험을 어떻게 변화시키는지 직접 경험할 수
            있었고, 이를 통해 단순한 서비스 최적화가 아닌, 직접 사용자와 맞닿은
            제품을 만들어보고 싶다는 목표가 생겼습니다.
          </p>
          <p>
            현재 저는 프론트엔드 개발자로서 직관적이고 즐거운 인터페이스를
            설계하는 데 집중하고 있습니다. 하나의 서비스가 사용자들에게
            자연스럽게 스며들고, 일상의 일부가 될 수 있도록
            <span className='italic mx-2'>
              &quot;이 경험이 더 자연스러울 수 있을까?&quot;, &quot;사용자에게
              어떤 순간이 기억에 남을까?&quot;
            </span>
            와 같은 질문을 끊임없이 던지며 UI/UX를 개선해 나가고 있습니다.
          </p>
          <p>
            앞으로도 단순히 기능을 구현하는 것이 아니라, 사람들이 기술을
            편리하게 활용할 수 있도록 고민하고, 더 나은 서비스를 만들어 나가고
            싶습니다.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
