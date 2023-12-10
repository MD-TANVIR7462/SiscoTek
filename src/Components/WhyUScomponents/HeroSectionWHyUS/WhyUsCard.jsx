import React from 'react';

const WhyUsCard = ({data}) => {
   
    return (
        <div className="card rounded-none grid xl:grid-cols-2  w-[92%] p-2 md:w-[90%]  lg:w-[85%] xl:w-[80%] mx-auto gap-[2%]  shadow-md md:p-5  ">
      <figure className='md:order-2'>
          <img src={data.image} alt="Album" className='md:w-[90%] lg:w-[92%] w-full  xl:w-[86%] mx-auto  md:h-[45dvh] lg:[45dvh] xl:h-[42dvh]   '  />
        </figure>
        <div className="md:card-body  md:order-1 ">
          <h2 className="card-title md:text-4xl mt-5 text-2xl " >
            {data.title}
          </h2>
          <p className="my-5   text-sm font-semibold text-gray-600 md:text-sm lg:text-base">
          {data.discription2}
          </p>
       
          <p className="  text-sm text-gray-500 md:text-sm lg:text-base">
           {data.description}
          </p>
        </div>
       
      </div>
    );
};

export default WhyUsCard;