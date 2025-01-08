import React, { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Container from './component/Container'
import "./App.css"
import DataStoreProvider from './store/all_data_store'

const App = () => {
  const [darkmode, setDarkmode] = useState(false)

  function darkMode() {
    if(darkmode){
      setDarkmode(false)
    }
    else{
      setDarkmode(true)
    }
  }
  
  const howManyProjects = 10

  return (
    <DataStoreProvider>
    <div className={`${darkmode && "bg-gray-800"}`}>
      <Heander onButtonClick={darkMode} darkmode = {darkmode} projectsLimts={howManyProjects}/>
      <Container darkMode={darkmode}/>
      <Footer />
    </div>
    </DataStoreProvider>
  )
}

export default App