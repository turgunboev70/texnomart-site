import React, { useState } from 'react'
import c from "./NavbarMobile.module.css"
import { TbListSearch, TbScale, TbUser } from "react-icons/tb"
import { CgShoppingCart, CgHeart } from "react-icons/cg"
import CatalogMobile from '../catalog-mobile/CatalogMobile'
import ShoppingCart from '../shopping-cart/ShoppingCart'
import { useSelector } from 'react-redux'

const NavbarMobile = () => {
    const selector = useSelector(state => state)
    const [catalogActive, setCatalogActive] = useState(false)
    const [cartActive, setCartActive] = useState(false)

    return (
        <>
            <div className={c.navbar}>
                <ul className={c.navbar__wrapper}>
                    <li className={c.navbar__item} onClick={() => setCatalogActive(true)}>
                        <button className={c.navbar__btn}>
                            <TbListSearch className={c.navbar__icon} />
                            <span>Katalog</span>
                        </button>
                    </li>
                    <li className={c.navbar__item}>
                        <button className={c.navbar__btn}>
                            <TbScale className={c.navbar__icon} />
                            <span>Taqqoslash</span>
                        </button>
                    </li>
                    <li className={c.navbar__item} onClick={() => setCartActive(true)} style={{position : "relative"}}>
                        <button className={c.navbar__btn}>
                            <CgShoppingCart className={c.navbar__icon} />
                            <span>Savatcha</span>
                            {selector?.cart?.cart.length > 0 && <div className={c.product__count}>{selector?.cart?.cart.length}</div>}
                        </button>
                    </li>
                    <li className={c.navbar__item}>
                        <button className={c.navbar__btn}>
                            <CgHeart className={c.navbar__icon} />
                            <span>Sevimlilar</span>
                        </button>
                    </li>
                    <li className={c.navbar__item}>
                        <button className={c.navbar__btn}>
                            <TbUser className={c.navbar__icon} />
                            <span>Kirish</span>
                        </button>
                    </li>
                </ul>
            </div>
            { catalogActive && <CatalogMobile callback={setCatalogActive}/>}
            {cartActive && <ShoppingCart callback={setCartActive}/>}
        </>
    )
}

export default NavbarMobile