import ServicesBenner from "../ServicesPage/servicesComponents/ServicesBenner";
import ServicesCard from "../ServicesPage/servicesComponents/ServicesCard";
import TabsKeep from "./ProjectPageComponents/Tabs";

const ProjectPage = () => {
  return (
    <div >
      <ServicesBenner
        img={"https://i.ibb.co/8rq16zQ/istockphoto-1469653478-2048x2048.jpg"}
      ></ServicesBenner>
      <p className="sm:w-[95%] md:w-[90%] lg:w-[80%] mx-auto  w-[98%] mb-[3%]">
        <div className="mt-[5%] mb-[4%]">
          <p className="text-2xl sm:text-3xl md:text-4xl text-center md:text-start lg:text-6xl font-bold  ">
            Our Projects
          </p>
          <p className=" text-sm sm:text-sm md:text-base lg:text-lg text-gray-500 font-semibold text-center md:text-start mt-[3%] lg:mt-6 ">
            The Kartel Associates team has a combination of over 100 years of
            experience in the construction industry
          </p>
        </div>
        <TabsKeep></TabsKeep>
      </p>
    </div>
  );
};

export default ProjectPage;
