import React from "react"
import style from "../styles/dash.module.css"
export default function Dash() {
    
    return(
        
        <div className={style.dash}>
            <div className={style.content}>
                {/* <img src="/api/images/sign-out" alt="" onClick={
                    (e) => {
                        if(e.type === "click") {
                            window.localStorage.removeItem("user")
                            window.location.reload()
                        }
                    }
                } /> */}
            </div>
            <div className={style.menu}>
                
                <h2 style={{fontWeight:"bold"}}>Dashboard</h2>
               
                
            </div>
            <div className={style.toggler}>

            </div>
            <div className={style.features}>
                
                <div className={style.card}>

                </div>
                <div className={style.card}>

                </div>
                <div className={style.card}>

                </div>
                <div className={style.card}>

                </div>
            </div>
            
        </div>
    )
}
