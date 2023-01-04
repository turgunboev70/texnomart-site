import React from 'react'
import c from "./FooterDesktop.module.css"

const FooterDesktop = ({ inner, text }) => {
    return (
        <div className={c.desktop__main}>
            <div className={c.desktop__context}>
                {text}
            </div>
            <ul className={c.desktop__list}>
                {inner.map((text, index) => 
                    <li key={index}>{text}</li>
                )}
            </ul>
        </div>
    )
}

export default FooterDesktop