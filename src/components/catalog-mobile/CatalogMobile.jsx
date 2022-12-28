import React, { useState } from 'react'
import c from "./CatalogMobile.module.css"
import image from "../../assets/images/texnomart_logo_white.svg"
import { RiCloseFill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import data from "../../dummy-files/catalog.dummy.json"
import { FiChevronRight, FiChevronLeft, FiChevronDown } from "react-icons/fi"


const CatalogMobile = ({ callback }) => {
    const [catalogData, setCatalogData] = useState(null)
    const [innerData, setInnerData] = useState(null)
    const [innerActive, setInnerActive] = useState(false)

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
                                            {info.type}
                                        </span>
                                    </div>
                                    <FiChevronRight className={c.catalog__nextBtn} />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={c.catalog__option} style={catalogData === null ? { display: "none" } : { display: "flex" }} onClick={() => setCatalogData(null)}>
                        <div className={c.catalog__box}>
                            <div className={c.option__header}>
                                <FiChevronLeft className={c.option__header__icon} onClick={() => setCatalogData(null)} />
                                <span className={c.option__title}>{catalogData?.type}</span>
                            </div>
                            <div className={c.option__body}>
                                <ul className={c.option__list}>
                                    {catalogData?.inner.map(({ product, list }, index) =>
                                        <li key={index} className={c.option__item} onClick={() => {
                                            setInnerData(list)
                                            setInnerActive(true)
                                        }}>
                                            <button className={c.option__btn}>
                                                <div className={c.option__box}>
                                                    {product}
                                                </div>
                                                {list.length !== 0 ?
                                                    innerActive ? <FiChevronRight /> : <FiChevronDown />
                                                    :
                                                    null
                                                }
                                            </button>
                                            
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogMobile