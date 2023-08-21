import CardPost from '@/components/CardPost'
import HeaderPost from '@/components/HeaderPost'
import Message from '@/components/Message'
import Typography from '@/components/Typography'
import React from 'react'

const DataPage = () => {
  return (
    <main className='
    container
    px-8
    mx-auto flex lg:gap-8 py-8
    flex-wrap
    lg:flex-nowrap
    max-w-6xl
    '

    >
      <section className='
       lg:min-w-[31rem]
       h-fit
       lg:sticky
        lg:top-24
      '
      >
        <HeaderPost
          title='Data Blog'
          date='Aug 2, 2016'
          author='Developer Abel'
        />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor dolorum, perferendis ipsa exercitationem et consequuntur obcaecati ad quia iusto molestias quasi error sunt totam! Iure non enim provident nulla.
        </Typography>
        <Message />
      </section>
      <section className='pt-4'>

        <div className='flex flex-wrap gap-4 mt-4'>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </section>
    </main>
  )
}

export default DataPage
