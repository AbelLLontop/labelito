import { PostMetaData } from '@/interfaces/posts.interface'
import fs from 'fs/promises'
import matter from 'gray-matter'

const getPostMetaData = async ():Promise<PostMetaData[]> => {
  const folder = 'src/data/posts'
  const files = await fs.readdir(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))
  const posts = markdownPosts.map(async (fileName) => {
    const fileContents = await fs.readFile(`${folder}/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', '')

    }
  })
  return Promise.all(posts)
}

export default getPostMetaData
