import React from "react";
import { useState } from "react";


const Navi = () => {
  const [isOpen, setIsopen] = useState(false);

  
  const toggleMenu = () => {
    setIsopen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="flex fixed top-0 w-full lg:justify-evenly justify-between items-center bg-[#1E1E1E] text-white h-20">
      <div className="flex justify-center items-center gap-2">
        <img className="h-14 ml-9" src="./logo.png" alt="logo" />
        <p className="font-semibold text-3xl">MockMate</p>
      </div>
      <ul className="hidden lg:flex justify-evenly items-center gap-8 mr-9 font-semibold">
        <li><a href="/">Home</a></li>
        <li><a href="/Premium">Try Premium</a></li>
        <li><a href="/About">About Us</a></li>
        <li className="border-1 border-white rounded-2xl p-3 hover:bg-white hover:text-black hover:font-semibold transition-all duration-300">
          <a href="/Login">Login</a>
        </li>
      </ul>

      <button className="lg:hidden mr-9" onClick={toggleMenu}>
        <i className={` ${isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} hover:cursor-pointer text-xl`}></i>
      </button>

      <div className={`absolute z-1 top-20 left-0 w-full ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden lg:hidden transition-all duration-200 shadow-xl`}>
        <ul className="bg-[#121212] flex flex-col gap-4 p-3">
          <li><a href="/">Home</a></li>
          <li><a href="/Premium">Try Premium</a></li>
          <li><a href="/About">About Us</a></li>
          <li className="border-1 border-white rounded-2xl p-3 hover:bg-white hover:text-black hover:font-semibold transition-all duration-300">
            <a href="/Login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navi;
