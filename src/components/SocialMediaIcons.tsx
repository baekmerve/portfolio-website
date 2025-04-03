import { SiNotion, SiGithub } from 'react-icons/si'
import { IoGlobeOutline } from 'react-icons/io5'

interface Props {
  github: string
  notion: string
  demo?: string
  otherSyle?: string
}

const SocialMediaIcons = ({ github, notion, demo, otherSyle }: Props) => {
  return (
    <div className='flex gap-6'>
      {demo && (
        <a
          href={demo}
          target='_blank'
          rel='noopener noreferrer'
          title='View project demo'
          aria-label='View project demo'
        >
          <div
            className={`${otherSyle} w-[56px] h-[56px] rounded-full border dark:bg-white/5 flex justify-center items-center hover:scale-105 transition`}
            aria-labelledby='demo-tooltip'
          >
            <IoGlobeOutline className='text-3xl' />
            <span id='demo-tooltip' className='sr-only'>
              View project demo
            </span>
          </div>
        </a>
      )}

      <a
        href={github}
        target='_blank'
        rel='noopener noreferrer'
        title='Visit GitHub profile'
        aria-label='Visit GitHub profile'
      >
        <div
          className={` ${otherSyle} w-[50px] h-[50px] rounded-full border dark:bg-white/5 flex justify-center items-center hover:scale-105 transition`}
          aria-labelledby='github-tooltip'
        >
          <SiGithub className='text-3xl' />
          <span id='github-tooltip' className='sr-only'>
            Visit GitHub profile
          </span>
        </div>
      </a>
      <a
        href={notion}
        target='_blank'
        rel='noopener noreferrer'
        title='Open Notion workspace'
        aria-label='Open Notion workspace'
      >
        <div
          className={` ${otherSyle} w-[56px] h-[56px] rounded-full border dark:bg-white/5 flex justify-center items-center hover:scale-105 transition'
          aria-labelledby='notion-tooltip`}
        >
          <SiNotion className='text-3xl' />
          <span id='notion-tooltip' className='sr-only'>
            Open Notion workspace
          </span>
        </div>
      </a>
    </div>
  )
}

export default SocialMediaIcons
