'use client'
import { links } from '@/consts/links'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
const InputSwitch = ({ darkMode, setDarkMode }:any) => {
  // localstorage
  useEffect(() => {
    console.log("🚀 ~ file: Navbar.tsx ~ line 65 ~ useEffect ~ localStorage.getItem('dark')"); localStorage.getItem('dark')
    const isDark = localStorage.getItem('dark')
    if (isDark) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [setDarkMode])
  const handleChangeInputChecked = (e: any) => {
    setDarkMode(e.target.checked)
    if (e.target.checked) {
      localStorage.setItem('dark', 'true')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.removeItem('dark')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        onChange={handleChangeInputChecked}
        checked={darkMode}
        type='checkbox' className='sr-only peer'
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      <span className=' w-12 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>{darkMode ? 'Dark' : 'Light'}</span>
    </label>
  )
}

export default Navbar
