import React, { useEffect, useState } from 'react'
import c from "./HeaderBottom.module.css"
import {RiCheckboxBlankLine, RiCloseFill} from "react-icons/ri"

const HeaderBottom = () => {
    const [categoryList, setCategoryList] = useState(null)
    const [catalogActive, setCatalogActive] = useState(false)

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, [])

    console.log(categoryList);

    return (
        <div className={c.header__bottom}>
            <div className="container">
                <div className={c.header__bottom__wrapper}>
                    <button className={c.header__bottom__btn}>
                        {catalogActive ?
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
                            :
                            <span>
                                <RiCloseFill/>
                            </span>
                        }
                    </button>
                    <ul className={c.header__bottom__list}>
                        {categoryList?.map(({ name }) =>
                            <li>{name}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom