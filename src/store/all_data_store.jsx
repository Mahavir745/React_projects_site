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
    title: "Profile Page",
    details: "login and signup system with user-friendly validation. It allows new users to register and existing users to log in securely. Upon successful login, users are redirected to their unique profile page. The project demonstrates authentication, form validation, and routing in React.",
    project_img:"https://drive.google.com/file/d/1E_AmgfTvN4zNmkvqP421DClEZT88QaDr/preview",
    live_link: "https://user-profile-three-sigma.vercel.app/",
    source_link: "https://github.com/Mahavir745/userProfile",
    id: 101
  },
  {
    title: "Post Generator",
    details: "I created a post generator using React JS and Bootstrap, where users can easily add posts by filling out a form. The app also loads some default posts from an API, so users can see existing posts when they visit the site.",
    project_img: "https://drive.google.com/file/d/1w30-0ZJA30t4DTD4i1lK67vfJ8yJJ0Rq/preview",
    live_link: "https://post-generator-rho.vercel.app/",
    source_link: "https://github.com/Mahavir745/post-generator",
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