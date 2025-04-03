import SocialMediaIcons from '../SocialMediaIcons'
import Spinner from '../Spinner'

const Footer = () => {
  return (
    <footer className='h-64 pt-10 flex items-center justify-center  '>
      {/* Go to Top Button */}
      <Spinner />

      {/* Footer Content */}
      <div className='flex flex-col items-center mt-6 space-y-4'>
        {/* Name & Socials */}
        <div className='flex items-center space-x-6'>
          <p className='font-caveat font-semibold text-2xl text-darkGrey dark:text-silver'>
            MERVE BAEK
          </p>
          <div className='flex gap-4'>
            <SocialMediaIcons
              github={'https://github.com/baekmerve'}
              notion={'https://www.notion.so/3fc2723651e6407fb971b8fdfd8fe2d6'}
              otherSyle='border-silver'
            />
          </div>
        </div>

        {/* Copyright */}
        <p className='font-caveat text-sm text-silver'>
          ©2025 BAEK. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
