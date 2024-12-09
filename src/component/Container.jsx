import React, { useContext } from 'react'
import Project from './Project'
import { dataProviderContainer } from '../store/all_data_store'


const Container = ({darkMode}) => {
  const {projectDetails} = useContext(dataProviderContainer)

  return (
    <div className='h-[auto] flex gap-3 justify-center m-4 flex-wrap' >
     {projectDetails.map((project)=> <Project project={project} key={project.id} darkMode={darkMode}/> )}
    </div>
  )
}

export default Container