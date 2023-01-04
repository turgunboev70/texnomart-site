import React, { useState } from 'react'
import c from "./FooterMobile.module.css"
import { FiChevronRight, FiChevronDown } from "react-icons/fi"

const FooterMobile = ({ text, inner }) => {
    const [footerMenu, setFooterMenu] = useState(false)

    const footerSidebar = () => { setFooterMenu(!footerMenu) }
    return (
        <>
            <div className={c.footer__mobile} onClick={footerSidebar} >
                <div className={c.footer__content}>
                    <span>{text}</span>
                    {footerMenu ? <FiChevronDown className={c.footer__icon} /> : <FiChevronRight className={c.footer__icon} />}
                </div>
                {footerMenu && inner.map((text, index) =>
                    <div key={index} className={c.footer__text}>
                        {text}
                    </div>
                )}
            </div>
        </>
    )
}

export default FooterMobile