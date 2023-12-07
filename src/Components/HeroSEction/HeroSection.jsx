import React from "react";

const HeroSection = () => {
  return (
    <div className="card rounded-none lg:grid grid-cols-2  w-[90%]  md:w-[80%] mx-auto gap-[6%]  my-[6%]">
      <figure>
        <img src="https://i.ibb.co/nRQDnV5/Superstructure.jpg" alt="Album" />
      </figure>
      <div className="md:card-body ">
        <h2 className="card-title md:text-3xl mt-5 text-2xl md:mt-0" >
          Leading the way in building and civil construction
        </h2>
        <p className="my-5   text-sm  text-gray-500 md:text-[15px] lg:text-lg">
          The Kartel Associates team has a combination of over 50 years of
          experience in the construction industry
        </p>
        <p className="  text-sm text-gray-500 md:text-[15px] lg:text-lg">
          Our primary goal is to exceed our customers’ expectations. This is
          accomplished by being selective of which projects we undertake,
          providing the highest quality of professionalism, and by maximizing
          productivity while minimizing waste. We strive to adhere to all codes
          and specific projects requirements.
        </p>
        <p className="  text-sm text-gray-500 md:text-[15px] lg:text-lg">
          Our talented workforce carries out our work using their in-depth
          knowledge and experience in all areas of construction while
          maintaining excellent people skills to aid in a smoothly run project.
          We take pride in employing individuals who have demonstrated a
          continuous growth in professional development, by successfully
          completing training seminars and Continuous Education Programs. It is
          understood that their personal growth contributes to the growth of our
          company.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
