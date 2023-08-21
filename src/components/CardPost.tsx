import React from 'react'

const CardPost = () => {
  return (
    <div
      className='cursor-pointer
    bg-slate-100 dark:bg-blue-200/10 py-4 px-8 rounded-md'
    >
      <header className=' dark:text-gray-400'>
        2018-present
      </header>
      <div className=' '>
        <h3
          className='font-semibold

    '
        >
          Conditional Types in TypeScript for React Developers
        </h3>
        <p className='dark:text-gray-400 my-4 mt-2 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          ipsa fugit itaque, earum beatae quasi enim reprehenderit? Vero
          libero, saepe necessitatibus tempora magnam quibusdam inventore,
          odio dolore at ea quas.
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
    </div>
  )
}

export default CardPost
