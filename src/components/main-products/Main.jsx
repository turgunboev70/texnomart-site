import React, { useState, useEffect } from 'react'
import ProductSwiper from '../product-swiper/ProductSwiper'

const Main = () => {
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProductData(data))
            .catch(err =>  console.error(err))
    }, [])

    console.log(productData);
    return (
        <>
            <ProductSwiper productData={productData?.slice(0, 10)} status={`Zo'r narx`} id={1}/>
            <ProductSwiper productData={productData?.slice(10, 20)} status={`Xit savdo`} id={2}/>
            <ProductSwiper productData={productData?.slice(5, 15)} status={`Tavsiya etamiz`} id={3}/>
        </>
    )
}

export default Main