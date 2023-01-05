import React from 'react'
import c from "./ShoppingCart.module.css"
import { useSelector } from 'react-redux'
import basket from "../../assets/images/shopping-card.svg"
import { Link } from 'react-router-dom'
import {CgMathPlus, CgMathMinus, CgHeart, CgClose, CgTrash} from "react-icons/cg"

const ShoppingCart = ({ callback }) => {
    const selector = useSelector(state => state)

    
    return (
        <div className={c.shopping__cart}>
            <div className={c.cart__header}>
                <h2 className={c.cart__text}>Hozir xarid qilish</h2>
                <button className={c.cart__btn} onClick={() => callback(false)}>
                    <CgClose className={c.close__btn} />
                </button>
            </div>
            <div className={c.cart__body}>
                {selector?.cart?.cart.length !== 0 ?
                    <div className={c.product__wrapper}>
                        {selector?.cart?.cart.map(({ id, image, title, price, count }) =>
                            <div key={id} className={c.product__item}>
                                <div className={c.product__left}>
                                    <img src={image} alt="loading..."/>
                                    <div className={c.product__info}>
                                        <Link className={c.product__title}>{title}</Link>
                                        <span className={c.product__price}>{`${price} $`}</span>
                                    </div>
                                </div>
                                <div className={c.product__right}>
                                    <div className={c.product__count}>
                                        <button className={c.product__buttons}>
                                            <CgMathMinus/>
                                        </button>
                                        <span className={c.product__number}>{count}</span>
                                        <button className={c.product__buttons}>
                                            <CgMathPlus/>
                                        </button>
                                    </div>
                                    <div className={c.product__btns}>
                                        <CgHeart className={c.product__icon} style={{margin : "0 24px 0 4px"}}/>
                                        <CgTrash className={c.product__icon}/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    <div className={c.empty__basket}>
                        <div className={c.empty__basket__image}>
                            <img src={basket} alt="loading..." />
                        </div>
                        <div className={c.empty__basket__text}>
                            Savatchada xozirda
                            <br />
                            hech nima yo'q
                        </div>
                        <button className={c.empty__btn} onClick={() => callback(false)}>Xarid qilish</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ShoppingCart