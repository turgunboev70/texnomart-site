import React, { useState } from 'react'
import c from "./Login.module.css"
import { CgClose } from "react-icons/cg"
import { auth } from "../../firebase/config"

const Login = ({ callback }) => {
    const [signIn, setSignIn] = useState(true)
    const [createUserEmail, setCreateUserEmail] = useState("")
    const [createUserPassword, setCreateUserPassword] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [possibleError, setPossibleError] = useState("")

    const createUser = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(createUserEmail, createUserPassword)
        .then(res => {
            if(res) {
                callback(false)
            }
        })
    }

    const loginUser = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(res => {
            if(res) {
                callback(false)
            } 
        })
        .catch(err => setPossibleError(err))
    }


    return (
        <div className={c.login__content}>
            <div className={c.login__inner}>
                <div className={c.login__header}>
                    <button className={c.login__btn} onClick={() => setSignIn(true)} style={signIn ? { backgroundColor: "#fff" } : { backgroundColor: "transparent" }}>Kirish</button>
                    <button className={c.login__btn} onClick={() => setSignIn(false)} style={!signIn ? { backgroundColor: "#fff" } : { backgroundColor: "transparent" }}>Ro'yhatdan o'tish</button>
                    <button className={c.login__close} onClick={() => callback(false)}>
                        <CgClose className={c.login__close__icon} />
                    </button>
                </div>
                <div className={c.login__body}>
                    <div className={c.login__first} style={signIn ? { display: "block" } : { display: "none" }}>
                        <form className={c.login__form} onSubmit={createUser}>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">E-mail<span>*</span></label>
                                <input className={c.login__input} required type="email" onChange={(e) => setCreateUserEmail(e.target.value)}/>
                            </div>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">Parol<span>*</span></label>
                                <input className={c.login__input} required type="password" onChange={(e) => setCreateUserPassword(e.target.value)}/>
                            </div>
                            <button className={c.form__btn}>E-mail orqali kirish</button>
                        </form>
                    </div>
                    <div className={c.login__second} style={!signIn ? { display: "block" } : { display: "none" }}>
                        <form className={c.login__form} onSubmit={loginUser}>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">E-mail<span>*</span></label>
                                <input className={c.login__input} required type="email" onChange={(e) => setUserEmail(e.target.value)}/>
                            </div>
                            <div className={c.login__box}>
                                <label className={c.login__label} htmlFor="login">Parol<span>*</span></label>
                                <input className={c.login__input} required type="text" onChange={(e) => setUserPassword(e.target.value)}/>
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