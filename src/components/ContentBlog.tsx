import React from 'react'
import HeaderPost from './HeaderPost'
import { BlogpPost } from '@/interfaces/posts.interface'
interface Props{
    post:BlogpPost
}
const ContentBlog = (props:Props) => {
  return (
    <div className='mx-auto max-w-4xl px-8'>

      <HeaderPost
        author='Abel llontop meza'
        date={props.post.meta.date}
        title={props.post.meta.title}
      />
      <article className='
      prose max-w-full dark:prose-invert
      prose-a:no-underline
      prose-h1:mb-0
      prose-p:py-2
      hover:prose-a:underline
      dark:prose-a:text-blue-400

      '
      >
        {props.post.content}
      </article>
    </div>
  )
}

export default ContentBlog
