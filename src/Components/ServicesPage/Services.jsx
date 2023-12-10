import React from "react";
import ServicesBenner from "./servicesComponents/ServicesBenner";
import ServicesHero from "./servicesComponents/ServicesHero";
import ServicesCard from "./servicesComponents/ServicesCard";
import TestMonials from "./servicesComponents/TestMonials";
import ContactUs from "./servicesComponents/ContactUs";
import SponcersSection from "./servicesComponents/SponcersSection";

const Services = () => {
  return (
    <>
      <ServicesBenner></ServicesBenner>
      <div className="w-[92%] p-2 md:w-[90%] mx-auto lg:w-[85%] xl:w-[80%]">
        <ServicesHero></ServicesHero>
        <ServicesCard></ServicesCard>
        <TestMonials></TestMonials>
      </div>
      <ContactUs></ContactUs>
      <div className="w-[92%] p-2 md:w-[90%] mx-auto lg:w-[85%] xl:w-[80%]">
        <SponcersSection></SponcersSection>
      </div>
    </>
  );
};

export default Services;
