import React from "react";
import TestmonialsCard from "./TestmonialsCard";

const TestMonials = () => {
    const testimonials = [
        {
          text: "When we needed a design and construction specialists, KARTEL was there for us. We had a vision and an idea of how much we wanted to spend and they made all of that happen.",
          name: "Peter Handerson",
          position: "CEO, Firetree Co."
        },
        {
          text: "The pressure was put on this team from the day we broke ground and they heeded the call. These dedicated young construction professionals show what great teamwork is all about.",
          name: "Jim Johnson",
          position: "Head manager, Frober Design"
        }
    ]
  return (
    <div className="my-20">
      <p className="text-sm text-gray-500 text-center md:text-start font-semibold ">
        TESTIMONIALS
      </p>
      <h1 className="text-2xl md:text-4xl font-semibold mt-1 text-center md:text-start mb-8 md:mb-12 ">
        What clients say about our company
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {
            testimonials.map(testmonial=><TestmonialsCard testmonial={testmonial}></TestmonialsCard>)
        }
      </div>
    </div>
  );
};

export default TestMonials;
