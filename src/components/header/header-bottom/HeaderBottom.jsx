import React, { useEffect, useState } from 'react'
import c from "./HeaderBottom.module.css"
import { RiCheckboxBlankLine, RiCloseFill } from "react-icons/ri"
import CatalogDesktop from '../../catalog-desktop/CatalogDesktop'

const HeaderBottom = () => {
    const [categoryList, setCategoryList] = useState(null)
    const [catalogActive, setCatalogActive] = useState(false)

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, [])

    return (
        <>
            <div className={c.header__bottom}>
                <div className="container">
                    <div className={c.header__bottom__wrapper}>
                        <button className={c.header__bottom__btn} onClick={() => setCatalogActive(!catalogActive)}>
                            {catalogActive ?
                                <span className={c.header__close__catalog}>
                                    <RiCloseFill />
                                </span>
                                :
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
                            }
                            <span className={c.header__catalog__text}>Katalog</span>
                        </button>
                        <ul className={c.header__bottom__list}>
                            {categoryList?.slice(0, 8).map(({ name }, index) =>
                                <li key={index} className={c.header__bottom__promotions}>{name}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            {catalogActive && <CatalogDesktop />}
        </>
    )
}

export default HeaderBottom