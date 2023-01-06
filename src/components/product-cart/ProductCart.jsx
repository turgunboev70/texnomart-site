import React, { useState } from 'react'
import { Link } from "react-router-dom"
import c from "./ProductCart.module.css"
import { FiShoppingCart, FiHeart } from "react-icons/fi"
import { CgMathMinus, CgMathPlus } from "react-icons/cg"
import { BsCartCheck } from "react-icons/bs"
import { TbScale } from "react-icons/tb"
import { Provider, useDispatch, useSelector } from 'react-redux'

const ProductCart = ({ id, image, title, price }) => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)


    const dispatchProducts = (data) => {
        const action = {
            type: "ADD_TO_CART",
            data: data
        }

        dispatch(action)
    }
    return (
        <>
        <div className={c.product__inner}>
            <div className={c.product__top}>
                <Link to={"/product-page"}>
                    <img className={c.product__image} src={image} alt="loading..." />
                </Link>
            </div>
            <div className={c.product__bottom}>
                <div className={c.product__bottom__top}>
                    <Link className={c.product__title__link}>
                        <h3 className={c.product__title}>
                            {title}
                        </h3>
                    </Link>
                </div>
                <div className={c.product__bottom__down}>
                    <div className={c.product__sales}>
                        <div className={c.product__price}>
                            {`${price} $`}
                        </div>
                    </div>
                    <div className={c.product__actions}>
                        {selector?.cart?.cart.find((e) => e.id === id) ?
                            <button className={c.product__inCart}>
                                <div className={c.product__saved}>
                                    <span className={c.icon__before}>
                                        <BsCartCheck />
                                    </span>
                                </div>
                                <div className={c.product__count}>
                                    <button className={c.product__num} onClick={() => {
                                            dispatch({
                                                type : "DECREMENT",
                                                data : {
                                                    id : id,
                                                    count : selector?.cart?.cart.find((e) => e.id === id).count
                                                }
                                            })
                                        }}>
                                        <CgMathMinus />
                                    </button>
                                    <span className={c.product__amount}>{selector?.cart?.cart.find((e) => e.id === id).count}</span>
                                    <button className={c.product__num} onClick={() => {
                                            dispatch({
                                                type: "INCREMENT",
                                                data: {
                                                    id : id,
                                                    image : image,
                                                    title : title,
                                                    count : selector?.cart?.cart.find((e) => e.id === id).count,
                                                    price: price
                                                }
                                            })
                                        }}>
                                        <CgMathPlus />
                                    </button>
                                </div>
                            </button>
                            :
                            <div className={c.product__cart__btn}>
                                <button className={c.shopping__btn} onClick={() => dispatchProducts({ id, image, title, price, count: 1 })}>
                                    <span className={c.icon__after}>
                                        <FiShoppingCart />
                                    </span>
                                    <span className={c.basket__text}>Savatchaga</span>
                                </button>
                                <div className={c.product__action__right}>
                                    <button className={c.action__btn}>
                                        <FiHeart />
                                    </button>
                                    <button className={c.action__btn}>
                                        <TbScale />
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={c.product__cart__basket}>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductCart