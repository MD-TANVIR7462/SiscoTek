import React from "react";
import ProjectsCardAbout from "./ProjectsCardAbout";
import { FaFistRaised,FaLightbulb } from "react-icons/fa";

const OurMIssion = () => {
    const data = [
        {
            text:"Quality",
            discription:" All construction solutions our company are based on the innovations developed by our qualified engineers.",
            icon:<FaLightbulb />
        },
        {
            text:"Quality",
            discription:" All construction solutions our company are based on the innovations developed by our qualified engineers.",
            icon:<FaFistRaised />
        },
        {
            text:"Quality",
            discription:" All construction solutions our company are based on the innovations developed by our qualified engineers.",
            icon:<FaFistRaised />
        }
    ]
  return (
    <div>
      <ProjectsCardAbout
        text={"Quality"}
        discription={
          ""
        }
        icon={<FaLightbulb />}
      ></ProjectsCardAbout>
    </div>
  );
};

export default OurMIssion;
