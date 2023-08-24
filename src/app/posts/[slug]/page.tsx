import React from 'react'

import getPostMetaData, { getPostByName } from '@/libs/getPostMetaData'
import HeaderPost from '@/components/HeaderPost'
import 'highlight.js/styles/github-dark.css'

const getPostContent = async (postId:string) => {
  const fileName = `${postId}.mdx`
  const post = await getPostByName(fileName)
  if (!post) return { content: '', meta: { id: '', title: '', date: '', tags: [] } }
  return post
}

export const generateStaticParams = async () => {
  const posts = await getPostMetaData()
  if (!posts) return []
  return posts.map((post) => ({
    postId: post.id
  }))
}

const Page = async ({ params }:{params:{slug:string}}) => {
  const postId = params.slug
  const post = await getPostContent(postId)
  return (
    <div className='mx-auto max-w-4xl px-8'>

      <HeaderPost
        author='Abel llontop meza'
        date={post.meta.date}
        title={post.meta.title}
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
        {post.content}
      </article>
    </div>
  )
}

export default Page
