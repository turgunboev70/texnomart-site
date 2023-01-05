import React from 'react'
import c from "./ShoppingCart.module.css"
import { useDispatch, useSelector } from 'react-redux'
import basket from "../../assets/images/shopping-card.svg"
import { Link } from 'react-router-dom'
import { CgMathPlus, CgMathMinus, CgHeart, CgClose, CgTrash } from "react-icons/cg"

const ShoppingCart = ({ callback }) => {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()


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
                        {selector?.cart?.cart.map((product) =>
                            <div key={product.id} className={c.product__item}>
                                <div className={c.product__left}>
                                    <img src={product.image} alt="loading..." />
                                    <div className={c.product__info}>
                                        <Link className={c.product__title}>{product.title}</Link>
                                        <span className={c.product__price}>{`${product.price} $`}</span>
                                    </div>
                                </div>
                                <div className={c.product__right}>
                                    <div className={c.product__count}>
                                        <button className={c.product__buttons} onClick={() => {
                                            dispatch({
                                                type : "DECREMENT",
                                                data : {
                                                    id : product.id,
                                                    count : product.count
                                                }
                                            })
                                        }}>
                                            <CgMathMinus />
                                        </button>
                                        <span className={c.product__number}>{product.count}</span>
                                        <button className={c.product__buttons} onClick={() => {
                                            dispatch({
                                                type: "INCREMENT",
                                                data: product
                                            })
                                        }}>
                                            <CgMathPlus />
                                        </button>
                                    </div>
                                    <div className={c.product__btns}>
                                        <CgHeart className={c.product__icon} style={{ margin: "0 24px 0 4px" }} />
                                        <CgTrash className={c.product__icon} onClick={() => {
                                            dispatch({
                                                type: "REMOVE_PRODUCT",
                                                data: {
                                                    id: product.id,
                                                    count: product.count
                                                }
                                            })
                                        }} />
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