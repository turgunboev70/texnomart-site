import c from "./index.module.css"

const Overlay = ({type, callback}) => {
    return (
        <div onClick={() => callback(false)} className={c.overlay} style={type === "login" ? {inset : "0"} : null}></div>
    )
}

export {Overlay}