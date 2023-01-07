import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import c from "./Pdp.module.css"
import { FiStar } from "react-icons/fi"
import { BsCartCheck, BsCart2 } from "react-icons/bs"
import { CgHeart } from "react-icons/cg"
import { TbScale } from "react-icons/tb"
import perfect from "../../assets/images/est_v_nalichi.svg"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCart from "../../components/shopping-cart/ShoppingCart"
import {HiOutlineCursorClick} from "react-icons/hi"

const Pdp = () => {
    const [shoppingCart, setShoppingCart] = useState(false)
    const params = useParams()
    const [product, setProduct] = useState(null)
    const selector = useSelector(state => state)
    const dispatch = useDispatch()


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return (
        <>
            <div className={c.pdp__page}>
                <div className="container">
                    <div className={c.breadcrump}>
                        <ul className={c.breadcrump__list}>
                            <li className={c.breadcrump__item}><Link to={`/`}>Bosh sahifa</Link></li>
                            <li className={c.breadcrump__item}>{product?.title}</li>
                        </ul>
                    </div>
                    <div className={c.product__top}>
                        <div className={c.product__left}>
                            <h1 className={c.product__title}>{product?.title}</h1>
                            <div className={c.product__icons}>
                                <div className={c.product__rating}>
                                    {new Array(5).fill(`*`).map((star, index) =>
                                        <FiStar key={index} />
                                    )}
                                </div>
                                <button className={c.product__icon}>
                                    <CgHeart />
                                </button>
                                <button className={c.product__icon}>
                                    <TbScale />
                                </button>
                            </div>
                        </div>
                        <div className={c.product__right}>
                            <span className={c.product__code}>Kod: 23432</span>
                        </div>
                    </div>
                    <div className={c.product__detail}>
                        <div className={c.detail__left}>
                            <div className={c.product__widget}>
                                <div className={c.product__status}>
                                    Zo'r narx
                                </div>
                                <div className={c.product__available}>
                                    <img src={perfect} alt="loading.." width={16} height={16} />
                                    <span className={c.available__text}>Mavjud</span>
                                </div>
                            </div>
                            <div className={c.product__image}>
                                <img src={product?.image} alt="loading..." />
                            </div>
                        </div>
                        <div className={c.detail__middle}>

                        </div>
                        <div className={c.detail__right}>
                            <div className={c.detail__btns}>
                                <div className={c.detail__price}>
                                    <div className={c.price__left}>{`${product?.price} $`}</div>
                                    <div className={c.price__right}>
                                        <button className={c.product__priceIcon}>
                                            <CgHeart />
                                        </button>
                                        <button className={c.product__priceIcon}>
                                            <TbScale />
                                        </button>
                                    </div>
                                </div>
                                <button className={c.product__buy}>
                                    {selector?.cart?.cart.find((e) => e.id === product.id) ?
                                        <div className={c.product__inCart} onClick={() => setShoppingCart(true)}>
                                            <BsCartCheck className={c.product__cardIcon}/>
                                            <span>Savatchada</span>
                                        </div>
                                        :
                                        <div className={c.product__addCart} onClick={() => {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                data: {
                                                    ...product,
                                                    count : 1
                                                }
                                            })
                                        }}>
                                            <BsCart2 className={c.product__cardIcon}/>
                                            <span>Savatchaga</span>
                                        </div>
                                    }
                                </button>
                                <button className={c.product__oneClick}>
                                    <HiOutlineCursorClick className={c.product__cardIcon}/>
                                    Birgina click orqali xarid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {shoppingCart && <ShoppingCart callback={setShoppingCart}/>}
        </>
    )
}

export default Pdp