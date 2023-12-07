import TeamCard from "./TeamCard";

const TeamMember = () => {
  const members = [
    {
      id: 1,
      name: "Team Member 01",
      position: "Engineer",
      image :"https://i.ibb.co/QYwydrg/user-128.png",
      discription:
        "Team Member 01 is a civil and environmental engineer with consulting engineering and construction management experience.",
    },
    {
      id: 12,
      name: "Team Member 02",
      position: "Senior Supervisor",
      image :"https://i.ibb.co/QYwydrg/user-128.png",
      discription:
        "Team Member 02 is responsible for field supervision, quality, client services and the safety of all personnel working on our projects.",
    },
    {
      id: 3,
      name: "Team Member 03",
      position: "Building Contractor",
      image :"https://i.ibb.co/QYwydrg/user-128.png",
      discription:
        "Team Member 03 oversees the construction of individual houses and multi-unit housing projects carried out by KARTEL .",
    },
    {
      id: 4,
      name: "Team Member 04",
      position: "Brick and Stone Mason",
      image :"https://i.ibb.co/QYwydrg/user-128.png",
      discription:
        "Team Member 04 specializes in building and repairing brick and stone structures that play a vital role in construction of every building.",
    },
  ];
  return (
    <div className="w-[90%] md:w-[78%] mx-auto my-16">
      <p className="text-xs text-gray-500 text-center md:text-start font-semibold  ">
        MEET THE TEAM
      </p>
      <p className="text-2xl md:text-3xl font-semibold mt-1 text-center md:text-start mb-8 md:mb-12 ">People behind our success</p>
      <div className="grid  gap-5 md:grid-cols-2 lg:grid-cols-4">
        {
            members.map(member=>(
                <TeamCard key={member.id} name={member.name} position={member.position} discription={member.discription} image={member.image} />
            


            ))
        }
      </div>
    </div>
  );
};

export default TeamMember;
