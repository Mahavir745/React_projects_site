import React from 'react'
import Project from './Project'
import { ProjectsData } from './ProjectsDetails'


const Container = () => {
  return (
    <div className='h-[auto] flex gap-3 justify-center m-4 flex-wrap' >
     {ProjectsData.map((project)=> <Project project={project} key={project.id}/> )}
    </div>
  )
}

export default Container