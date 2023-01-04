import React from 'react'
import c from "./Login.module.css"
import { CgClose } from "react-icons/cg"

const Login = () => {
    return (
        <div className={c.login__content}>
            <div className={c.login__inner}>
                <div className={c.login__header}>
                    <button className={c.login__btn}>Kirish</button>
                    <button className={c.login__btn}>Ro'yhatdan o'tish</button>
                    <button className={c.login__close}>
                        <CgClose />
                    </button>
                </div>
                <div className={c.login__body}>
                    <div className={c.login__first}>
                        <form className={c.login__form}>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">E-mail<span>*</span></label>
                                <input className={c.login__input} required type="email" />
                            </div>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">Parol<span>*</span></label>
                                <input className={c.login__input} required type="text" />
                            </div>
                        </form>
                    </div>
                    <div className={c.login__second}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login