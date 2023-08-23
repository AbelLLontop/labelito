import React from 'react'
import Link from 'next/link'
import getPostMetaData from '@/service/PostMetadata'

const TestPage = async () => {
  const postsMetaData = await getPostMetaData()
  const postPreviews = postsMetaData.map((post) => (
    <div className='bg-slate-800 m-2 p-4' key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <div>{post.subtitle}</div>
        <div>{post.date}</div>
      </Link>

    </div>
  ))

  return (
    <div>{postPreviews}</div>
  )
}

export default TestPage
