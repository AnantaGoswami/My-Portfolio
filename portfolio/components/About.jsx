import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='hero max-w-[1240px] m-auto md:grid grid-cols-2 gap-10' >
        <div className='img col-span-1 m-auto h-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded' src="/assets/About.jpg" alt="/" />
        </div>
        <div className='text col-span-1'>
          <p className='uppercase py-4 text-2xl tracking-wider font-bold text-gray-500'>About Me</p>
          <h2 className='uppercase py-2'>Front-end Developer</h2>
          <p className='py-2 text-gray-600 text-lg'>Hello, <br/> <br/> I'm <span className='font-bold text-gray-500'>Ananta Goswami</span>, a Frontend Developer with two years of experience. I specialize in crafting exceptional digital experiences, primarily using React/Next.js paired with Tailwind CSS. 
          <br/> Additionally, I have practical experience with backend technologies such as PHP and MySQL. My current focus is on developing responsive front-end web applications while continuing to expand my knowledge in both frontend and backend technologies.</p>
        </div>
      </div>
    </div>
  )
}

export default About