// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper";
import React from 'react'
import c from "./SidebarDesktop.module.css"
import images from "../../dummy-files/swiperImages.dummy.json"

const Sidebar = () => {
  return (
    <div className={c.swiper__wrapper}>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        className={`mySwiper`}
      >
        {images.map((image, id) =>
          <SwiperSlide key={id}>
            <img className={c.swiper__image} src={image} alt="loading..." />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default Sidebar




