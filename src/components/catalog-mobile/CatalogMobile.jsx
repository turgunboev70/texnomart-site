import React, { useState } from 'react'
import c from "./CatalogMobile.module.css"
import image from "../../assets/images/texnomart_logo_white.svg"
import { RiCloseFill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import data from "../../dummy-files/catalogMenu.dummy.json"
import { FiChevronRight, FiChevronLeft} from "react-icons/fi"
import CatalogSideMenu from './CatalogSideMenu'


const CatalogMobile = ({ callback }) => {
    const [catalogData, setCatalogData] = useState(null)

    return (
        <>
            <div className={c.catalog__mobile}>
                <div className={c.catalog__wrapper}>
                    <div className={c.catalog__header}>
                        <Link to={"/"}>
                            <img src={image} alt="loading..." />
                        </Link>
                        <RiCloseFill className={c.catalog__close} onClick={() => callback(false)} />
                    </div>
                    <div className={c.catalog__body} style={catalogData === null ? { display: "flex" } : { display: "none" }}>
                        <ul className={c.catalog__list}>
                            {data.map((info) =>
                                <li className={c.catalog__item} onClick={() => setCatalogData(info)}>
                                    <div className={c.catalog__item__inner}>
                                        <img className={c.catalog__icon} src={info.icon} alt="loading..." />
                                        <span className={c.catalog__text}>
                                            {info.title}
                                        </span>
                                    </div>
                                    <FiChevronRight className={c.catalog__nextBtn} />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={c.catalog__option} style={catalogData === null ? { display: "none" } : { display: "flex" }}>
                        <div className={c.catalog__box}>
                            <div className={c.option__header}>
                                <FiChevronLeft className={c.option__header__icon} onClick={() => setCatalogData(null)} />
                                <span className={c.option__title}>{catalogData?.title}</span>
                            </div>
                            <div className={c.option__body}>
                                <div className={c.option__list}>
                                    {catalogData?.subNav?.map((item, index) =>
                                        <CatalogSideMenu item={item} key={index}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogMobile