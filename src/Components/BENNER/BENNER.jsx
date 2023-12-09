'use client';

const BENNER = ({ img }) => {
  return (
    <>
      <div
        className="bg-cover bg-center md:w-full md:min-h-[700px] min-h-[440px]   flex justify-center items-center  md:bg-opacity-90"
        style={{
          backgroundImage: `url(${img})`,

         
        }}
      >
        <div className="text-center md:flex hero-overlay  bg-opacity-50 min-h-[500px]   md:min-h-[860px] items-center w-[100%]  mx-auto">
          <div className="max-w-3xl  mx-auto  mt-[40%] md:mt-12">
            <p className="md:text-5xl lg:text-6xl text-3xl  font-semibold text-white">
              We build foundation and superstructures
            </p>

            <p className="my-5 md:my-8 text-sm px-[5%] text-white md:text-base ">
              KARTEL is the leading construction company on the market. We are
              trusted partners of both small and international companies located
              worldwide.
            </p>
            <div className="flex justify-center items-center gap-5 ">
            <a
                href="#_"
                class="relative px-4 md:px-10 py-2 md:py-3 rounded-nonefont-medium text-white transition duration-300 bg-yellow-400   hover:bg-yellow-600  ease"
              >
                <span class="absolute bottom-0 left-0 h-full -ml-2 ">
                  <svg
                    viewBox="0 0 487 487"
                    class="w-auto h-full opacity-100 object-stretch"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                  <svg
                    viewBox="0 0 487 487"
                    class="object-cover w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      fill="#FFF"
                      fill-rule="nonzero"
                      fill-opacity=".1"
                    ></path>
                  </svg>
                </span>
                <span class="relative">OUR SERVICES</span>
              </a>
              <a
                href="#_"
                class="relative px-4 md:px-5  py-2 md:py-3 overflow-hidden font-medium hover:border-none rounded-none text-white border border-gray-100  shadow-inner group"
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
        </div>
      </div>
    </>
  );
};

export default BENNER;
