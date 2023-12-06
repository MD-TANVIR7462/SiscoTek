import { Parallax } from "react-parallax";

const Perallax = () => {
  return (
    <Parallax
      bgImage="https://i.ibb.co/8rq16zQ/istockphoto-1469653478-2048x2048.jpg "
      strength={500}
    >
      <div className="bg-opacity-70 bg-gray-900 py-16 pl-[6%] ">
        <div className="bg-opacity-70  md:p-[5%]   text-white   w-[50%]">
          <h2 className="text-xs text-white text-start font-semibold  ">
            WORK WITH US
          </h2>
          <p className="text-[32px] font-semibold text-start mb-12 ">
            A network of expert, trusted, <br /> successful builders
          </p>
          <a
                href="#_"
                class="relative px-4 md:px-5  py-2 md:py-3 overflow-hidden font-medium text-white border border-gray-100  hover:border-none shadow-inner group"
              >
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-900 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-900 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  GET IN TOUCH
                </span>
              </a>
        </div>
        
      </div>
    </Parallax>
  );
};

export default Perallax;
