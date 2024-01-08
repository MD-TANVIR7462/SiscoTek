import React from 'react';
import { Link } from 'react-router-dom';

const BennerText = ({text}) => {
    return (
        <div className="text-center md:flex hero-overlay  bg-opacity-50  w-[40%]  sm:min-h-[200px]  md:min-h-[270px]  lg:min-h-[360px] items-center md:w-[100%]  mx-auto">
        <p className='text-white px-4 py-1 md:px-6 md:py-2 bg-blue-500 text-sm  sm:text-[12px] md:text-base  md:mb-[3%] md:ml-[20dvh] mt-auto '> {<Link to={'/'} className='hover:text-blue-950 '>HOME </Link> } / {text}  </p>
      </div>
    );
};

export default BennerText;