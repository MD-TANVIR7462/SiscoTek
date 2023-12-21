import { Navbar } from "keep-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navitems = (
    <>
      <Link to={"/"}>
        <p className=" text-white cursor-pointer py-2 px-1 xl:text-lg  hover:bg-white rounded-sm  lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          Home
        </p>
      </Link>

      <Navbar.Divider></Navbar.Divider>
      <Link to={"/why-us"}>
        <p className=" text-white cursor-pointer py-2 px-1  xl:text-lg  hover:bg-white rounded-sm  lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          Why US
        </p>
      </Link>

      <Navbar.Divider></Navbar.Divider>
      <Link to={"/services"}>
        <p className=" text-white cursor-pointer py-2 px-1  xl:text-lg   hover:bg-white rounded-sm  lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          Services
        </p>
      </Link>

      <Navbar.Divider></Navbar.Divider>
      <Link to={"/projects"}>
        <p className=" text-white cursor-pointer py-2 px-1  xl:text-lg   hover:bg-white rounded-sm  lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          Projects
        </p>
      </Link>
      <Navbar.Divider></Navbar.Divider>
      <Link to={"/about-us"}>
        <p className=" text-white cursor-pointer py-2 px-1  xl:text-lg   hover:bg-white rounded-sm  lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          About Us
        </p>
      </Link>
      <Navbar.Divider></Navbar.Divider>
      <Link to={"/contact-us"}>
        <p className=" text-white cursor-pointer py-2 px-1  xl:text-lg   hover:bg-white rounded-sm  lg:py-[1dvh] hover:text-black  lg:px-[3dvw] hover:font-semibold ">
          Contact Us
        </p>
      </Link>
    </>
  );
  return (
    <Navbar
      collapseType={true}
      fluid={true}
      className=" sticky w-full   top-0 z-10 bg-black lg:bg-blue-950  backdrop-blur-10"
    >
      <Navbar.Container className="flex items-center  justify-between ">
        <p className="text-white  font-bold pl-3 lg:hidden text-2xl">KARTEL</p>

        <Navbar.Container className="flex items-center mx-auto ">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center md:justify-between py-[1%] "
          >
            {navitems}
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar" className="bg-black">
            <Navbar.Container tag="ul" className="flex flex-col  ">
              {navitems}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <span className="lg:hidden p-1 !text-white bg-white rounded-sm">
            <Navbar.Toggle />
          </span>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavBar;
{
  /* <Navbar.Brand>
            <img
              src="https://i.ibb.co/RPLfPCd/Kartel.png"
              alt="keep"
              width="100"
              height="40"
            />
          </Navbar.Brand> */
}
