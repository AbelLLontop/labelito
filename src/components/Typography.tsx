import React from 'react'

type varianst = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
interface Props{
    variant?: varianst,
    children: React.ReactNode
}

const Typography = (props:Props) => {
  const { children, ...others } = props
  if (props.variant === 'h1') {
    return (
      <h1 {...others} className='text-4xl md:text-6xl lg:text-7xl font-bold py-4 '>
        <span className='text-blue-700 mr-2'>#</span>
        {props.children}
      </h1>
    )
  }
  if (props.variant === 'h2') {
    return (
      <h2 {...others} className='text-2xl font-bold py-2 '><span className='text-blue-700 mr-2'>#</span>{props.children}</h2>
    )
  }
  if (props.variant === 'h3') {
    return (
      <h3 {...others} className='text-xl font-bold py-2 '><span className='text-blue-700 mr-2'>|</span>{props.children}</h3>

    )
  }
  return <p className='py-2 dark:text-gray-400'>{props.children}</p>
}

export default Typography
