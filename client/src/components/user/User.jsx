import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
function User() {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000/user").then((res) => {
      if (res.data.valid === false) {
        navigate("/login");
      } else {
        setUser(res.data.name);
        setId(res.data.id)
      }
    });
  });
  return (
    <div>
      <Navbar data={user} />
     
    <div className="flex flex-col lg:flex-row mt-3">
        <div className="lg:w-1/4 w-full bg-white p-10 justify-center sm:text-xl rounded-md">
            <div className="mb-10 cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png" alt=""></img>
            </div>

          
        </div>

        <div className="lg:w-3/4 w-full bg-indigo-300 p-10 mt-3 lg:mt-0 lg:ml-3 rounded-md">
            <div className="sm:justify-center justify-normal font-serif font-semibold sm:text-2xl text-lg">
                <h1 className="mb-4 cursor-default">Full Name:{user}</h1>
                <h1 className="mb-4 font-medium">{}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                        <h1 className="cursor-default">ID:{id}</h1>
                       
                    </div>
                  
                </div>
                
               </div>
        </div>
    </div>
    </div>
  );
}

export default User;
