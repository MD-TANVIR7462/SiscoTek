import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const SponsorsSection = () => {
  const Data = [
    { _id: "user", url: "https://i.ibb.co/5nt2WHc/brand-01-159x90-1.png" },
    {
      _id: "brand02",
      url: "https://i.ibb.co/G0HpDPv/brand-02-164x90-Copy.png",
    },
    {
      _id: "brand03",
      url: "https://i.ibb.co/59TxHVs/brand-03-124x90-1-Copy.png",
    },
    { _id: "brand04", url: "https://i.ibb.co/3N4rCHD/brand-04-133x90-1.png" },
    { _id: "brand05", url: "https://i.ibb.co/Lt0Wkyc/brand-05-126x90.png" },
    { _id: "brand06", url: "https://i.ibb.co/tYpTsnp/brand-06-164x90.png" },
    { _id: "userd", url: "https://i.ibb.co/5nt2WHc/brand-01-159x90-1.png" },
    { _id: "brand0d4", url: "https://i.ibb.co/3N4rCHD/brand-04-133x90-1.png" },
  ];
  return (
    <div className=" pb-4 md:pb-0  md:py-12  w-[60%]  md:w-[90%] mx-auto">
      <Swiper
      
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ paddingBottom: "6%"}}
      >
        {Data.map((item) => (
          <SwiperSlide key={item._id} >
            <img
              src={item.url}
             
          
              className="w-[70%] h-[100px] md:h-[90px] lg:h-[100px] mx-auto mb-3 md:w-[90%] lg:w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorsSection;
