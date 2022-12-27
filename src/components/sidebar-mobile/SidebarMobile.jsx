// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper";
import React from 'react'
import c from "./SidebarMobile.module.css"
import images from "../../dummy-files/imagesMobile.dummy.json"

const Sidebar = () => {
  return (
    <div className={c.swiper__wrapper}>
      <Swiper
      slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect={"fade"}
        loop={true}
        pagination={{clickable : true}}
        modules={[Pagination, Autoplay, EffectFade]}
        className={`mySwiper ${c.my__swipper}`}
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




