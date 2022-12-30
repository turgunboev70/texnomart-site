// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// required modules
import { Navigation } from "swiper";


import React from 'react'
import c from "./CatalogSlider.module.css"
import data from "../../dummy-files/catalogSwiper.dummy.json"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const CatalogSlider = () => {
    return (
        <div className={c.catalog__slider}>
            <div className="container">
                <div className={c.catalog__wrapper}>
                    <div className={c.catalog__title}>
                        <h2 className={c.catalog__text}>Ommabop kategoriyalar</h2>
                    </div>
                    <div className={c.catalog__swiper}>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={20}
                            breakpoints={{
                                375: {
                                    slidesPerView: 4
                                },
                                1024: {
                                    slidesPerView: 5
                                }
                            }}
                            navigation={{
                                prevEl: ".catalog__swiper__prev",
                                nextEl: ".catalog__swiper__next"
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {data.map(({ text, image }, index) =>
                                <SwiperSlide key={index}>
                                    <div className={c.product__box}>
                                        <div className={c.catalog__slide}>
                                            <img className={c.catalog__image} src={image} alt="loading..." />
                                            <span className={c.category__type}>{text}</span>
                                        </div>
                                        <span className={c.catalog__mobile__text}>
                                            {text}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <button className={`catalog__swiper__prev swiper__btn`}>
                            <FiChevronLeft />
                        </button>
                        <button className={`catalog__swiper__next swiper__btn`}>
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogSlider