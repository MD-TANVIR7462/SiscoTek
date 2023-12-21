import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

//dummy data

const TabsKeep = () => {
  const [superB, setSuper] = useState([]);
  const [FoundationB, setFoundation] = useState([]);
  const [excavation, setExcavation] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  const data = [
    {
      _id: 1,
      name: "980 Westchester Avenue",
      title: "Superstructure",
      image: "https://i.ibb.co/gvGMttC/980-Westchester-Avenue.jpg",
    },
    {
      _id: 2,
      name: "1325 Jerome Avenue Residences",
      title: "BusinessBuilding",
      image: "https://i.ibb.co/xgW498K/1325-Jerome-Avenue.jpg",
    },
    {
      _id: 3,
      name: "Victoria Theater Bronx",
      title: "BusinessBuilding",
      image: "https://i.ibb.co/pvDTc2T/istockphoto-897664288-2048x2048.jpg",
    },
    {
      _id: 4,
      name: "651 Fourth Avenue",
      title: "Superstructure",
      image: "https://i.ibb.co/JnSyhgC/istockphoto-1346403814-2048x2048.jpg",
    },
    {
      _id: 5,
      name: "Excavation",
      title: "Superstructure",
      image: "https://i.ibb.co/WP9SG3L/istockphoto-1470161618-2048x2048.jpg",
    },
    {
      _id: 6,
      name: "Superstructure",
      title: "CommercialBuilding",
      image: "https://i.ibb.co/PhnDmsk/services-01-610x390.jpg",
    },
    {
      _id: 7,
      name: "Foundation",
      title: "BusinessBuilding",
      image: "https://i.ibb.co/pRypHZ9/Superstructure.jpg",
    },
    {
      _id: 8,
      name: "Foundation",
      title: "Superstructure",
      image: "https://i.ibb.co/jJRvwQq/why-us-02-610x410.jpg",
    },
    {
      _id: 9,
      name: "105 West 28th Street NYC",
      title: "105 West 28th Street NYC",
      image: "https://i.ibb.co/zS18HPy/why-us-05-610x410-1.jpg",
    },
  ];

  useEffect(() => {
    if (data) {
      const superData = data?.filter(
        (singleData) => singleData.name === "Superstructure"
      );
      const FoundationData = data?.filter(
        (singleData) => singleData.name === "Foundation"
      );
      const ExcavationData = data?.filter(
        (singleData) => singleData.name === "Excavation"
      );

      setFoundation(FoundationData);
      setSuper(superData);
      setExcavation(ExcavationData);
    }
  }, []);
  return (
    <>
      <div className=" my-[1%]   mx-auto">
        <div>
          <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
            <span className="md:flex md:justify-between mb-8">
              <TabList className="flex justify-center md:justify-normal md:space-x-4 p-2 rounded-lg mb-5 ">
                <Tab
                  className={`cursor-pointer  text-sm sm:text-md md:text-lg lg:text-xl font-semibold px-2 md:px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                    activeTabIndex === 0
                      ? "border-b-4  "
                      : ""
                  }`}
                >
                  All
                </Tab>
                <Tab
                  className={`cursor-pointer  text-sm sm:text-md md:text-lg lg:text-xl font-semibold px-2 md:px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                    activeTabIndex === 1
                      ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                      : ""
                  }`}
                >
                  Excavation
                </Tab>
                <Tab
                  className={`cursor-pointer  text-sm sm:text-md md:text-lg lg:text-xl font-semibold px-2 md:px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                    activeTabIndex === 2
                      ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                      : ""
                  }`}
                >
                  Foundation
                </Tab>
                <Tab
                  className={`cursor-pointer  text-sm sm:text-md md:text-lg lg:text-xl font-semibold px-2 md:px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                    activeTabIndex === 3
                      ? " border-[#FF2020] text-red-700 bg-red-400"
                      : ""
                  }`}
                >
                  Superstructure
                </Tab>
              </TabList>
            </span>

            <TabPanel>
              <div className="grid grid-cols-1 w-[96%] mx-auto  gap-y-5 sm:gap-y-7  md:gap-y-8 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
                {data?.map((singleData) => (
                  <ProjectCard
                    img={singleData.image}
                    name={singleData.name}
                    title={singleData.title}
                  ></ProjectCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 w-[96%] mx-auto gap-y-5 sm:gap-y-7  md:gap-y-8 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
                {excavation?.map((singleData) => (
                  <ProjectCard
                    img={singleData.image}
                    name={singleData.name}
                    title={singleData.title}
                  ></ProjectCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 w-[96%] mx-auto  gap-y-5 sm:gap-y-7  md:gap-y-8 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
                {FoundationB?.map((singleData) => (
                  <ProjectCard
                    img={singleData.image}
                    name={singleData.name}
                    title={singleData.title}
                  ></ProjectCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 w-[96%] mx-auto  gap-y-5 sm:gap-y-7  md:gap-y-8 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
                {superB?.map((singleData) => (
                  <ProjectCard
                    img={singleData.image}
                    name={singleData.name}
                    title={singleData.title}
                  ></ProjectCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default TabsKeep;
