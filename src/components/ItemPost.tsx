import Link from 'next/link'
import { AiOutlineLink } from 'react-icons/ai'

const ItemPost = ({ name, route }: { name: string; route: string }) => {
  return (
    <Link href={route}>
      <article
        className='

      border border-gray-200 dark:border-gray-700
      hover:border-gray-600

      dark:text-gray-400
      dark:hover:text-gray-300

       cursor-pointer

       bg-slate-100 dark:bg-blue-200/10 rounded-md p-4'
      >
        <header className='flex items-center gap-2'>
          <AiOutlineLink />
          <h3 className='py-2 '>{name}</h3>
        </header>
      </article>
    </Link>
  )
}

export default ItemPost
