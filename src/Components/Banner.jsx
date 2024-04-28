import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { RxArrowRight } from "react-icons/rx";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";

const Banner = () => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-5 rounded-2xl bg-blue-100 p-5">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper md:col-span-2 rounded-3xl"
        >
          <SwiperSlide>
            <img src={s3} alt="" className="h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={s1} alt="" className="h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={s2} alt="" className="h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={s4} alt="" className="h-full object-cover" />
          </SwiperSlide>
        </Swiper>
        <div className="md:col-span-3 flex flex-col justify-center items-center text-center">
          <p className="text-black text-lg sm:text-3xl mb-2 sm:mb-4">
            Welcome to <span className="font-semibold">TravelGo</span>
          </p>
          <p className="text-[#008EC4] text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">
            Good Morning!
          </p>
          <p className="text-black text-sm sm:text-lg mb-2 sm:mb-4">
            Explore beautiful places in Southeast Asia with TravelGo
          </p>
          <button className="btn glass px-4 py-2 sm:px-9 sm:py-3 text-lg sm:text-xl font-medium bg-[#008EC4] text-white rounded-full flex items-center">
            Explore Now
            <RxArrowRight className="ml-2 text-lg sm:text-xl font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
