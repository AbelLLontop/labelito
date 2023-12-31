import Link from 'next/link'
import React from 'react'

interface Props{
  title: string
  date: string
  description:string
  route:string
}
const CardPost = (props:Props) => {
  return (
    <div
      className='
      w-full
      cursor-pointer
    bg-slate-100 dark:bg-blue-200/10 py-4 px-8 rounded-md
    hover:border-slate-600 border border-transparent
    '
    >
      <Link href={props.route}>

        <header className=' dark:text-gray-400'>
          {props.date}
        </header>
        <div className=' '>
          <h3
            className='font-semibold

    '
          >
            {props.title}
          </h3>
          <p className='dark:text-gray-400 my-4 mt-2 text-sm'>
            {props.description}
          </p>
          <ul className='flex flex-wrap gap-2'>
            <li>
              <div className='px-3 py-1  bg-blue-400/10 dark:text-blue-300 font-medium rounded-full text-xs'>
                React
              </div>
            </li>
            <li>
              <div className='px-3 py-1  bg-blue-400/10 dark:text-blue-300 font-medium rounded-full text-xs'>
                React
              </div>
            </li>
            <li>
              <div className='px-3 py-1  bg-blue-400/10 dark:text-blue-300 font-medium rounded-full text-xs'>
                React
              </div>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  )
}

export default CardPost
