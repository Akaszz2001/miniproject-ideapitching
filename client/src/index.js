import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'  
import Login from "./components/loginpage/Login";
import  "../src/index.css"
import Signup from "./components/signuppage/Signup";
import User from "./components/user/User";
import Ideaposting from "./components/Ideaposting/Ideaposting";
import Home from "./components/mentors/home/Home";
import Requests from "./components/mentors/home/Requests";
import Review from "./components/mentors/home/Review";
import Userideas from "./components/user/Userideas";
import Editideas from "./components/user/Editideas";

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:"/login",
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
      path:'/user',
      element:<User/>
  },
  {
    path:'/ideaPosting',
    element:<Ideaposting/>
  },{
    path:'/admin',
    element:<Home/>
  },{
    path:'/requests',
    element:<Requests/>
  },{
    path:`/review`,
    element:<Review/>
  },{
    path:'/userIdeas',
    element:<Userideas/>
  },{
    path:'/editIdea',
    element:<Editideas/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <RouterProvider router={router}/>
);
