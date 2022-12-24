import React, { useState } from 'react'
import c from "./HeaderFixed.module.css"
import { TbMenu2 } from "react-icons/tb"
import { RiCloseFill, RiUser6Line, RiCheckboxBlankLine } from "react-icons/ri"
import {IoChevronDown} from "react-icons/io5"
import logo from "../../../assets/images/texnomart_logo_white.svg"
import categoryList from "../../../dummy-files/categoryList.dummy.json"
import list from "../../../dummy-files/headerTop.dummy.json"

const HeaderFixed = () => {
    const [mobileNavActive, setMobileNavActive] = useState(false)
    const [catalogListActive, setCatalogListActive] = useState(false)


    return (
        <div className={c.header__fixed__wrapper}>
            <div className="container">
                <div className={c.header__fixed__inner}>
                    <button className={c.header__fixed__miniBtn} onClick={() => setMobileNavActive(true)}>
                        <TbMenu2 />
                    </button>
                    <div className={mobileNavActive ? `${c.header__fixed__navMobile} ${c.nav__mobile__active}` : `${c.header__fixed__navMobile}`}>
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
                                    <button className={c.header__login__btn}>Kirish</button>
                                    <span className={c.header__line__span}></span>
                                    <button className={c.header__login__btn}>Ro'yxatdan o'tish</button>
                                </div>
                            </div>
                        </div>
                        <div className={c.header__nav__list}>
                            <ul className={c.header__top__list}>
                                <li className={`${c.header__nav__item} ${c.header__catalog}`}>
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
                                {list.map(({text}) => 
                                <li className={c.header__nav__item}>
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
                                    <IoChevronDown/>
                                </button>
                                <div className={c.header__category__list} style={catalogListActive ? {display : "block"} : {display : "none"}}>
                                    <ul>
                                        {categoryList.map(text => 
                                        <li className={c.category__list}>{text}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className={c.header__input__field}></div>
                            <div className={c.header__search__btn}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderFixed