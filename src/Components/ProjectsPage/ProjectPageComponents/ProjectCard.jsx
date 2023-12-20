import React from 'react';
import { 

    Card,

 } from "keep-react";
const ProjectCard = ({img,name,title}) => {
    return (
        <Card
          className=" w-full sm:w-[94%] md:w-[96%] lg:w-[90%]   overflow-hidden rounded-sm h-[40dvh]"
          imgSrc={img}
          imgSize="lg">
          <Card.Container className="space-y-3 p-6">
            <Card.Container>
              <Card.Title className=" font-semibold text-metal-700 md:text-body-2">{name}</Card.Title>
              <Card.Description className="text-body-5 font-medium text-metal-500 pt-2">{title}</Card.Description>
            </Card.Container>
         
          </Card.Container>
        </Card>
    );
};

export default ProjectCard;