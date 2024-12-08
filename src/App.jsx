import React, { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Container from './component/Container'
import "./App.css"

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
    <div className={`${darkmode && "bg-black"}`}>
      <Header onButtonClick={darkMode} darkmode = {darkmode} projectsLimts={howManyProjects}/>
      <Container />
      <Footer />
    </div>
  )
}

export default App