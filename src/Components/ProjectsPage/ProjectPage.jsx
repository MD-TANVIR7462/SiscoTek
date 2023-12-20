import ServicesBenner from "../ServicesPage/servicesComponents/ServicesBenner";
import TabsKeep from "./ProjectPageComponents/Tabs";


const ProjectPage = () => {
    return (
        <div>
             <ServicesBenner img={"https://i.ibb.co/8rq16zQ/istockphoto-1469653478-2048x2048.jpg"}></ServicesBenner>
     <TabsKeep></TabsKeep>
        </div>
    );
};

export default ProjectPage;
{/* <div 
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
</div> */}