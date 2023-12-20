import ServicesBenner from "../ServicesPage/servicesComponents/ServicesBenner";
import ServicesCard from "../ServicesPage/servicesComponents/ServicesCard";
import TabsKeep from "./ProjectPageComponents/Tabs";

const ProjectPage = () => {
  return (
    <div>
      <ServicesBenner
        img={"https://i.ibb.co/8rq16zQ/istockphoto-1469653478-2048x2048.jpg"}
      ></ServicesBenner>
      <p className="w-[80%] mx-auto">
      <div className="mt-[5%] mb-[4%]">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold  ">
          Our Projects
        </p>
        <p className="text-lg text-gray-500 font-semibold mt-6 ">
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
