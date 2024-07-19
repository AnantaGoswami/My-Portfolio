import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projectList = [
    {
        name: "Shopdotcom",
        description: "Shopdotcom is an ecommerce website.",
        image: "/assets/shop.png",
        github: "https://github.com/AnantaGoswami/shop.com.git",
        link: "https://shopdotcom.vercel.app/",
    },
    {
        name: "Frontend Bootcamp",
        description: "Frontend bootcamp is a website for online bootcamp for frontend web development.",
        image: "/assets/bootcamp.png",
        github: "https://github.com/AnantaGoswami/Frontend-bootcamp.git",
        link: "http://frontend-bootcamp.great-site.net/",
    },
    {
        name: "My Portfolio",
        description: "This is my personal portfolio website.",
        image:"/assets/myportfolio.png",
        github:"https://github.com/AnantaGoswami/My-Portfolio.git",
        link:"https://anantagoswami.vercel.app/",
    },
    {
        name: "Weather App",
        description: "A weather app that gives us the current weather info for the city we search for.",
        image:"/assets/weather.png",
        github:"https://github.com/AnantaGoswami/weatherApp.git",
        link:"https://tellmeweather.vercel.app/",
    }
]

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-20'>
                <p className='uppercase text-2xl tracking-widest p-4 font-bold text-gray-500'>Projects</p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projectList.map((project) => {
                        return (
                            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                                <Image className='rounded-xl shadow-xl group-hover:opacity-10' src={project.image} alt="/" width={600} height={600} />
                                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                    <h3 className='text-2xl text-white tracking-wider text-center'>{project.name}</h3>
                                    <Link href={project.link} target='_blank'>
                                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Demo</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects