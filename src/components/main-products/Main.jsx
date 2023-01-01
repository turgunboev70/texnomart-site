import React, { useState, useEffect } from 'react'
import ProductSwiper from '../product-swiper/ProductSwiper'

const Main = () => {
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(data => setProductData(data))
            .catch(err =>  console.error(err))
    }, [])

    console.log(productData);
    return (
        <>
            {/* <ProductSwiper productData={productData?.slice(0, 20)} status={`Zo'r narx`} id={1}>

            </ProductSwiper> */}
        </>
    )
}

export default Main