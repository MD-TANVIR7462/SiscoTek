import React from "react";

const AboutUsHero = () => {
  return (
    <div className="card rounded-none grid lg:grid-cols-2  items-center  w-[90%]  md:w-[80%] mx-auto md:gap-[4%] lg:gap-[2%]  my-[3%] ">
      <figure className="order-2">
        <img
          src="https://i.ibb.co/mBzPhXh/builder.webp"
          alt="IMG"
          className="w-[80%]"
        />
      </figure>
      <div className="md:card-body  gap-0">
        <h2 className="text-6xl font-semibold my-8">About Us</h2>
        <h2 className="card-title md:text-4xl  text-2xl ">
          KARTEL Associates – A Tradition Of Excellence
        </h2>
        <br />
        <p className="  text-sm text-gray-500 md:text-[12px] lg:text-lg">
          Kartel Associates has set a standard in construction for a number of
          years under the leadership of our team. The company’s management
          framework is comprised of construction professionals of various
          disciplines including personnel in estimating, project scheduling,
          project management, field management, and certified concrete safety
          managers. Our field crews consist of skilled machine operators,
          lathers, carpenters, concrete masons, master drillers, drivers,
          mechanics, as well as laborers; complete with required certification
          and licenses.
          <br />
          <br />
          In addition, having a large fleet of our own heavy excavation
          machinery – gives us the opportunity and flexibility to deliver a
          project in a cost-efficient manner while satisfying clients with early
          completion dates. Our fleet of tractor trailers, drill rigs,
          earthwork, and support equipment enable us to service our projects in
          house without having to hire subcontractors at higher costs. Kartel
          Associates has a longstanding relationship with our suppliers to
          ensure cost saving, on thime deliveries, and eliminates delays to
          projects facilities. Our current operations carry Insurance to suit
          the need of your project.
        </p>
        <div className="flex items-center gap-[7%]">
          {" "}
          <img
            src="https://i.ibb.co/16Fs2sx/about-01-109x102.png"
            alt="IMG"
            className="w-28 h-24 my-4"
          />
         <span>
         <p className="text-xl font-bold">_ _ _ _ _ _ _ _ _ _ _ _ </p>
          <p className="text-sm  font-semibold text-gray-600">
            Founder, President
          </p>
         </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
