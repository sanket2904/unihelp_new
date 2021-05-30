import React from "react"
import style from "../styles/loader.module.css"
export default function Loader() {
    return (
        <div className={style.loader}>
            <img src="/api/images/loader" alt="" />
        </div>
    )
}