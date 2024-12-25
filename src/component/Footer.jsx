import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col justify-center p-4 items-center gap-6'>
      <h1 className='text-2xl text-center text-white font-semibold'>Let's Connect: Follow My Journey Across the Web:</h1>
      <ul className='text-white flex gap-4'>
        <li><a href="https://www.linkedin.com/in/mahavir-kumar-mahato-4a6754297" target='_blank'><FaLinkedin className='text-4xl '/></a></li>
        {/* <li><Instagram/></li> */}
        <li><a href="https://github.com/Mahavir745" target='_blank'><FaGithub className='text-4xl '/></a></li>
      </ul>
      <p className='text-white text-center w-[300px]'>Passionate about Full Stack Developer, I’m always eager to connect, collaborate, and share innovative ideas. As an open-source enthusiast, I love building clean, scalable code and contributing to meaningful projects. Follow my journey as I explore and create in the world of tech and design across LinkedIn, GitHub, and Instagram.</p>
    </div>
  )
}

export default Footer