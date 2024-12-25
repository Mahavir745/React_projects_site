import React, { useContext } from 'react'
import { dataProviderContainer } from '../store/all_data_store'
import Project from './Project'

const BonusSection = ({darkMode}) => {

  const {projectDetails} = useContext(dataProviderContainer)
  

  return (
    <div className={`rounded-md shadow-md shadow-gray-300 bg-white mb-[200px]`} >
      <h1 className='text-3xl p-4 bg-blue-700 text-white font-semibold textshadow textshadow'>Bonus Projects</h1>
    <div className='h-[auto] flex gap-3 justify-center m-4 flex-wrap' >
    {projectDetails.map((project)=> {
      if(project.section === "BonusSection"){
       return <Project project={project} key={project.id} darkMode={darkMode}/>
      }
    } )}
   </div>
   </div>
  )
}

export default BonusSection