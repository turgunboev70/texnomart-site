import React, {useState} from 'react'
import c from "./Login.module.css"
import { CgClose } from "react-icons/cg"

const Login = ({callback}) => {
    const [signIn, setSignIn] = useState(true)




    return (
        <div className={c.login__content}>
            <div className={c.login__inner}>
                <div className={c.login__header}>
                    <button className={c.login__btn} onClick={() => setSignIn(true)} style={signIn ? {backgroundColor : "#fff"} : {backgroundColor : "transparent"}}>Kirish</button>
                    <button className={c.login__btn} onClick={() => setSignIn(false)} style={!signIn ? {backgroundColor : "#fff"} : {backgroundColor : "transparent"}}>Ro'yhatdan o'tish</button>
                    <button className={c.login__close} onClick={() => callback(false)}>
                        <CgClose className={c.login__close__icon}/>
                    </button>
                </div>
                <div className={c.login__body}>
                    <div className={c.login__first} style={signIn ? {display : "block"} : {display : "none"}}>
                        <form className={c.login__form}>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">E-mail<span>*</span></label>
                                <input className={c.login__input} required type="email" />
                            </div>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">Parol<span>*</span></label>
                                <input className={c.login__input} required type="text" />
                            </div>
                            <button className={c.form__btn}>E-mail orqali kirish</button>
                        </form>
                    </div>
                    <div className={c.login__second} style={!signIn ? {display : "block"} : {display : "none"}}>
                    <form className={c.login__form}>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">E-mail<span>*</span></label>
                                <input className={c.login__input} required type="email" />
                            </div>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">Parol<span>*</span></label>
                                <input className={c.login__input} required type="text" />
                            </div>
                            <button className={c.form__btn}>Ro'yhatdan o'tish</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login