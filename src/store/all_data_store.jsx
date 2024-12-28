import { createContext, useReducer } from "react";

import comming_soon from "../assets/assest_01.jpg";
import todo_list from "../assets/assest_02.png";
import profile_page from "../assets/assest_03.png";
import post_generator from "../assets/assest_04.png"
import expense_Tracker from "../assets/assest_05.png"
import task_manager from "../assets/assest_06.png"


export const dataProviderContainer = createContext({
  projectDetails:[],
  addNewProject:()=>{}
})

const DEFAULT_DATA = [
  {
    title: "Todo List",
    details: "I built a to-do list app using React. It lets users add and delete tasks easily. The app is simple to use and helps me practice React basics, like managing state and creating components. It’s a great project to learn how to make interactive web apps.",
    project_img: todo_list,
    live_link: "https://todolist-phi-snowy.vercel.app/ ",
    source_link: "https://github.com/Mahavir745/todolist",
    id: 100,
    section:"BasicSection",
  },
  {
    title: "Profile Page",
    details: "login and signup system with user-friendly validation. It allows new users to register and existing users to log in securely. Upon successful login, users are redirected to their unique profile page. The project demonstrates authentication, form validation, and routing in React.",
    project_img: profile_page,
    live_link: "https://user-profile-three-sigma.vercel.app/",
    source_link: "https://github.com/Mahavir745/userProfile",
    id: 101,
    section:"BasicSection",
  },
  {
    title: "Post Generator",
    details: "I created a post generator using React JS and Bootstrap, where users can easily add posts by filling out a form. The app also loads some default posts from an API, so users can see existing posts when they visit the site.",
    project_img: post_generator,
    live_link: "https://post-generator-rho.vercel.app/",
    source_link: "https://github.com/Mahavir745/post-generator",
    id: 102,
    section:"BasicSection",
  },
  {
    title: "Expense Tacker",
    details: "I built an expense tracker app with React.js, featuring an attractive login/signup process and a user-friendly dashboard. Users can add money, track their expenses, and easily manage their finances through a simple input section.",
    project_img: expense_Tracker,
    live_link: "https://expense-tracker-ten-sable.vercel.app/",
    source_link: "https://github.com/Mahavir745/Expense_tracker",
    id: 103,
    section:"BasicSection",
  },
  {
    title: "Task Manager",
    details: "I created a React.js task manager with features like adding, editing, deleting, and completing tasks, filtering by priority and status, progress tracking, and pagination for efficient task management.",
    project_img: task_manager,
    live_link: "https://task-manager-swart-six.vercel.app/",
    source_link: "https://github.com/Mahavir745/task-manager",
    id: 104,
    section: 'ApiSection',
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: comming_soon,
    live_link: "url",
    source_link: "url",
    id: 105,
    section: 'ApiSection',
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img:comming_soon,
    live_link: "url",
    source_link: "url",
    id: 106,
    section: 'ApiSection',
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: comming_soon,
    live_link: "url",
    source_link: "url",
    id: 107,
    section: 'ApiSection',
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: comming_soon,
    live_link: "url",
    source_link: "url",
    id: 108,
    section:"BonusSection"
  },
  {
    title: "Comming Soon",
    details: "Comming Soon",
    project_img: comming_soon,
    live_link: "url",
    source_link: "url",
    id: 109,
    section:"BonusSection"
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