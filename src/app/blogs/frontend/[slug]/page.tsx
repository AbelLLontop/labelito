import getPostMetaData, { getPostContent } from '@/libs/getPostMetaData'
import 'highlight.js/styles/github-dark.css'
import { routesPost } from '@/consts/routesPosts'
import ContentBlog from '@/components/ContentBlog'

export const generateStaticParams = async () => {
  const posts = await getPostMetaData(routesPost.frontend)
  if (!posts) return []
  return posts.map((post) => {
    const slug = post.id.split(' ').join('-')
    return {
      slug

    }
  })
}

const Page = async ({ params }:{params:{slug:string}}) => {
  const post = await getPostContent(routesPost.frontend, params.slug)
  return (
    <ContentBlog
      post={post}
    />

  )
}

export default Page
