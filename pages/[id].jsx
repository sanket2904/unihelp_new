import React from "react"
import dynamic from "next/dynamic"
import style from "../styles/product.module.css"

const Top = dynamic(() => import("../components/top"))
export default function Bundles() {
    return(
        <>
            <Top />
            <div className={style.items}>
                <div className={style.item}>
                    <div className={style.leftImage}>
                        <img src="https://images.unsplash.com/photo-1616627561950-9f746e330187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                    </div>
                    <div className={style.right}>
                        <h1>Main title of the package</h1>
                        <h3>Price of the package</h3>
                    </div>
                </div>
            </div>
        </>
    )
}