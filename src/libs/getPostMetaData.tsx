import { BlogpPost, PostMetaData } from '@/interfaces/posts.interface'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs/promises'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkComments from 'remark-comment'
import Typography from '@/components/Typography'
export const components = {

  h1: (props:any) => (
    <Typography {...props} variant='h1'>
      {props.children}
    </Typography>
  ),
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
export const getPostByName = async (fileName: string): Promise<BlogpPost|undefined> => {
  const folder = 'src/data/posts'
  const fileContent = await fs.readFile(`${folder}/${fileName}`, 'utf8')
  const { frontmatter, content } = await compileMDX<{title:string, date:string, tags:string[]}>({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {

        remarkPlugins: [
          remarkGfm,
          remarkComments

        ],
        rehypePlugins: [
          rehypeSlug,
          rehypeHighlight,
          [rehypeAutolinkHeadings, {
            // behavior: 'wrap'
          }]

        ]
      }

    }

  })

  const id = fileName.replace(/\.mdx$/, '')

  const blogPostObj:BlogpPost = {
    meta: {
      id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags
    },
    content
  }

  return blogPostObj
}

const getPostMetaData = async ():Promise<PostMetaData[] | undefined> => {
  const folder = 'src/data/posts'
  const files = await fs.readdir(folder)
  const filesArray = files.filter((file) => file.endsWith('.mdx'))
  const posts:PostMetaData[] = []

  for (const file of filesArray) {
    const post = await getPostByName(file)
    if (post) {
      const { meta } = post
      posts.push(meta)
    }
  }
  return posts.sort((a, b) => a.date < b.date ? 1 : -1)

  // const posts = markdownPosts.map(async (fileName) => {
  //   const fileContents = await fs.readFile(`${folder}/${fileName}`, 'utf8')
  //   const matterResult = matter(fileContents)
  //   return {
  //     title: matterResult.data.title,
  //     date: matterResult.data.date,
  //     subtitle: matterResult.data.subtitle,
  //     slug: fileName.replace('.mdx', '')

  //   }
  // })
  // return Promise.all(posts)
}

export default getPostMetaData

// https://www.youtube.com/watch?v=6ih_3m_UPKg&t=2046s
// MINUTO - 19:20
