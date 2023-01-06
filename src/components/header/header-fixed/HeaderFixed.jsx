import React, { useState, useRef } from 'react'
import c from "./HeaderFixed.module.css"
import { TbMenu2, TbMicrophone, TbSearch, TbUser, TbScale } from "react-icons/tb"
import { RiCloseFill, RiUser6Line, RiCheckboxBlankLine, RiHeartLine } from "react-icons/ri"
import { IoChevronDown } from "react-icons/io5"
import { MdOutlineShoppingCart } from "react-icons/md"
import logo from "../../../assets/images/texnomart_logo_white.svg"
import categoryList from "../../../dummy-files/categoryList.dummy.json"
import list from "../../../dummy-files/headerTop.dummy.json"
import siteLogo from "../../../assets/images/texnomart_logo.svg"
import { TfiDropbox } from "react-icons/tfi"
import CatalogMobile from '../../catalog-mobile/CatalogMobile'
import {Overlay} from "../../../utils/index"
import Login from '../../login/Login'
import ShoppingCart from '../../shopping-cart/ShoppingCart'
import { useSelector } from 'react-redux'

const HeaderFixed = () => {
    const [mobileNavActive, setMobileNavActive] = useState(false)
    const [catalogListActive, setCatalogListActive] = useState(false)
    const [catalogBarActive, setCatalogBarActive] = useState(false)
    const [loginActive, setLoginActive] = useState(false)
    const [shoppingCartActive, setShoppingCartActive] = useState(false)
    const selector = useSelector(state => state)
    const headerFixed = useRef()

    if(mobileNavActive || loginActive || shoppingCartActive || catalogBarActive) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    window.addEventListener("scroll", function(){
        headerFixed?.current?.classList.toggle(`${c.sticky}`, this.window.scrollY > 140)
    })


    return (
        <>
            <div className={c.header__fixed__wrapper} ref={headerFixed}>
                <div className="container">
                    <div className={c.header__fixed__inner}>
                        <button className={c.header__fixed__miniBtn} onClick={() => setMobileNavActive(true)}>
                            <TbMenu2 />
                        </button>
                        <div className={c.header__logo__box}>
                            <a href="/">
                                <img src={siteLogo} alt="" />
                            </a>
                        </div>
                        <div className={mobileNavActive ? `${c.header__fixed__navMobile} ${c.nav__mobile__active}` : `${c.header__fixed__navMobile}`} style={loginActive ? {zIndex: "3"} : null}>
                            <div className={c.header__nav__top}>
                                <div className={c.header__navInner__top}>
                                    <span className={c.header__nav__logo}>
                                        <a href="/">
                                            <img src={logo} alt="" />
                                        </a>
                                    </span>
                                    <button className={c.header__nav__close} onClick={() => setMobileNavActive(false)}>
                                        <RiCloseFill />
                                    </button>
                                </div>
                                <div className={c.header__nav__login}>
                                    <div className={c.header__login__icon}>
                                        <span className={c.header__icon__wrapper}>
                                            <RiUser6Line />
                                        </span>
                                    </div>
                                    <div className={c.header__login__text}>
                                        <button className={c.header__login__btn} onClick={() => setLoginActive(true)}>Kirish</button>
                                        <span className={c.header__line__span}></span>
                                        <button className={c.header__login__btn} onClick={() => setLoginActive(true)}>Ro'yxatdan o'tish</button>
                                    </div>
                                </div>
                            </div>
                            <div className={c.header__nav__list}>
                                <ul className={c.header__top__list}>
                                    <li className={`${c.header__nav__item} ${c.header__catalog}`} onClick={() => {
                                        setCatalogBarActive(true)
                                        setMobileNavActive(false)
                                    }}>
                                        <span className={c.header__catalog__iconWrapper}>
                                            <span className={c.header__catalog__wrapper}>
                                                <span className={c.header__icons}>
                                                    <RiCheckboxBlankLine />
                                                    <RiCheckboxBlankLine className={c.box__degree} />
                                                </span>
                                                <span className={c.header__icons}>
                                                    <RiCheckboxBlankLine />
                                                    <RiCheckboxBlankLine />
                                                </span>
                                            </span>
                                        </span>
                                        Maxsulotlar katalogi
                                    </li>
                                    {list.map(({ text }, index) =>
                                        <li key={index} className={c.header__nav__item}>
                                            {text}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className={c.header__input}>
                            <div className={c.header__search}>
                                <div className={c.header__search__catalog} onMouseOver={() => setCatalogListActive(true)} onMouseLeave={() => setCatalogListActive(false)}>
                                    <button className={c.header__category__btn}>
                                        <span className={c.header__categories}>Barcha kategoriyalar</span>
                                        <IoChevronDown />
                                    </button>
                                    <div className={c.header__category__list} style={catalogListActive ? { display: "block" } : { display: "none" }}>
                                        <ul>
                                            {categoryList.map((text, index) =>
                                                <li key={index} className={c.category__list}>{text}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className={c.header__input__field}>
                                    <label htmlFor="site-header-input"></label>
                                    <input className={c.header__input__el} id='site-header-input' type="text" />
                                    <button className={c.header__voice__search}>
                                        <TbMicrophone />
                                    </button>
                                </div>
                                <div className={c.header__search__btn}>
                                    <button className={c.header__search__btn__inner}>
                                        <TbSearch />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={c.header__fixed__right}>
                            <ul className={c.header__right__list}>
                                <li className={c.header__right__item}>
                                    <TfiDropbox />
                                    <span>Buyurtma holati</span>
                                </li>
                                <li className={c.header__right__item} onClick={() => setLoginActive(true)}>
                                    <TbUser />
                                    <span>Kirish</span>
                                </li>
                                <li className={c.header__right__item}>
                                    <TbScale />
                                    <span>Taqqoslash</span>
                                </li>
                                <li className={c.header__right__item}>
                                    <RiHeartLine />
                                    <span>Sevimlilar</span>
                                </li>
                                <li className={c.header__right__item} onClick={() => setShoppingCartActive(true)} style={{position : "relative"}}>
                                    <MdOutlineShoppingCart />
                                    <span>Savatcha</span>
                                    {selector?.cart?.cart.length > 0 && <div className={c.product__count}>{selector?.cart?.cart.length}</div>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {mobileNavActive && <CatalogMobile callback={setCatalogBarActive}/>}
            {mobileNavActive && <Overlay callback={setMobileNavActive}/>}
            {loginActive && <Login callback={setLoginActive}/>}
            {loginActive && <Overlay callback={setLoginActive}/>}
            {shoppingCartActive && <ShoppingCart callback={setShoppingCartActive}/>}
            {shoppingCartActive && <Overlay callback={setShoppingCartActive}/>}
        </>
    )
}

export default HeaderFixed