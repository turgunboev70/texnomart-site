import React from 'react'
import { Link } from "react-router-dom"
import c from "./ProductCart.module.css"
import {FiShoppingCart, FiHeart} from "react-icons/fi"
import {BsCartCheck} from "react-icons/bs"
import {TbScale} from "react-icons/tb"

const ProductCart = ({ id, image, title, price }) => {
    return (
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
                        <div className={c.product__cart__btn}>
                            <button className={c.shopping__btn}>
                                <span className={c.icon__after}>
                                    <FiShoppingCart/>
                                </span>
                                <span className={c.icon__before}>
                                    <BsCartCheck/>
                                </span>
                                <span className={c.basket__text}>Savatchaga</span>
                            </button>
                        </div>
                        <div className={c.product__cart__basket}>

                        </div>
                        <div className={c.product__action__right}>
                            <button className={c.action__btn}>
                                <FiHeart/>
                            </button>
                            <button className={c.action__btn}>
                                <TbScale/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCart