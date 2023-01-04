import React from 'react'
import c from "./Footer.module.css"
import data from "../../dummy-files/footerMobile.json"
import FooterMobile from '../footer-mobile/FooterMobile'
import playmarket from "../../assets/images/playmarket-logo-black.svg"
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa'
import FooterDesktop from '../footer-desktop/FooterDesktop'


const Footer = () => {
    return (
        <footer className={c.footer}>
            <div className="container">
                <div className={c.footer__inner}>
                    <div className={c.footer__top}>
                        <div className={c.footer__top__left}>
                            <div className={c.left__content}>
                                <p>Savolingiz bormi? Qo'ng'iroq qiling</p>
                                <a href="tel: +998941245559">+998 94 124 55 59</a>
                            </div>
                            <ul className={c.left__list}>
                                <li className={c.left__item}>
                                    <a href='https://www.facebook.com/texnomart' target={'blank'}>
                                        <FaFacebookF className={c.social__icon} />
                                    </a>
                                </li>
                                <li className={c.left__item}>
                                    <a href='https://t.me/texnomart' target={'blank'}>
                                        <FaTelegramPlane className={c.social__icon} />
                                    </a>
                                </li>
                                <li className={c.left__item}>
                                    <a href='https://www.instagram.com/texnomart/' target={'blank'}>
                                        <FaInstagram className={c.social__icon} />
                                    </a>
                                </li>
                                <li className={c.left__item}>
                                    <a href='https://www.youtube.com/c/Texnomart' target={'blank'}>
                                        <FaYoutube className={c.social__icon} />
                                    </a>
                                </li>
                            </ul>
                            <a href="https://play.google.com/store/apps/details?id=com.texnomart.app" target={'blank'}>
                                <img src={playmarket} alt="" />
                            </a>
                        </div>
                        <div className={c.right__mobile}>
                            {data.map(({ text, inner }, index) =>
                                <FooterMobile key={index} text={text} inner={inner} />
                            )}
                        </div>
                        <div className={c.right__desktop}>
                            {data.map(({ text, inner }, index) =>
                                <FooterDesktop key={index} text={text} inner={inner} />
                            )}
                        </div>
                    </div>
                    <div className={c.footer__bottom}></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer