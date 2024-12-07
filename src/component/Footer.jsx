import React from 'react'
import {Github, Home, Instagram} from "lucide-react"

const Footer = () => {
  return (
    <div className='bg-gray-800 flex justify-center p-4 items-center gap-6'>
      <h1 className='text-2xl text-center text-white'>Links:</h1>
      <ul className='text-white flex gap-4'>
        <li><Home/></li>
        <li><Instagram/></li>
        <li><Github/></li>
      </ul>
    </div>
  )
}

export default Footer