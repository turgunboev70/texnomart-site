import React, { useState } from 'react'
import c from "./HeaderTop.module.css"
import { FiPhone } from "react-icons/fi"
import { SlLocationPin } from "react-icons/sl"
import logo from "../../../assets/images/texnomart_logo.svg"
import headerPages from "../../../dummy-files/headerTop.dummy.json"

const HeaderTop = () => {
  const locationNames = ["Toshkent", "Buxoro", "Andijon", "Fergana", "Namangan", "Samarqand"]
  const [userLocation, setUserLocation] = useState("Toshkent")
  const [dropdownActive, setDropdownActive] = useState(false)

  return (
    <div className={c.header__top}>
      <div className='container'>
        <div className={c.header__topInner}>
          <span className={c.header__logo__left}>
            <a className={c.header__logo__link} href="/">
              <img src={logo} alt="loading..." width="152" height="32" />
            </a>
          </span>
          <div className={c.header__top__right}>
            <span className={c.header__right__icon}>
              <a href="tel:+998941245559">
                <FiPhone />
              </a>
            </span>
            <div className={c.header__top__location} onMouseLeave={() => setDropdownActive(false)}>
              <button className={c.header__region} onMouseOver={() => setDropdownActive(true)} >
                <SlLocationPin className={c.header__userLocation}/>
                <span>
                  {userLocation}
                </span>
              </button>
              <div className={c.header__location__dropdown} style={dropdownActive ? {display : "block"} : {display : "none"}}>
                {locationNames.map((city, index) =>
                  <div key={index} onClick={() => setUserLocation(city)} className={c.header__dropdown__city}>
                    {city}
                  </div>
                )}
              </div>
            </div>
            <div className={c.header__top__pages}>
                  <ul className={c.header__top__list}>
                    {headerPages.map(({text}, index) => 
                    <li key={index} className={`${c.header__pages}`}>{text}</li>
                    )}
                  </ul>
            </div>
          </div>
          <div className={c.header__top__call}>
            <a href="tel:+998941245559">
              <span className={c.header__call__centre}>Aloqa markazi : </span>
              <FiPhone className={c.call__icon}/>
              <span> +99894 124 55 59</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop