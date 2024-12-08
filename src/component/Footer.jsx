import React from 'react'
import {Github, Instagram, Linkedin} from "lucide-react"

const Footer = () => {
  return (
    <div className='bg-gray-800 flex flex-col justify-center p-4 items-center gap-6'>
      <h1 className='text-2xl text-center text-white font-semibold'>Let's Connect: Follow My Journey Across the Web:</h1>
      <ul className='text-white flex gap-4'>
        <li><Linkedin/></li>
        <li><Instagram/></li>
        <li><a href="https://github.com/Mahavir745" target='_blank'><Github/></a></li>
      </ul>
      <p className='text-white text-center w-[300px]'>Passionate about Full Stack Developer, I’m always eager to connect, collaborate, and share innovative ideas. As an open-source enthusiast, I love building clean, scalable code and contributing to meaningful projects. Follow my journey as I explore and create in the world of tech and design across LinkedIn, GitHub, and Instagram.</p>
    </div>
  )
}

export default Footer