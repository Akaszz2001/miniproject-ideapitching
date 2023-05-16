/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";

function Navbar() {
  
  return (
    <div>
      <nav className="p-3 bg-cyan-200 shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <a href="/"><span className="text-2xl font-[Poppins] font-extrabold italic">
            <img
              className="h-12 inline rounded-xl"
              src="https://blogit.itu.dk/lucarossi/wp-content/uploads/sites/80/2019/09/1_ATVm5uCixG7ntr40XlQbrg-768x739.jpeg"
              alt=""
            />
            PITCHING
          </span></a>
          <span className="text-3xl cursor-pointer md:hidden block max-2"> 
          <ion-icon name="apps-outline"></ion-icon>
          </span>
        </div>
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-4 my my-6 md:my-0">
            <a href="/login" className="text-xl hover:text-cyan-500 duration-500">
              login
            </a>
          </li>
          <li className="mx-4 my my-6 md:my-0">
            <a href="/signup" className="text-xl hover:text-cyan-500 duration-500">
              signup
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
