import React, { useContext } from 'react'
import { dataProviderContainer } from '../store/all_data_store'
import Project from './Project'

const BasicSection = ({darkMode}) => {

    const {projectDetails} = useContext(dataProviderContainer)
  
  return (
    <div className={`rounded-md shadow-md shadow-gray-300 bg-white font-semibold mb-[140px] mt-[50px]`} >
      <h1 className='text-3xl text-white p-4 bg-teal-600 textshadow'>Understanding the concept of user Interface</h1>
    <div className='h-[auto] flex gap-3 justify-center m-4 flex-wrap' >
    {projectDetails.map((project)=> {
      if(project.section === "BasicSection"){
       return <Project project={project} key={project.id} darkMode={darkMode}/>
      }
    } )}
   </div>
   </div>
  )
}

export default BasicSection