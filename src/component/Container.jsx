import React, { useContext } from 'react'
import Project from './Project'
import { dataProviderContainer } from '../store/all_data_store'
import BasicSection from './BasicSection'
import ApISection from './ApISection'
import BonusSection from './BonusSection'


const Container = ({darkMode}) => {
  const {projectDetails} = useContext(dataProviderContainer)

  return (
    <div className='h-[auto] flex gap-3 justify-center m-4 flex-wrap' >
      <BasicSection darkMode={darkMode}/>
      <ApISection darkMode={darkMode}/>
      <BonusSection darkMode={darkMode}/>
     {/* {projectDetails.map((project)=> <Project project={project} key={project.id} darkMode={darkMode}/> )} */}
    </div>
  )
}

export default Container