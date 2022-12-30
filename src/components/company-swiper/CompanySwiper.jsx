// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// required modules
import { Navigation } from "swiper";

import React from 'react'
import brands from "../../dummy-files/brands.dummy.json"
import c from "./CompanySwiper.module.css"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const CompanySwiper = () => {    
    return (
        <div className={c.company__wrapper}>
            <div className="container">
                <div className={c.company__swiper__box}>
                    <Swiper
                        navigation={
                            {
                                clickable : true,
                                prevEl : ".swiper__btn__prev",
                                nextEl : ".swiper__btn__next"
                            }
                        }
                        breakpoints={{
                            375 : {
                                slidesPerView : 4
                            },
                            768 : {
                                slidesPerView : 6
                            },
                            1024 : {
                                slidesPerView : 8
                            }
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={30}   
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {brands.map((brand, id) =>
                            <SwiperSlide key={id}>
                                <div className={c.brands__box}>
                                    <img className={c.brands__image} src={brand} alt="loading.." width={64} height={40}/>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <button className={`swiper__btn__prev swiper__btn`}>
                            <FiChevronLeft/>
                    </button>
                    <button className={`swiper__btn__next swiper__btn`}>
                            <FiChevronRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CompanySwiper
