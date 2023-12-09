import React from "react";
import WhyUsCard from "./WhyUsCard";

const HeroWHyUS = () => {
  const Datas = [
    {
      _id: 1,
      image: "https://i.ibb.co/3pxTr4D/1325-Jerome-Avenue.jpg",
      title: "Why Us",
      description:
        "We're dedicated to giving you the best service possible by keeping our solutions reliable, long-standing, and effective.Our strength is the value we add through high quality service, practical knowledge and experience-based advice in how to design and utilize our state-of-the-art equipment for all aspects of new structures to meet the needs and expectations of our clients. We continuously update our Safety, Management and Methods Folder keeping up to date with trending information covering our work. Our ability to respond to customer requests, supplying high quality product and implementing product or service improvements that come from listening to our customers is the gauge of our success",
      discription2:
        "We're dedicated to giving you the best service possible by keeping our solutions reliable, long-standing, and effective.",
    },

    {
      _id: 2,
      image: "https://i.ibb.co/pjVpSxF/why-us-02-610x410.jpg",
      title: "Our Mission",
      description:
        "Our mission is to provide exemplary service and strive to go to the next level for our customers. Management realizes that we are responsible to keep our customers and employees happy. We have a commitment to keep safe, well-maintained projects with the goal of finding ways of making our product better, faster and safer than we have ever before. Our goal is to provide a good place to work, treat people as we would be expected to be treated and pay a fair wage for a fair day's work. We recognize that we are going to be only as successful as our employee's cooperation will allow. We appreciate our employees and do the best we can to extend our companies' success in a way that affects a tangible reward to each employee.",
      discription2:
        "We measure our performance in terms of satisfied customers. The management, stff and employees of Kartel Associates Inc. have a mission to provide the best quality concrete structures to our customers at the best possible price. We strive to work with our customers at solving the problems they encounter in the field in effort to create new business opportunities for our company.",
    },
    {
      _id: 3,
      image: "https://i.ibb.co/9c2rPm2/why-us-05-610x410-1.jpg",
      title: "Team Work",
      description:
        "We ask of our employees the recognition that we as employers have the ultimate task of running our business the best we know how. To plan, schedule, and manage our projects with the best interest of the owners, employees and customers at heart. A key part of our attitude towards our employees, customers and suppliers is one of respect. We respect the rights of our employees and their privacy and we ask that in return there exists a respect of our investment in machinery, tools, equipment and facilities. We ask our employees to treat our company as a place of employment where the success of the company results in all employees and staff sharing in that success.",
      discription2:
        "Our employees are part of a team that must work together to do the best job we can for our ultimate owners; our customers. Without the customer's satisfaction with our product, price, and service we would not be able to exist.",
    },

    {
      _id: 4,
      image: "https://i.ibb.co/nnQVRcZ/980-Westchester-Avenue.jpg",
      title: "Safety",
      description:
        "The Safety Trained Supervisor Construction (STSC) is intended for leaders at all levels of an organization because all employees have responsibilities for a safe work environment. This Certification is intended for executives, directors, managers, supervisors, superintendents, and employees. These individuals may not have safety as a primary duty, but their knowledge of safety practices ensures safer and healthier worksites, and their competency strengthens the foundation of safety in the organization. The STSC sets standard baseline knowledge across the organization.Our Management Team includes dedicated Sie Safety Compliance Officer whom overseas all phases of projects to ensure full compliance with city agencies and client/owner safety requirements.",
      discription2:
        "Safety is emphasized on each and every one of our jobsites to stress our commitment to our employees and our vendors. A safe jobsite not only gets people home safe and sound every evening, but it creates an efficient, high quality job environment for our employees and our customers.",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 my-12">
      {Datas.map((data) => (
        <WhyUsCard key={data._id} data={data}></WhyUsCard>
      ))}
    </div>
  );
};

export default HeroWHyUS;
