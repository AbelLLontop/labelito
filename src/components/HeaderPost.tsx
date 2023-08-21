import React from 'react'
import Typography from './Typography'
interface Props{
    title: string,
    date: string
    author: string
}
const HeaderPost = (props:Props) => {
  return (
    <header>
      <Typography variant='h1'>
        {props.title}
      </Typography>
      <p className='text-gray-500 pb-1'>
        {props.date} . {props.author}
      </p>
    </header>
  )
}

export default HeaderPost
