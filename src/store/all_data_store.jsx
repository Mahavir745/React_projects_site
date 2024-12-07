import { createContext, useReducer } from "react";


export const dataProviderContainer = createContext({
  projectDetails:[],
  addNewProject:()=>{}
})

const DEFAULT_DATA = [
  {
    title: "Todo List",
    details: "I built a to-do list app using React. It lets users add and delete tasks easily. The app is simple to use and helps me practice React basics, like managing state and creating components. It’s a great project to learn how to make interactive web apps.",
    project_img: "https://drive.google.com/file/d/1HvOmH0gR6FBWnCZyGQ_MURqtLALpU7Rv/preview",
    live_link: "https://todolist-phi-snowy.vercel.app/ ",
    source_link: "https://github.com/Mahavir745/todolist",
    id: 100,
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img:"https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 101
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: "https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 102
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: "https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 103
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: "https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 104
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: "https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 105,
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img:"https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 106
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: "https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 107
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: "https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 108
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: "https://drive.google.com/file/d/1PIPFQd-28Gttuz5HJjzfYLMoHelY1yYS/preview",
    live_link: "url",
    source_link: "url",
    id: 109
  },
]


function HandleProjectReducer(currentData,action){

  let newDataListed = currentData;
  
  if(action.type === 'ADD_PROJECT'){
    newDataListed = [...action.payload,currentData]
  }

  return newDataListed
}


const DataStoreProvider = ({children})=>{

  const [projectDetails,dispatchedProjet] = useReducer(HandleProjectReducer, DEFAULT_DATA)

  const addNewProject = (project)=>{
    dispatchedProjet({
      type: "ADD_PROJECT",
      payload: project
    })
  }

  return(
    <dataProviderContainer.Provider value={{
      projectDetails,
      addNewProject,
    }}>
      {children}
    </dataProviderContainer.Provider>
  )
}




export default DataStoreProvider;