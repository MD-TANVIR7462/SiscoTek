import { Tabs } from "keep-react";
import { Bandaids, GridFour, Bank, Aperture } from "phosphor-react";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

//dummy data

const TabsKeep = () => {
  const [superB, setSuper] = useState([]);
  const [FoundationB, setFoundation] = useState([]);
  const [excavation, setExcavation] = useState([]);

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
    
      <Tabs
        aria-label="Tabs"
        style="underline"
        borderPosition="bottom"
        iconPosition="left"
        className="text-blue-700  "
      >
        <Tabs.Item title="All " size={"20px"} icon={<Bank size={20} />}>
          <div className="grid grid-cols-1 w-[96%]  gap-y-12 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
            {data?.map((singleData) => (
              <ProjectCard
                img={singleData.image}
                name={singleData.name}
                title={singleData.title}
              ></ProjectCard>
            ))}
          </div>
        </Tabs.Item>

        <Tabs.Item title="Excavation" icon={<GridFour size={20} />}>
          <div className="grid grid-cols-1 w-[96%]  gap-y-12 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
            {excavation?.map((singleData) => (
              <ProjectCard
                img={singleData.image}
                name={singleData.name}
                title={singleData.title}
              ></ProjectCard>
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Foundation" icon={<Aperture size={20} />}>
          <div className="grid grid-cols-1 w-[96%]  gap-y-12 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
            {FoundationB?.map((singleData) => (
              <ProjectCard
                img={singleData.image}
                name={singleData.name}
                title={singleData.title}
              ></ProjectCard>
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Superstructure" icon={<Bandaids size={20} />}>
          <div className="grid grid-cols-1 w-[96%]  gap-y-12 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
            {superB?.map((singleData) => (
              <ProjectCard
                img={singleData.image}
                name={singleData.name}
                title={singleData.title}
              ></ProjectCard>
            ))}
          </div>
        </Tabs.Item>
      </Tabs>
    </>
  );
};

export default TabsKeep;
