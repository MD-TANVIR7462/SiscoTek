// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BENNER from './BENNER';

const BENNERMAIN = () => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><BENNER img={"https://i.ibb.co/VJWc40j/high-angle-city-streets-park.jpg"}></BENNER></SwiperSlide>
          <SwiperSlide><BENNER img={"https://i.ibb.co/9V9j8Vd/business-office-sky-cityscape-tourism.jpg"}></BENNER></SwiperSlide>
          <SwiperSlide><BENNER img={"https://i.ibb.co/7WGP2YL/city-landscape-with-tall-buildings-high-angle.jpg"}></BENNER></SwiperSlide>
         
      
        </Swiper>
      </>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BENNERMAIN;

