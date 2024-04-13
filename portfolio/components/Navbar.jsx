'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaWindowClose, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const pathname = usePathname()
  console.log(pathname)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-white'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        <Image src="/assets/Logo.png" alt="/" width={75} height={25} />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/#home'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <FaBars size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' : 'hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full justify-between items-center'>
              <Image src="/assets/Logo.png" alt="/" width={87} height={35} />
              <div onClick={handleNav}>
                <FaWindowClose size={35} />
              </div>
            </div>
            <div className='py-8 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/#home'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                </Link>
              </ul>
              <div className='pt-40'>
                <h3 className='uppercase'>Let's connect</h3>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                    <FaLinkedin />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                    <FiMail />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar