import React from "react";

const ServicesHero = () => {
  return (
    <div>
      <h1 className="text-6xl mt-12 mb-6 ">Services</h1>
      <h3 className="text-md font-medium text-gray-500">KARTEL offers a progressive approach to design, project management, and general <br></br> contracting; as well as providing full service development in cooperation with our clients.</h3>
      <div className="card rounded-none grid xl:grid-cols-2 my-12   md:gap-[2%]  shadow-md md:p-5  ">
        <figure className="md:order-2 ">
          <img
            src="https://i.ibb.co/1TbBFxC/services-01-610x390.jpg"
            alt="Album"
            className="md:w-[100%] lg:w-[92%] w-full  xl:w-[86%] mx-auto  md:h-[45dvh] lg:[45dvh] xl:h-[42dvh]   "
          />
        </figure>
        <div className=" flex  flex-col justify-center md:order-1 ">
            <p className="font-semibold ">OUR AREA OF EXPERTISE</p>
          <p className="   text-sm font-semibold text-gray-700 md:text-md lg:text-2xl my-4">
            At KARTEL , we love what we do. That's why working with us, we can
            promise you top quality results and unparalleled customer service.
          </p>

          <p className=" font-semibold text-sm text-gray-500 md:text-sm lg:text-base ">
            Learn more about what we can offer you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
