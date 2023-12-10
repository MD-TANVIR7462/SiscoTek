import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 px-[10%] py-[5%] my-12">
      <h1 className="text-sm text-gray-500 text-center md:text-start font-semibold ">
        CONTACT US
      </h1>
      <p className="text-2xl md:text-4xl font-semibold mt-1 text-center md:text-start mb-8 md:mb-12 ">
        If you have any questions, just fill in the contact form, and we will
        answer you shortly.
      </p>
      <form className=" 00">
   
      <div className="grid grid-cols-3 gap-5 boder">
      <div className="flex gap-12 flex-col">
       
       <input
         type="text"
         name="name"
         placeholder="Name*"
         required
         className="input "
       />
    

       <input
         type="email"
         name="email"
         placeholder="Email"
         required
         className="input "
       />
     </div>
     <div className="flex gap-12 flex-col">
    
       <input
         type="text"
         name="name"
         placeholder="Company*"
         required
         className="input "
       />
    

       <input
         type="email"
         name="email"
         placeholder="Subject"
         required
         className="input "
       />
     </div>
     <textarea placeholder="Message" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
      </div>
      
      

        
       <p className="my-8">
       <a
            href="#_"
            class="relative px-4 md:px-5  py-2 md:py-3 overflow-hidden font-medium hover:border-none rounded-none text-black border border-black  shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-900 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-900 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
             SEND MESSAGE
            </span>
          </a>
       </p>
        
      </form>
    </div>
  );
};

export default ContactUs;
