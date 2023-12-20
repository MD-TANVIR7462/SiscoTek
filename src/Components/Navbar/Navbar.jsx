import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
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
      <Link to={"/"} >
       <p className="text-white  px-auto lg:text-lg hover:bg-white rounded-sm  py-[1dvh] hover:text-black  px-[3dvw] ">Home</p>
      </Link>
      <Navbar.Divider></Navbar.Divider>
      <Link to={"/why-us"}>
      <p className="text-white  px-auto lg:text-lg hover:bg-white rounded-sm  py-[1dvh] hover:text-black  px-[3dvw] ">Why US</p>
      </Link>
      <Navbar.Divider></Navbar.Divider>
      <Link to={"/services"}>
     <p className="text-white  px-auto lg:text-lg hover:bg-white rounded-sm  py-[1dvh] hover:text-black  px-[3dvw] ">Services</p>
      </Link>
      <Navbar.Divider></Navbar.Divider>
      <Link to={"/projects"}>
     <p className="text-white  px-auto lg:text-lg hover:bg-white rounded-sm  py-[1dvh] hover:text-black  px-[3dvw] ">Projects</p>
      </Link>
      <Navbar.Divider></Navbar.Divider>
      <Link to={"/about-us"}>
     <p className="text-white  px-auto lg:text-lg hover:bg-white rounded-sm  py-[1dvh] hover:text-black  px-[3dvw] ">About Us</p>
      </Link>
      <Navbar.Divider></Navbar.Divider>
      <Link to={"/contact-us"}>
         <p className="text-white  px-auto lg:text-lg hover:bg-white rounded-sm  py-[1dvh] hover:text-black  px-[3dvw] ">Contact Us</p>
      </Link>

    </>
  );
  return (
    <Navbar
      fluid={true}
      className=" fixed w-full   top-0 z-10 bg-gray-600 md:bg-blue-950  backdrop-blur-10"
    >
      <Navbar.Container className="flex items-center  justify-between ">
      <Navbar.Toggle className="!text-white" />
        <Navbar.Container className="flex items-center mx-auto ">
    
     
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between py-[2%] "
          >
           {
            navitems
           }
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link  linkName="Home" href="/why-us" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
     

        
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavBar;
   {/* <Navbar.Brand>
            <img
              src="https://i.ibb.co/RPLfPCd/Kartel.png"
              alt="keep"
              width="100"
              height="40"
            />
          </Navbar.Brand> */}