import HeaderPost from '@/components/HeaderPost'
import Message from '@/components/Message'
import Typography from '@/components/Typography'
import React from 'react'
import { linksBlog } from '@/consts/links'
import ItemPost from '@/components/ItemPost'

const BlogsPage = () => {
  return (
    <main>
      <section className='container px-8 xl:max-w-3xl mx-auto py-8'>
        <HeaderPost
          title='Blogs Abel'
          date='Aug 2, 2016'
          author='Developer Abel'
        />
        <section>
          <Typography>
            El contenido de este blog aun no esta disponible, pero puedes ver la estructura de como se veran los blogs

          </Typography>

          <section className='grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-4'>
            {Object.values(linksBlog).map(({ label, route }) => (
              <ItemPost
                key={route}
                name={label}
                route={route}
              />
            ))}
          </section>
          <Message />
        </section>
      </section>
    </main>
  )
}

export default BlogsPage
