import { Moon, Sun } from 'lucide-react'
import React from 'react'

const Header = ({onButtonClick,darkmode,projectsLimts}) => {
  return (
    <div className='bg-gray-900 w-full h-[180px] flex items-center p-2 justify-around'>
      <div className='sm:w-[400px] md:w-[600px] rounded p-2'>
        <h1 className='md:text-6xl sm:text-5xl font-extrabold text-red-500'>React <span className='text-yellow-400 font-light md:text-8xl sm:text-6xl'>{projectsLimts}</span> Projects</h1>
        <p className='text-white font-extrabold text-right mt-2'>Managed by Mveer745</p>
      </div>
      <button className='text-white' onClick={onButtonClick}>{darkmode? <Sun/>: <Moon/>}</button>
    </div>
  )
}

export default Header