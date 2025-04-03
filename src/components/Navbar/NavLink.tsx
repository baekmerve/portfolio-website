
import Link from 'next/link'

interface Props {
  title: string
  path: string
}

const NavLink = ({ title, path }: Props) => {
  return (
    <div className=' text-center px-4 p-2 border rounded-full uppercase text-sm tracking-widest text-darkGrey dark:text-silver transition-all hover:border-darkCyan hover:text-darkCyan dark:hover:border-cyan/40 dark:hover:text-cyan/40 cursor-pointer '>
      <Link href={path}>{title}</Link>
    </div>
  )
}

export default NavLink
