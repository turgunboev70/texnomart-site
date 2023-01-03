import React from 'react'
import c from "./AppInstall.module.css"
import image from "../../assets/images/phone-min.png"
import quar from "../../assets/images/quar-code.png"
import link_image from "../../assets/images/play-market-uz.png"
 
const AppInstall = () => {
  return (
    <div className={c.install__section}>
        <div className="container">
            <div className={c.banner__wrapper}>
                <div className={c.banner__left}>
                    <img src={image} alt="" />
                </div>
                <div className={c.banner__right}>
                    <h2 className={c.banner__title}>Ilovani yuklang</h2>
                    <p className={c.banner__info__desc}>Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!</p>
                    <div className={c.banner__quar}>
                        <img src={quar} alt="" width={96} height={96}/>
                        <span className={c.quar__text}>Kamerani  yo`naltiring va Texnomart ilovasini bepul yuklang</span>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.texnomart.app" target={"blank"}>
                        <img src={link_image} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppInstall