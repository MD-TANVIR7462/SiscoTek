'use client';

const Category = ({ text, discription, img }) => {
  return (
    <div className="mb-3 md:mb-0">
      <div className="relative bg-white rounded-none overflow-hidden cursor-pointer shadow-lg ">
        <img
          src={img}
          alt=""
          className="w-full h-[350px] object-cover scale-100 transition-transform duration-1000"
        />

        <div className="p-4 absolute bottom-0 left-0 right-0 flex items-center bg-black bg-opacity-50 w-full h-full">
         <p className="pl-[13%] pr-[27%]">
         <h3 className="text-xl md:text-3xl font-semibold hover:text-yellow-300 text-white  mb-2 md:mb-3">
            {text}
          </h3>
          <p className="w-16 h-[3px] mb-3 bg-yellow-400"></p>

          <span className="flex justify-center text-base font-medium  text-white">{discription}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Category;
