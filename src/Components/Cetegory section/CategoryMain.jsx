

import Category from "./Category";

const CategoryMain = () => {
  return (
    <div className="my-12 w-[90%] md:w-[60%] lg:w-[77%] mx-auto grid  lg:grid-cols-2 md:gap-5">
      <Category
        text={"Foundation"}
        discription={
          "Our specialization allows us to Foundation any type of project and that’s why we are considered the best on the market."
        }
        img={"https://i.ibb.co/qLGtvj2/istockphoto-897664288-2048x2048.jpg"}
      ></Category>
      <Category
        text={"Superstructure"}
        discription={
          "While prioritizing our quality of work, our safety protocols never take a back seat."
        }
        img={"https://i.ibb.co/McddhX1/istockphoto-1346403814-2048x2048.jpg"}
      ></Category>
      <Category
        text={"Excavation"}
        discription={
          "Our fleet of tractor trailers, drill rigs, earthwork, and support equipment enable us to service our projects in house without having to hire subcontractors at higher costs."
        }
        img={"https://i.ibb.co/nmbm4qQ/istockphoto-1443177554-2048x2048.jpg"}
      ></Category>
      <Category
        text={"Support of Excavation"}
        discription={
          "Kartel Associates has a longstanding relationship with our suppliers to ensure cost saving, on time deliveries, and eliminates delays to projects facilities."
        }
        img={"https://i.ibb.co/jymBYc3/istockphoto-1470161618-2048x2048.jpg"}
      ></Category>
    </div>
  );
};

export default CategoryMain;
