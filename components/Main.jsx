import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BsPersonLinesFill } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET's BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-500'>Hi, I'm <span className='text-black'>Ananta</span></h1>
          <h1 className='text-gray-500'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto text-xl'>based in New Delhi, India. 📍</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href="https://www.linkedin.com/in/anantagoswami/" target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-xl hover:scale-125 ease-in duration-300'>
                <FaLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/AnantaGoswami/" target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-xl hover:scale-125 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:anantagoswamiss@gmail.com">
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-xl hover:scale-125 ease-in duration-300'>
                <FiMail />
              </div>
            </Link>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-xl hover:scale-125 ease-in duration-300'>
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main