import React from 'react'
import Project from './Project'
import { ProjectsData } from './ProjectsDetails'


const Container = () => {
  console.log(ProjectsData)
  return (
    <div className='h-[auto] flex gap-3 justify-center m-4 flex-wrap' >
     {ProjectsData.map((project)=> <Project project={project}/> )}
    </div>
  )
}

export default Container