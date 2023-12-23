import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const BennerWhyUs = () => {
    return (
        <>
         {/* <Parallax
      bgImage="https://i.ibb.co/5BjrbBX/49645706-wide-banner-illustration-of-buildings-under-construction-in-process.jpg"
      strength={300}
    >
<div className="text-center md:flex hero-overlay  bg-opacity-50 min-h-[240px]   md:min-h-[380px] items-center w-[100%]  mx-auto">
            
            </div>

    </Parallax> */}
        <div
          className="bg-cover bg-center md:w-full sm:min-h-[200px]  md:min-h-[270px]  lg:min-h-[360px] min-h-[130px]   flex justify-center items-center  md:bg-opacity-90"
          style={{
            backgroundImage: `url("https://i.ibb.co/5BjrbBX/49645706-wide-banner-illustration-of-buildings-under-construction-in-process.jpg")`,
          }}
        >
          <div className="text-center md:flex hero-overlay  bg-opacity-50 min-h-[130px]   sm:min-h-[200px]  md:min-h-[270px]  lg:min-h-[360px] items-center w-[100%]  mx-auto">
            <p className='text-white px-6 py-2 bg-blue-500 text-base mb-[3%] ml-[20dvh] mt-auto '> {<Link to={'/'} className='hover:text-blue-950 '>HOME </Link> } / WHY US  </p>
          </div>
        </div>
      </>
    );
};

export default BennerWhyUs;