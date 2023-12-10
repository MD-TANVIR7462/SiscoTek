import React from 'react';

import { FaBorderStyle, FaBuilding, FaCubes, FaNetworkWired, FaUserTie } from "react-icons/fa";

const ServicesCard = () => {
  
    return (
    <div className='grid  gap-12 md:grid-cols-2 lg:grid-cols-3'>
            <div className="border rounded-sm   bg-base-100 shadow-md p-6">
        <figure className=" text-6xl text-blue-500 my-2">
        <FaUserTie />
        </figure>
        <div className=" ">
          <h2 className="card-title cursor-pointer hover:text-blue-500 ">Foundation</h2>
          <p className='text-gray-400 font-semibold my-3'>Due to our ability to use our specific skills to provide the foundation for any project, we are largely regarded as the finest on the market. Our abilities enable us to provide our clients with exceptional solutions regardless of the project.</p>
        
        </div>
      </div>
        <div className="border rounded-sm   bg-base-100 shadow-md p-6">
        <figure className=" text-6xl text-blue-500 my-2">
        <FaCubes />
        </figure>
        <div className=" ">
          <p className="card-title cursor-pointer hover:text-blue-500 ">Superstructure</p>
          <p className='text-gray-400 font-semibold my-3'>We are committed to sustaining these standards constantly because we recognize how important it is to have a safe and excellent working environment. We always come out on top.</p>
        
        </div>
      </div>
        <div className="border rounded-sm   bg-base-100 shadow-md p-6">
        <figure className=" text-6xl text-blue-500 my-2">
 
           <FaBuilding />
     
        </figure>
        <div className=" ">
          <h2 className="card-title cursor-pointer hover:text-blue-500 ">Excavation</h2>
          <p className='text-gray-400 font-semibold my-3'>We can complete our project without paying costly fees to subcontractors because of our cutting-edge machinery. This enables us to do jobs rapidly and effectively, guaranteeing that projects are finished on schedule and under budget.</p>
        
        </div>
      </div>
        <div className="border rounded-sm   bg-base-100 shadow-md p-6">
        <figure className=" text-6xl text-blue-500 my-2 ">
        <FaNetworkWired />
        </figure>
        <div className=" ">
          <h2 className="card-title cursor-pointer hover:text-blue-500 ">Support for Excavation</h2>
          <p className='text-gray-400 font-semibold my-3'>A strong relationship between Kartel Associates and our suppliers provides cost-effectiveness, prompt delivery, and avoidance of setbacks on the project site. This partnership has been going strong and has helped us streamline our process.</p>
        
        </div>
      </div>
        <div className="border rounded-sm   bg-base-100 shadow-md p-6">
        <figure className=" text-6xl text-blue-500 my-2">
        <FaBorderStyle />
        </figure>
        <div className=" ">
          <h2 className="card-title cursor-pointer hover:text-blue-500 ">Design</h2>
          <p className='text-gray-400 font-semibold my-3'>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand….</p>
        
        </div>
      </div>
    </div>
    );
};

export default ServicesCard;
