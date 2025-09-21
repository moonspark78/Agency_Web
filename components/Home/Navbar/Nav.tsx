import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { GrTechnology } from 'react-icons/gr'

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-blue-900'>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col'>
            <GrTechnology className='h-6 w-6 text-white'/>
          </div>
          <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>Agency Management</h1>
        </div>
        {/* NavLinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {NavLinks.map((link) => {
            return <Link 
            href={link.url} 
            key={link.id} 
            className='text-white text-lg hover:text-pink-300 font-semibold transition-all duration-200'>
              <p>{link.label}</p>
            </Link>
          })}
        </div>
        {/* Button */}
        <div className='flex items-center space-x-4'>
          {/* 1st button create account button */}
            <a href="#" className='px-5 py-2.5 relative rounded group font-medium text-white inline-block'>
              <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br
               from-purple-600 to-blue-500'></span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Nav