import React from 'react'
import c from "./CatalogMobile.module.css"
import image from "../../assets/images/texnomart_logo_white.svg"
import { RiCloseFill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import data from "../../dummy-files/catalog.dummy.json"
import {FiChevronRight} from "react-icons/fi"


const CatalogMobile = ({callback}) => {
    return (
        <div className={c.catalog__mobile}>
            <div className={c.catalog__wrapper}>
                <div className={c.catalog__header}>
                    <Link to={"/"}>
                        <img src={image} alt="loading..." />
                    </Link>
                    <RiCloseFill className={c.catalog__close} onClick={() => callback(false)}/>
                </div>
                <div className={c.catalog__body}>
                    <ul className={c.catalog__list}>
                        {data.map((info) =>
                            <li className={c.catalog__item}>
                                <div className={c.catalog__item__inner}>
                                    <img className={c.catalog__icon} src={info.icon} alt="loading..." />
                                    <span className={c.catalog__text}>
                                        {info.type}
                                    </span>
                                </div>
                                <FiChevronRight className={c.catalog__nextBtn}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CatalogMobile