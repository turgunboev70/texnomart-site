// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// required modules
import { Navigation } from "swiper";

import React, { useEffect, useState } from 'react'
import c from "./ProductSwiper.module.css"

const ProductSwiper = ({ productData, status, id}) => {
    const zorNarx = { background: "#333", color: "#f8b523" }
    const xitSavdo = { background: "#ff3600", color: "#fff" }
    const tavsiyaEtamiz = { background: "#54c6eb", color: "#fff" }
    return (
        <div className={c.product__swiper}>
            <Swiper
                slidesPerView={"auto"}
                breakpoints={{
                    1300 : {
                        slidesPerView : 6
                    }
                }}
                navigation={{
                    prevEl : `.product-prev${id}`,
                    nextEl : `.product-next${id}`
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductSwiper
