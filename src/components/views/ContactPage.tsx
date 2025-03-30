import TextAnimation from "@/components/TextAnimation";
import EmailForm from "../EmailForm";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
export default function ContactPage() {
  return (
    <section id='contact' className='h-full py-40 space-y-20'>
      <TextAnimation text='CONTACT ME' />
      {/* HEADINGS */}
      <div className='md:flex md:justify-between gap-16  items-center '>
        <motion.div
          initial='hidden'
          viewport={{ once: true, amount: 0.5 }}
          animate={{
            y: [0, 20, 0], // Moves up and down
            transition: { duration: 2, repeat: Infinity, repeatType: 'loop' }, // Infinite loop
          }}
          className='basis-1/2 flex justify-center '
        >
          <div className='w-[300px] h-[300px] md:w-[500px] md:h-[500px]'>
            <Image
              src='/images/contact-image.svg'
              alt='contact'
              width={500}
              height={500}
              className='object-cover'
            />
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={fadeInBottom}
          className='basis-1/2 mt-2 md:mt-10 '
        >
          <EmailForm />
        </motion.div>
      </div>
    </section>
  )
}
