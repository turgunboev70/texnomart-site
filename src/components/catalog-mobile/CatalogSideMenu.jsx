import React, { useState } from 'react'
import c from "./CatalogMobile.module.css"
import { FiChevronRight, FiChevronDown } from "react-icons/fi"


const CatalogSideMenu = ({ item }) => {
    const [submenu, setSubmenu] = useState(false)

    const showSubmenu = () => { setSubmenu(!submenu) }
    return (
        <>
            <div className={c.option__item} onClick={showSubmenu}>
                <button className={c.option__btn}>
                    <div className={c.option__box}>
                        {item.subtitle}
                    </div>
                    {item.subMenu && submenu
                        ? <FiChevronDown />
                        : item.subMenu
                            ? <FiChevronRight />
                            : null
                    }
                </button>
            </div>
            {submenu && item?.subMenu?.map((item, index) =>
                <div className={c.submenu__wrapper} >
                    <div className={c.submenu__box}>
                        <div key={index} className={c.div__key}>
                            {item}
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default CatalogSideMenu