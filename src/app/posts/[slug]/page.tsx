import React from 'react'
import fs from 'fs/promises'
import matter from 'gray-matter'
import getPostMetaData from '@/service/PostMetadata'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Typography from '@/components/Typography'

const components = {
  h2: (props:any) => (
    <Typography variant='h2'>
      {props.children}
    </Typography>
  ),
  h3: (props:any) => (
    <Typography variant='h3'>
      {props.children}
    </Typography>
  ),
  p: (props:any) => (
    <Typography>
      {props.children}
    </Typography>
  )
}

const getPostContent = async (slug:string) => {
  const folder = 'src/data/posts/'
  const file = `${folder}${slug}.md`
  const content = await fs.readFile(file, 'utf-8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = await getPostMetaData()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

const Page = async ({ params }:{params:{slug:string}}) => {
  const slug = params.slug
  const post = await getPostContent(slug)

  // const mdxSource = await serialize(post.content)
  return (
    <div className='mx-auto max-w-4xl px-8'>
      <h1 className='
      text-6xl
      font-bold
      dark:text-white
      my-8

      '
      >
        {post.data.title}
      </h1>
      <article className='prose lg:prose-lg dark:prose-invert '>
        <MDXRemote source={post.content} components={components} />

      </article>
    </div>
  )
}

export default Page
