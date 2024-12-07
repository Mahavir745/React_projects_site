import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-900 w-full h-[180px] flex items-center p-2'>
      <div className='  rounded p-2'>
        <h1 className='text-6xl font-extrabold text-red-500'>React <span className='text-yellow-400 text-8xl'>10</span> Projects</h1>
        <p className='text-white font-extrabold text-right mt-2'>Managed by Mveer745</p>
      </div>
    </div>
  )
}

export default Header