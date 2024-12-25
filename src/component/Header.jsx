import { Moon, Sun } from 'lucide-react'
import React from 'react'

const Header = ({onButtonClick,darkmode,projectsLimts}) => {
  return (
    <div className={` w-full h-[180px] flex items-center p-2 justify-around ${darkmode ? "bg-gradient-to-r from-gray-800 via-purple-700 to-blue-600":"bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"}`}>
      <div className='sm:w-[400px] md:w-[600px] rounded p-2'>
        <h1 className={`md:text-7xl sm:text-4xl text-5xl  fontfamily ${darkmode?"text-red-500":"text-black"}`}>React <span className='text-yellow-400 font-light md:text-8xl sm:text-6xl'>{projectsLimts}</span> Projects</h1>
        <p className='text-white font-extrabold text-right mt-2 text-[10px] sm:text-xl'>Managed by Mveer745</p>
      </div>
      <button className='text-white' onClick={onButtonClick}>{darkmode? <Sun/>: <Moon/>}</button>
    </div>
  )
}

export default Header