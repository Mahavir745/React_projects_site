import React, { useContext } from 'react'
import { dataProviderContainer } from '../store/all_data_store'
import Project from './Project'
import { FaCentSign } from 'react-icons/fa6'


const ApISection = ({darkMode}) => {

  const {projectDetails} = useContext(dataProviderContainer)
  
  return (
    <div className={`rounded-md shadow-md shadow-gray-300 bg-white mb-[140px]`} >
      <h1 className='text-3xl p-4 bg-orange-600 text-white font-semibold textshadow'>let's Understand the concept of API  </h1>
    <div className='h-[auto] flex gap-3 justify-center m-4 flex-wrap' >
    {projectDetails.map((project)=> {
      if(project.section === "ApiSection"){
       return <Project project={project} key={project.id} darkMode={darkMode}/>
      }
    } )}
   </div>
   </div>
  )
}

export default ApISection