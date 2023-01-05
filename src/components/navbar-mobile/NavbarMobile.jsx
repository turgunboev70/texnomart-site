import React from 'react'
import c from "./NavbarMobile.module.css"
import {TbListSearch, TbScale, TbUser} from "react-icons/tb"
import {CgShoppingCart, CgHeart} from "react-icons/cg"

const NavbarMobile = () => {
  return (
    <div className={c.navbar}>
        <ul className={c.navbar__wrapper}>
            <li className={c.navbar__item}>
                <button className={c.navbar__btn}>
                    <TbListSearch className={c.navbar__icon}/>
                    <span>Katalog</span>
                </button>
            </li>
            <li className={c.navbar__item}>
                <button className={c.navbar__btn}>
                    <TbScale className={c.navbar__icon}/>
                    <span>Taqqoslash</span>
                </button>
            </li>
            <li className={c.navbar__item}>
                <button className={c.navbar__btn}>
                    <CgShoppingCart className={c.navbar__icon}/>
                    <span>Savatcha</span>
                </button>
            </li>
            <li className={c.navbar__item}>
                <button className={c.navbar__btn}>
                    <CgHeart className={c.navbar__icon}/>
                    <span>Sevimlilar</span>
                </button>
            </li>
            <li className={c.navbar__item}>
                <button className={c.navbar__btn}>
                    <TbUser className={c.navbar__icon}/>
                    <span>Kirish</span>
                </button>
            </li>
        </ul>
    </div>
  )
}

export default NavbarMobile