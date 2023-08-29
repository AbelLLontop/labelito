import React from 'react'
import { PostMetaData } from '@/interfaces/posts.interface'
import CardPost from './CardPost'
import { FiSearch } from 'react-icons/fi'

interface Props{
    children:React.ReactNode,
    posts:PostMetaData[],
    linkPost:string
}
const PostPageMainContainer = (props:Props) => {
  return (
    <main className='
        container
        px-8
        mx-auto flex lg:gap-8 pt-8
        flex-wrap
        lg:flex-nowrap
        max-w-6xl
        '
    >
      <section className='
           lg:min-w-[31rem]
           lg:max-w-[34rem]

           h-fit
           lg:sticky
            lg:top-24
          '
      >
        {props.children}
      </section>
      <section className='pt-4 w-full'>
        <label
          className='
        my-2
        flex
        items-center
        px-4
        dark:bg-black/20
        bg-black/10
        rounded-md
        py-2

      '
        >

          <FiSearch />

          <input
            className='
          placeholder-gray-950
          dark:placeholder-gray-400
          outline-none
          bg-transparent
        rounded-md
        py-2 px-4

        '
            type='text' placeholder='Search..'
          />
        </label>

        <div className='flex flex-col gap-4 mt-4'>
          {
                props.posts.map((post) => (
                  <CardPost
                    key={post.id}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    route={`${props.linkPost}/${post.id}`}
                  />
                ))
              }
        </div>
      </section>
    </main>
  )
}

export default PostPageMainContainer
