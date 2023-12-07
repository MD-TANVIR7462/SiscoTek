import React from 'react';

const TeamCard = ({name,position,discription,image}) => {
    return (
        <div className="border rounded-sm p-5  bg-base-100 shadow-xl">
        <figure className=" ">
          <img src={image} alt="image" className="rounded-xl h-[30%] w-[30%]" />
        </figure>
        <div className=" ">
          <h2 className="card-title">{name}</h2>
          <p className='text-gray-400 font-semibold my-1'>{position}</p>
          <p className='text-gray-500 text-sm'>{discription}</p>
        </div>
      </div>
    );
};

export default TeamCard;