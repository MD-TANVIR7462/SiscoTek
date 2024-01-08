import React from "react";

import BennerText from "../../Utils/BennerText";
const ServicesBenner = ({ img, text }) => {
  return (
    <>
      <div
        className="bg-cover bg-center md:w-full sm:min-h-[200px]  md:min-h-[270px]  lg:min-h-[360px] min-h-[130px]   flex justify-center items-center  md:bg-opacity-90"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <BennerText text={text}></BennerText>
      </div>
    </>
  );
};

export default ServicesBenner;
