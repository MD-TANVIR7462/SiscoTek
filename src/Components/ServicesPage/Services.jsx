import React from "react";
import ServicesBenner from "./servicesComponents/ServicesBenner";
import ServicesHero from "./servicesComponents/ServicesHero";
import ServicesCard from "./servicesComponents/ServicesCard";

const Services = () => {
  return (
    <>
      <ServicesBenner></ServicesBenner>
      <div className="w-[92%] p-2 md:w-[90%] mx-auto lg:w-[85%] xl:w-[80%]">
        <ServicesHero></ServicesHero>
        <ServicesCard></ServicesCard>
      </div>
    </>
  );
};

export default Services;