import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from "./components/loginpage/Login";
import  "../src/index.css"
import Signup from "./components/signuppage/Signup";
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
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <RouterProvider router={router}/>
);
