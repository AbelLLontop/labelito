'use client'
import { links } from '@/consts/links'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import InputSwitch from './InputSwitch'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <section className='container max-w-6xl mx-auto px-8 sticky top-0 bg-white dark:bg-slate-900'>
      <header className='py-4 flex justify-between items-center'>
        <Link
          href='/'
        >

          <Image
            src={darkMode ? '/logo_dark.png' : '/logo_light.png'}
            alt='Picture of the author'
            width={140}
            height={32}
          />
        </Link>
        <nav className='flex gap-4'>
          {links.map(({ label, route }) => (
            <Link
              key={route}
              href={route}
              className='hover:underline cursor-pointer dark:text-gray-400'
            >
              {label}
            </Link>

          ))}

          <InputSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>

      </header>
    </section>
  )
}

export default Navbar
