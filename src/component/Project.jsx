import React from 'react'

const Project = ({project}) => {
  return (
    <div className='w-[400px] h-[500px] border rounded-xl bg-gray-100'>
      <div className='p-2 flex flex-col justify-center gap-2'>
        <h1 className='text-2xl text-center text-teal-900 font-semibold'>{project.title} </h1>
        <details className='text-center text-blue-800 font-semibold text-[14px] cursor-pointer '>
          <p className=' h-[100px] text-[13px] overflowContainer p-4  text-gray-700'>{project.details}</p>
        </details>
        <img src={`${project.project_img}`} className='h-[200px] rounded-md' alt="" />
        <div className='text-white flex justify-center items-center gap-6 bg-gray-900 p-5 h-[100px]' >
        <a href={`${project.live_link}`} target='_blank'><button className='bg-teal-700 pl-8 pr-8 pt-2 pb-2 rounded'>Live</button></a>
        <a href={`${project.source_link}` } target='_blank'><button className='bg-blue-700 pl-8 pr-8 pt-2 pb-2 rounded'>Source Code</button></a>
        </div>
      </div>
    </div>
  )
}

export default Project