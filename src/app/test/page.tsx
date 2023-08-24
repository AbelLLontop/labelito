import React from 'react'
import Link from 'next/link'
import getPostMetaData from '@/libs/getPostMetaData'

const TestPage = async () => {
  const postsMetaData = await getPostMetaData()
  if (!postsMetaData) return (<div>no posts</div>)
  const postPreviews = postsMetaData.map((post) => (
    <div className='bg-slate-800 m-2 p-4' key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <div>{post.date}</div>
        {/* <div>{post.tags.map((tag) => (<div key={tag}>{tag}</div>))}</div> */}
      </Link>

    </div>
  ))

  return (
    <div>{postPreviews}</div>
  )
}

export default TestPage
