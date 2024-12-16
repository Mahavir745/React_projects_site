import React from 'react'

const Project = ({project,darkMode}) => {
  return (
    <div className={`w-[360px] sm:w-[400px] h-[500px] border rounded-xl bg-gray-100 ${darkMode && "bg-gray-900"}`}>
      <div className='p-2 flex flex-col justify-center gap-2'>
        <h1 className={`text-2xl text-center text-teal-900 font-semibold ${darkMode && "text-white"}`}>{project.title} </h1>
        <details className='text-center text-blue-800 font-semibold text-[14px] cursor-pointer h-[140px] overflowContainer'>
          <p className={`text-[13px] p-4 text-left ${darkMode?"text-white":"text-teal-950"}`}>{project.details}</p>
        </details>
        <img src={`${project.project_img}`} className='rounded-2xl w-[240px] sm:w-[380px] h-[180px]'></img>
        <div className='text-white flex justify-center items-center gap-6 bg-gray-900 p-5 h-[100px]' >
        <a href={`${project.live_link}`} target='_blank'><button className='bg-teal-700 pl-8 pr-8 pt-2 pb-2 rounded'>Live</button></a>
        <a href={`${project.source_link}` } target='_blank'><button className='bg-blue-700 pl-8 pr-8 pt-2 pb-2 rounded'>Source Code</button></a>
        </div>
      </div>
    </div>
  )
}

export default Project