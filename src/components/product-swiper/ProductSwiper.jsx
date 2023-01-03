// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// required modules
import { Navigation } from "swiper";

import React from 'react'
import c from "./ProductSwiper.module.css"
import ProductCart from "../product-cart/ProductCart";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

const ProductSwiper = ({ productData, status, id }) => {
    const zorNarx = { background: "#333", color: "#f8b523" }
    const xitSavdo = { background: "#ff3600", color: "#fff" }
    const tavsiyaEtamiz = { background: "#54c6eb", color: "#fff" }
   
    return (
        <div className={c.product__wrapper}>
            <div className="container">
                <div className={c.product__carousel}>
                    <div className={c.product__status}>
                        <h2 className={c.status__text}>{status}</h2>
                    </div>
                    <div className={c.product__slider}>
                        <Swiper
                            slidesPerView={"auto"}
                            breakpoints={{
                                1300: {
                                    slidesPerView: 6
                                }
                            }}
                            navigation={{
                                prevEl: `.product-prev${id}`,
                                nextEl: `.product-next${id}`
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {productData?.map(({ id, title, price, image }) =>
                                <SwiperSlide className={c.product__slide} key={id}>
                                    <div className={c.product__action}>
                                        <div className={c.product__action__text} style={
                                            status === `Zo'r narx`
                                                ? zorNarx
                                                : status === `Xit savdo`
                                                    ? xitSavdo
                                                    : tavsiyaEtamiz
                                        }>
                                            {status}
                                        </div>
                                        <ProductCart id={id} image={image} title={title} price={price} />
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <button className={`product-prev${id} swiper__btn`} style={{left: "-20px"}}>
                            <FiChevronLeft />
                        </button>
                        <button className={`product-next${id} swiper__btn`} style={{right: "-20px"}}>
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSwiper
