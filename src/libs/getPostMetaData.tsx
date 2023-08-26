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

export const getPostByName = async (route:string, fileName: string): Promise<BlogpPost|undefined> => {
  const fileContent = await fs.readFile(`${route}/${fileName}`, 'utf8')
  const { frontmatter, content } = await compileMDX<{title:string, date:string, tags:string[], description:string}>({
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
  const slug = id.split(' ').join('-')

  const blogPostObj:BlogpPost = {
    meta: {
      id: slug, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags, description: frontmatter.description
    },
    content
  }

  return blogPostObj
}

// obtener contenido de blog
export const getPostContent = async (route:string, postId:string):Promise<BlogpPost> => {
  const desSlug = postId.split('-').join(' ')
  const fileName = `${desSlug}.mdx`
  const post = await getPostByName(route, fileName)
  if (!post) {
    return {
      meta: {
        id: '', title: '', date: '', tags: [], description: ''
      },
      content: <></>
    }
  }
  return post
}
// obtener metadata de archivos

// const folder = 'src/data/posts'
const getPostMetaData = async (route:string):Promise<PostMetaData[] | undefined> => {
  const files = await fs.readdir(route)
  const filesArray = files.filter((file) => file.endsWith('.mdx'))
  const posts:PostMetaData[] = []

  for (const file of filesArray) {
    const post = await getPostByName(route, file)
    if (post) {
      const { meta } = post
      posts.push(meta)
    }
  }
  return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}

export default getPostMetaData
