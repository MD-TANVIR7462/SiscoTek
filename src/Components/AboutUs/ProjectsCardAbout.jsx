import React from 'react';
import { Card, Popover } from "keep-react";
import {
  DotsThreeVertical,
} from "phosphor-react";
const ProjectsCardAbout = ({text,discription,icon}) => {
    return (
        <>

        <Card className="p-4 max-w-xl">
          <Card.Container className="flex gap-5">
            <Card.Container className="flex items-start gap-5">
              <Card.Container className="flex items-center justify-start  rounded-full p-1 ">
              <p className='text-[70px] text-blue-500' > {icon}</p>
              </Card.Container>
              <Card.Container className="flex flex-col gap-2">
                <p className='text-gray-400 font-semibold text-sm'>PROJECTS</p>
                <Card.Title>{text}</Card.Title>
                <Card.Description>
               {discription}
                </Card.Description>
              </Card.Container>
            </Card.Container>
            <Card.Container className="hidden items-start md:flex">
              <Popover className="!w-[20rem]">
                <Popover.Title>Book Mark Now</Popover.Title>
                <Popover.Action>
                  <DotsThreeVertical size={24} color="#5E718D" className="flex cursor-pointer items-start" />
                </Popover.Action>
              </Popover>
            </Card.Container>
          </Card.Container>
        </Card>
 
      </>
    );
};

export default ProjectsCardAbout;

