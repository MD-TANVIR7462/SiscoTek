import React from 'react';

const TestmonialsCard = ({testmonial}) => {
    return (
        <div className="border rounded-sm   bg-gray-100 shadow-md p-8">
        <div className=" ">
          <p className='text-gray-800  mt-3 mb-6 text-2xl'>{testmonial.text}</p>
          <p className="card-title cursor-pointer">{testmonial.name}</p>
          <p className='text-gray-500'>{testmonial.position}</p>
        
        </div>
      </div>
    );
};

export default TestmonialsCard;