'use server';


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navitems = (
    <>
     <Link to={'/'}   >
     <li className=" text-white lg:text-yellow-400 hover:bg-gray-700    rounded-md font-semibold text-xl">
        <a>Home</a>
      </li>
     </Link  >
     <Link to={"/why-us"}  >
     <li className=" text-white lg:text-yellow-400 hover:bg-gray-700   rounded-md font-semibold text-xl">
        <a>Why Us</a>
      </li>
     </Link >
     <a >
     <li className=" text-white lg:text-yellow-400 hover:bg-gray-700  rounded-md font-semibold text-xl">
        <a>Services</a>
      </li>
     </a>
     <a >
     <li className=" text-white lg:text-yellow-400 hover:bg-gray-700    rounded-md font-semibold text-xl">
        <a>Projects</a>
      </li>
     </a>
     <a >
     <li className=" text-white lg:text-yellow-400 hover:bg-gray-700   rounded-md font-semibold text-xl">
        <a>About Us</a>
      </li>
     </a>
     <a >
     <li className=" text-white lg:text-yellow-400 hover:bg-gray-700    rounded-md font-semibold text-xl">
        <a>Contact Us</a>
      </li>
     </a>
    </>
  );
  return (
    <div 
      className={`navbar  ${
        isScrolled ? "shadow-2xl" : "bg-none"
      } md:py-6 md:px-16 fixed top-0 z-10`}
      style={
         {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }
       
      }
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          
          <ul
            tabIndex={0}
            className="menu menu-md md:menu-lg dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"style={
                {
                     backgroundColor: "	#30246c",
                     backdropFilter: "blur(200px)",
                   }
              
             }
          >
            {navitems}
          </ul>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu  menu-lg menu-horizontal gap-2 px-5">{navitems}</ul>
      </div>
      <div className="navbar-end">
       
      </div>
    </div>
  );
};

export default NavBar;

